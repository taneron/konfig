import * as path from "path";
import * as fs from "fs-extra";
import { SdkPagePropsWithPropertiesOmitted } from "./collect";
import { parseSpec } from "konfig-lib";
import camelcase from "konfig-lib/dist/util/camelcase";
import { Published, customRequestSpecsDir } from "./util";
import yaml from "js-yaml";
import { generateSdkDynamicPath } from "./util";
import { getMethodObjects } from "../src/get-method-objects";
import { generateTypescriptSdkUsageCode } from "../src/generate-typescript-sdk-usage-code";
import execa from "execa";
import kebabcase from "lodash.kebabcase";
import { PublishJson, publishJsonSchema } from "../src/publish-json-schema";
import { getLocalKonfigCliVersion } from "../src/get-local-konfig-cli-version";

const publishJsonPath = path.join(path.dirname(__dirname), "publish.json");
const specDataDirPath = path.join(path.dirname(__dirname), "db", "spec-data");
const publishedDirPath = path.join(path.dirname(__dirname), "db", "published");
const progressYamlsPath = path.join(path.dirname(__dirname), "db", "progress");
const apiDirPath = path.join(
  path.dirname(__dirname),
  "openapi-directory",
  "APIs"
);
const dataFromHtmlPath = path.join(
  path.dirname(__dirname),
  "db",
  "data-from-html.json"
);
const openapiExamplesPath = path.join(
  path.dirname(__dirname),
  "openapi-examples"
);
const fixedSpecsOutputPath = path.join(
  path.dirname(__dirname),
  "db",
  "fixed-specs"
);
const fixedSpecsCacheOutputPath = path.join(
  path.dirname(__dirname),
  "db",
  "fixed-specs-cache"
);
const intermediateFixedSpecsOutputPath = path.join(
  path.dirname(__dirname),
  "db",
  "intermediate-fixed-specs"
);

/**
 * This is the name of the OAS file inside openapi-examples
 */
const openapiFilename = "openapi.yaml";

/**
 * Collects all the data needed to publish the SDKs from the publish.json and spec-data
 *
 * @returns A map from spec to PublishDatum
 */
function collectAllPublishData() {
  const publishJson: PublishJson = publishJsonSchema.parse(
    JSON.parse(fs.readFileSync(publishJsonPath, "utf-8"))
  );
  const dataFromHtml = JSON.parse(fs.readFileSync(dataFromHtmlPath, "utf-8"));

  return Object.fromEntries(
    Object.entries(publishJson.publish).map(([spec, publishData]) => {
      const specDataPath = path.join(specDataDirPath, spec);
      const specData: SdkPagePropsWithPropertiesOmitted = JSON.parse(
        fs.readFileSync(`${specDataPath}.json`, "utf-8")
      );

      if (publishData.metaDescription === undefined) {
        publishData.metaDescription = dataFromHtml[spec]?.description;
        if (publishData.metaDescription === undefined) {
          throw Error(`❌ ERROR: No metaDescription for ${spec}`);
        }
      }

      const companyKebabCase = kebabcase(publishData.company.toLowerCase());
      const serviceName = getServiceName({ publishData, specData });
      const serviceKebabCase =
        serviceName !== undefined
          ? kebabcase(serviceName.toLowerCase())
          : undefined;

      const dynamicPath = generateSdkDynamicPath(
        publishData.company,
        serviceKebabCase
      );

      // find existence of files in openapi-examples
      const openapiExamplesDirPath = path.join(
        openapiExamplesPath,
        dynamicPath
      );
      if (!fs.existsSync(openapiExamplesDirPath)) {
        throw Error(
          `❌ ERROR: openapi-examples directory does not exist at ${openapiExamplesDirPath}`
        );
      }

      // find file that starts with "logo" in openapiExamplesDirPath
      const logoPath = fs
        .readdirSync(openapiExamplesDirPath)
        .find((file) => file.startsWith("logo"));
      if (logoPath === undefined) {
        throw Error(
          `❌ ERROR: logo does not exist at ${openapiExamplesDirPath}`
        );
      }

      // find file that starts with "favicon" in openapiExamplesDirPath
      const faviconPath = fs
        .readdirSync(openapiExamplesDirPath)
        .find((file) => file.startsWith("favicon"));
      if (faviconPath === undefined) {
        throw Error(
          `❌ ERROR: favicon does not exist at ${openapiExamplesDirPath}`
        );
      }

      // find file that starts with "imagePreview" in openapiExamplesDirPath
      const imagePreviewPath = fs
        .readdirSync(openapiExamplesDirPath)
        .find((file) => file.startsWith("imagePreview"));
      if (imagePreviewPath === undefined) {
        throw Error(
          `❌ ERROR: imagePreview does not exist at ${openapiExamplesDirPath}`
        );
      }

      const githubUrlPrefix = `https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/${dynamicPath}/`;

      const nonEmptyCategories =
        publishData.categories ?? specData.categories ?? [];
      if (nonEmptyCategories.length === 0) {
        throw Error(`❌ ERROR: No categories for ${openapiExamplesDirPath}`);
      }
      return [
        spec,
        {
          companyKebabCase,
          serviceKebabCase,
          dynamicPath,
          openapiExamplesDirPath,
          publishData,
          githubUrlPrefix,
          imagePreviewPath,
          faviconPath,
          logoPath,
          specData,
          nonEmptyCategories,
          apiDescription: publishData.apiDescription,
          metaDescription: publishData.metaDescription,
        },
      ];
    })
  );
}

