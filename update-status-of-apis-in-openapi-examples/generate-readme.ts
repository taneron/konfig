import * as fs from "fs";
import * as path from "path";

function collectAllDirectories(
  rootDir: string,
  apiDirectories: string[] = []
): string[] {
  const files = fs.readdirSync(rootDir);
  for (const file of files) {
    const filePath = path.join(rootDir, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isDirectory()) {
      collectAllDirectories(filePath, apiDirectories);
    } else if (file === "openapi.yaml") {
      apiDirectories.push(rootDir);
    }
  }
  return apiDirectories;
}

const rootDirectory = path.join(
  path.dirname(__dirname),
  "sdks",
  "openapi-examples"
);

const apiDirectories = collectAllDirectories(rootDirectory);

type About = {
  description: string;
  homepage: string;
  company: string;
};

function generateReadme({
  about: { company, homepage, description },
  responseTimeCharts,
  banner,
}: {
  about: About;
  responseTimeCharts: string[];
  banner: string;
}) {
  const charts = responseTimeCharts.map((imageFile) => {
    const url = Buffer.from(path.basename(imageFile, ".svg"), "hex").toString();
    return {
      file: imageFile,
      // without .svg and URL decode the filename to get the URL
      url,
    };
  });
  return `[![Visit ${company}](${banner})](${homepage})

# [${company}](${homepage})

${description}

${
  charts.length > 0
    ? `## Response Times\n
${charts
  .map(({ file, url }) => `#### [${url}](https://${url})\n\n![${url}](${file})`)
  .join("\n")}
`
    : ``
}`;
}

for (const apiDirectory of apiDirectories) {
  const aboutJsonString = fs.readFileSync(
    path.join(apiDirectory, "about.json"),
    "utf-8"
  );
  const about: About = JSON.parse(aboutJsonString);

  // find all the response time charts
  let responseTimeCharts: string[] = [];
  const responseTimeChartsDir = path.join(apiDirectory, "response-time-charts");
  if (fs.existsSync(responseTimeChartsDir)) {
    responseTimeCharts = fs
      .readdirSync(responseTimeChartsDir)
      .filter((file) => file.endsWith(".svg"))
      .map((file) => path.join("response-time-charts", file));

    // delete any .png files
    fs.readdirSync(responseTimeChartsDir)
      .filter((file) => file.endsWith(".png"))
      .forEach((file) => fs.unlinkSync(path.join(responseTimeChartsDir, file)));
  }

  const imagePreviewFiles = fs
    .readdirSync(apiDirectory)
    .filter((file) => file.startsWith("imagePreview"));
  const banner = imagePreviewFiles.length > 0 ? imagePreviewFiles[0] : null;
  // throw if null
  if (!banner) {
    throw new Error(`No banner image found for ${apiDirectory}`);
  }

  const readme = generateReadme({ about, responseTimeCharts, banner });
  fs.writeFileSync(path.join(apiDirectory, "README.md"), readme);
}
