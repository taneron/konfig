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
console.log(apiDirectories);