/**
 * Handle the overwrite/cancel logic of the serviceName property
 */
function getServiceName({
  publishData,
  specData,
}: {
  publishData: { serviceName?: string | false };
  specData: { serviceName?: string };
}): string | undefined {
  if (publishData.serviceName === false) {
    return undefined;
  }
  if (publishData.serviceName !== undefined) {
    return publishData.serviceName;
  }
  return specData.serviceName;
}

type FixedSpecCache = {
  publishJson: PublishJson["publish"][string];
  rawSpecString: string;
  konfigCliVersion: string;
};
function saveFixedSpechCache({
  path,
  cache,
}: {
  path: string;
  cache: FixedSpecCache;
}) {
  fs.writeFileSync(path, yaml.dump(cache));
}

async function main() {
  const publishJson: PublishJson = publishJsonSchema.parse(
    JSON.parse(fs.readFileSync(publishJsonPath, "utf-8"))
  );
  const now = new Date();
  const publishedJsons: Set<string> = new Set();

  fs.ensureDirSync(fixedSpecsOutputPath);
  fs.ensureDirSync(progressYamlsPath);

  const publishDatum = collectAllPublishData();

  /**
   * This is a map from spec to fixedSpecFileName to be populated in the first
   * pass and used in the second pass
   */
  const fixedSpecFileNames: Record<string, string> = {};

  /**
   * First pass: write fixed specs to fixed-specs/
   *
   * Note: This entire phase is cacheable by four things:
   * 1. Equality of publish.json entry
   * 2. Equality of rawSpecString (which is the contents of the OAS file)
   * 3. Equality of version of konfig-cli
   * 4. The existence of the fixed spec
   * If all four are true, then we can skip this entire phase
   */
  const promises: Promise<void>[] = [];
  const fixSpecNotWorkingList = ["ably.io_platform_1.1.0"];
  const t1 = Date.now();
  for (const spec in publishDatum) {
    const publishData = publishJson.publish[spec];
    const { dynamicPath, specData } = publishDatum[spec];
    const fixedSpecFileName = getFixedSpecFileName(publishData.sdkName);
    fixedSpecFileNames[spec] = fixedSpecFileName;
    const fixedSpecPath = path.join(fixedSpecsOutputPath, fixedSpecFileName);
    const fixedSpecCachePath = path.join(
      fixedSpecsCacheOutputPath,
      fixedSpecFileName
    );
    let rawSpecString = getRawSpecString(specData);

    /**
     * Lets see if we can skip this spec
     */
    const fixedSpecCache: FixedSpecCache | undefined = fs.existsSync(
      fixedSpecCachePath
    )
      ? (yaml.load(
          fs.readFileSync(fixedSpecCachePath, "utf-8")
        ) as FixedSpecCache)
      : undefined;
    if (
      fixedSpecCache !== undefined &&
      JSON.stringify(fixedSpecCache.publishJson) ===
        JSON.stringify(publishData) &&
      fixedSpecCache.rawSpecString === rawSpecString &&
      fixedSpecCache.konfigCliVersion === getLocalKonfigCliVersion() &&
      fs.existsSync(fixedSpecPath)
    ) {
      console.log(`⚪️ Skipping ${spec} because it is cached`);
      continue;
    }

    const oas = await parseSpec(rawSpecString);

    /**
     * 1.a Perform any overrides authored in publish.json
     */

    // if publishData includes securitySchemes then override the securitySchemes in oas
    if (publishData.securitySchemes) {
      if (!oas.spec.components) oas.spec.components = {};
      oas.spec.components.securitySchemes = publishData.securitySchemes;
      oas.spec.security = Object.keys(publishData.securitySchemes).map(
        (key) => ({ [key]: [] })
      );
    }

    // if publishData includes apiStatusUrls then configure the vendor extension x-api-status-urls in oas
    if (publishData.apiStatusUrls !== undefined) {
      if (!oas.spec.info) oas.spec.info = {} as any;
      if (publishData.apiStatusUrls !== "inherit")
        (oas.spec.info as any)["x-api-status-urls"] = publishData.apiStatusUrls;
    }

    /**
     * 1.b Write to intermediate-fixed-specs/ to be later fixed in 1.c
     */
    const openapiFilename = "openapi.yaml";
    const specIntermediatePathDirectory = path.join(
      intermediateFixedSpecsOutputPath,
      dynamicPath
    );
    fs.ensureDirSync(specIntermediatePathDirectory);
    const specIntermediatePath = path.join(
      specIntermediatePathDirectory,
      openapiFilename
    );

    /**
     *
     * Dylan: The reason why we do this is so we can author "securitySchemes" in
     * the publish.json and then override the securitySchemes in the OAS before
     * fixing it
     */
    // write oas to openapiExamples directory to file openapi.yaml
    fs.writeFileSync(specIntermediatePath, yaml.dump(oas.spec));

    if (fixSpecNotWorkingList.includes(spec)) {
      console.log(`🟡 Skipping ${spec} because it is in fixSpecNotWorkingList`);
      // If the spec is in fixSpecNotWorkingList, then we simply write the spec to fixedSpecsOutputPath
      // and don't fix it
      fs.writeFileSync(fixedSpecPath, yaml.dump(oas.spec));
      continue;
    }

    /**
     * 1.c Fix the spec
     */
    promises.push(fixSpec(specIntermediatePath, fixedSpecPath));

    // Save cache to avoid repeating this phase in the future
    saveFixedSpechCache({
      path: fixedSpecCachePath,
      cache: {
        publishJson: publishData,
        rawSpecString,
        konfigCliVersion: getLocalKonfigCliVersion(),
      },
    });
  }
  await Promise.all(promises);
  const t2 = Date.now();
  console.log(`⏱️ Fixed all specs in ${(t2 - t1) / 1000} seconds`);

  /**
   * Second pass: write to published/
   */
  for (const spec in publishDatum) {
    const {
      openapiExamplesDirPath,
      nonEmptyCategories,
      publishData,
      githubUrlPrefix,
      logoPath,
      imagePreviewPath,
      faviconPath,
      metaDescription,
    } = publishDatum[spec];
    const specDataPath = path.join(specDataDirPath, spec);
    const { categories, ...specData }: SdkPagePropsWithPropertiesOmitted =
      JSON.parse(fs.readFileSync(`${specDataPath}.json`, "utf-8"));

    const typescriptSdkUsageCode = generateTypescriptSdkUsageCode({
      ...specData,
      ...publishData,
    });

    // write fixed oas to openapiExamples directory to file openapi.yaml
    const fixedSpecFileName = fixedSpecFileNames[spec];
    const fixedSpecPath = path.join(fixedSpecsOutputPath, fixedSpecFileName);
    const fixedSpecString = fs.readFileSync(fixedSpecPath, "utf-8");
    if (fixedSpecString === "") {
      throw Error(`❌ ERROR: ${fixedSpecPath} is empty`);
    }
    const oas = await parseSpec(fixedSpecString);
    fs.writeFileSync(
      path.join(openapiExamplesDirPath, "openapi.yaml"),
      yaml.dump(oas.spec)
    );

    const serviceName = getServiceName({ publishData, specData });

    const merged: Published = {
      ...specData,
      ...publishData,
      categories: nonEmptyCategories,
      methods: getMethodObjects(oas),
      metaDescription,
      originalSpecUrl: specData.openApiRaw,
      logo: `${githubUrlPrefix}${logoPath}`,
      openApiRaw: `${githubUrlPrefix}${openapiFilename}`,
      previewLinkImage: `${githubUrlPrefix}${imagePreviewPath}`,
      faviconUrl: `${githubUrlPrefix}${faviconPath}`,
      clientNameCamelCase: camelcase(publishData.clientName),
      lastUpdated: now,
      typescriptSdkUsageCode,
      fixedSpecFileName: fixedSpecFileNames[spec],
      serviceName,
    };

    if (
      merged.originalSpecUrl === undefined &&
      merged.originalCustomRequest === undefined
    ) {
      throw Error(
        `❌ ERROR: No originalSpecUrl or originalSpecPostRequest for ${spec}`
      );
    }

    const publishedPath = path.join(publishedDirPath, spec);
    publishedJsons.add(`${publishedPath}.json`);

    // check if JSON in published/ is exactly the same besides the "lastUpdated" property
    const exists = fs.existsSync(`${publishedPath}.json`);
    if (exists) {
      const existing = JSON.parse(
        fs.readFileSync(`${publishedPath}.json`, "utf-8")
      );

      // temporarily "lastUpdated" property for comparison below
      // copy and delete the property to preserve lastUpdated for merged
      delete existing.lastUpdated;
      const mergedCopy: any = { ...merged };
      delete mergedCopy.lastUpdated;

      if (JSON.stringify(existing) === JSON.stringify(mergedCopy)) {
        console.log("⚪️ No changes detected for", spec);
        continue;
      }
    }

    // write to "published/" directory
    console.log(`🔵 Writing ${publishedPath} to disk`);
    fs.writeFileSync(`${publishedPath}.json`, JSON.stringify(merged, null, 2));
  }

  // delete any specs that are not in publishedJsons
  const publishedFiles = fs.readdirSync(publishedDirPath);
  for (const file of publishedFiles) {
    if (!publishedJsons.has(path.join(publishedDirPath, file))) {
      console.log("🔴 Deleting old file", file);
      fs.unlinkSync(path.join(publishedDirPath, file));
    }
  }
}

