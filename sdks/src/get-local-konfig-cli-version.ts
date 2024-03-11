import * as path from "path";
import * as fs from "fs";
export function getLocalKonfigCliVersion(): string {
  const konfigCliPackageJsonPath = path.join(
    path.dirname(path.dirname(__dirname)),
    "generator",
    "konfig-dash",
    "packages",
    "konfig-cli",
    "package.json"
  );
  const konfigCliPackageJson = JSON.parse(
    fs.readFileSync(konfigCliPackageJsonPath, "utf-8")
  );
  return konfigCliPackageJson.version;
}
