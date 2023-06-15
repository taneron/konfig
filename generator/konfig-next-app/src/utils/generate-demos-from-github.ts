import { App } from "octokit";
import { Demo, Organization, Portal } from "./demos";
import * as yaml from "js-yaml";
import { z } from "zod";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { toString } from "mdast-util-to-string";

/**
 * Custom mappings to preserve existing links for SnapTrade
 */
const _mappings: {
  organization: Record<string, string>;
  repository: Record<string, string>;
} = {
  organization: {
    snaptrade: "passiv",
  },
  repository: {
    "snaptrade-demos": "snaptrade-sdks",
  },
};

const demoYamlSchema = z.object({
  organizationName: z.string(),
  portalName: z.string(),
  demos: z
    .object({
      id: z.string(),
    })
    .array()
    .optional(),
});

async function _findRepository({
  gitHub,
  eachRepository,
}: {
  gitHub: { owner: string; repo: string };
  eachRepository: App["eachRepository"];
}) {
  for await (const { octokit, repository } of eachRepository.iterator()) {
    if (!repository.owner.login) continue;
    if (repository.owner.login !== gitHub.owner) continue;
    if (repository.name !== gitHub.repo) continue;
    return { ...gitHub, octokit, repository };
  }
  return null;
}

export function invalidateDemoGenerationCache() {}
export function computeCacheKey({
  orgId,
  portalId,
}: Omit<GenerationInput, "demoId">): string {
  return `${orgId}-${portalId}`;
}
type FetchResult = {
  organization: Organization;
  portal: Portal;
  demos: Demo[];
};
const _cache: Record<string, FetchResult> = {};

export type GenerationResult =
  | {
      result: "success";
      organization: Organization;
      portal: Portal;
      demo: Demo;
    }
  | { result: "error"; reason: "no demos" }
  | { result: "error"; reason: "demo not found" };

export type GenerationInput = {
  orgId: string;
  portalId: string;
  demoId?: string;
};

export async function generateDemosDataFromGithub({
  orgId,
  portalId,
  demoId,
}: GenerationInput): Promise<
  | {
      result: "success";
      organization: Organization;
      portal: Portal;
      demo: Demo;
    }
  | { result: "error"; reason: "no demos" }
  | { result: "error"; reason: "demo not found" }
> {
  const cacheKey = computeCacheKey({ orgId, portalId });
  const fetchResult =
    cacheKey in _cache ? _cache[cacheKey] : await _fetch({ orgId, portalId });
  _cache[cacheKey] = fetchResult;

  const { demos, organization, portal } = fetchResult;

  if (demos.length < 1) return { result: "error", reason: "no demos" };

  let demo: Demo | undefined;
  if (demoId) {
    demo = demos.find((demo) => demo.id === demoId);
  } else {
    demo = demos[0];
  }
  if (demo === undefined) return { result: "error", reason: "demo not found" };

  return {
    result: "success",
    organization,
    portal,
    demo,
  };
}

async function _fetch({
  orgId,
  portalId,
}: {
  orgId: string;
  portalId: string;
}): Promise<FetchResult> {
  // Find the SDK repository
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;
  if (privateKey === undefined)
    throw Error("Missing GITHUB_APP_PRIVATE_KEY Environment Variable");

  const { eachRepository } = new App({
    appId: 276014,
    privateKey,
  });

  const owner =
    orgId in _mappings.organization ? _mappings.organization[orgId] : orgId;
  const repo =
    portalId in _mappings.repository
      ? _mappings.repository[portalId]
      : portalId;

  const gitHub = { owner, repo };
  const repository = await _findRepository({
    gitHub,
    eachRepository,
  });

  const repoFullName = `${gitHub.owner}/${gitHub.repo}`;
  if (repository === null)
    throw Error(`Could not find repository under ${repoFullName}`);

  const getFilePaths = async ({
    path,
    ref,
  }: {
    path: string;
    ref?: string;
  }): Promise<{ path: string; name: string }[]> => {
    const content = await repository.octokit.rest.repos.getContent({
      ...repository,
      path,
      ref,
    });
    if (!Array.isArray(content.data))
      throw Error(`Expected directory at ${path}`);
    return content.data.map((file) => ({ path: file.path, name: file.name }));
  };

  const getContent = async ({ path, ref }: { path: string; ref?: string }) => {
    const metadata = await repository.octokit.rest.repos.getContent({
      ...repository,
      path,
      ref,
    });
    if (typeof metadata !== "object" || !("content" in metadata.data))
      throw Error("Unexpected type for content object");
    const content = await repository.octokit.rest.repos.getContent({
      ...repository,
      path,
      mediaType: {
        format: "raw",
      },
      ref,
    });
    if (typeof content.data !== "string")
      throw Error("Unexpected type for content string");
    return {
      content: content.data,
      sha: metadata.data.sha,
    };
  };

  const { content: demoYaml } = await getContent({ path: "demos/demo.yaml" });
  const parsedDemoYaml = demoYamlSchema.parse(yaml.load(demoYaml));

  const files = await getFilePaths({ path: "demos" });

  const markdownFiles = files.filter(({ name }) => name.endsWith(".md"));

  const demos: Demo[] = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkDirectiveRehype);

  await Promise.all(
    markdownFiles.map(async ({ path, name: fileName }) => {
      const { content: markdown } = await getContent({ path });

      const mdast = processor.parse(markdown);

      // find first heading text and use that as name
      const node = mdast.children.find(({ type }) => type === "heading");
      const demoName = toString(node);

      // compute id from filename by removing extension
      const id = fileName.replace(/\.[^/.]+$/, "");

      demos.push({ id, name: demoName, markdown });
    })
  );

  demos.sort((a, b) => {
    if (parsedDemoYaml.demos)
      return (
        parsedDemoYaml.demos.findIndex((demo) => demo.id === a.id) -
        parsedDemoYaml.demos.findIndex((demo) => demo.id === b.id)
      );
    return 1;
  });

  const portal: Portal = {
    id: repo,
    portalName: parsedDemoYaml.portalName,
    demos,
  };

  const organization: Organization = {
    id: owner,
    organizationName: parsedDemoYaml.organizationName,
    portals: [portal],
  };

  return { organization, portal, demos };
}