function getFixedSpecFileName(sdkName: string) {
  const companyAndPlatform = sdkName.replace("-{language}-sdk", "");
  return `${companyAndPlatform}-fixed-spec.yaml`;
}

async function fixSpec(
  specInputPath: string,
  specOutputPath: string
): Promise<void> {
  if (!fs.existsSync(specOutputPath)) fs.writeFileSync(specOutputPath, "");
  const progressYamlPath = path.join(
    progressYamlsPath,
    path.basename(specOutputPath.replace("-fixed-spec", "-progress"))
  );
  // const cliName = "konfig";
  const cliName = path.join(
    path.dirname(path.dirname(__dirname)),
    "generator",
    "konfig-dash",
    "packages",
    "konfig-cli",
    "bin",
    "run"
  ); // for development
  const args = [
    "fix",
    "--noInput",
    "-i",
    specInputPath,
    "-s",
    specOutputPath,
    "-p",
    progressYamlPath,
  ];
  if (process.env.DEBUG !== undefined) {
    console.debug(`🟢 Running "${cliName} ${args.join(" ")}"`);
  }
  try {
    await execa(cliName, args, { env: { ALLOW_INVALID_REF: "1" } });
  } catch (err) {
    console.log(`❌ ERROR: ${err}`);
  }
  console.log(`✅ Fixed spec ${path.dirname(specInputPath)}/openapi.yaml`);
}

function getSpecPathFromSpecData(
  specData: SdkPagePropsWithPropertiesOmitted
): string {
  if (specData.openapiDirectoryPath) {
    return path.join(apiDirPath, specData.openapiDirectoryPath);
  } else if (specData.customRequestSpecFilename) {
    return path.join(customRequestSpecsDir, specData.customRequestSpecFilename);
  } else {
    throw Error(`❌ ERROR: No spec found for ${specData}`);
  }
}

function getRawSpecString(specData: SdkPagePropsWithPropertiesOmitted) {
  const specPath = getSpecPathFromSpecData(specData);
  return fs.readFileSync(specPath, "utf-8");
}

main().then(() => console.log("Done"));
