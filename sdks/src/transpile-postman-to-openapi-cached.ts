import { transpile } from "postman2openapi";
import { dbFolder } from "../scripts/util";
import * as path from "path";
import * as fs from "fs-extra";
import * as crypto from "crypto";

export const cacheDir = path.join(
  dbFolder,
  "transpile-postman-to-openapi-cache"
);
/**
 * Because the transpile function will produce random values for examples, we
 * need to cache the result to avoid unnecessary transpiling when the original
 * postman collection is not changed.
 */
export function transpilePostmanToOpenApiCached({
  key,
  postmanCollection,
}: {
  key: string;
  postmanCollection: any;
}): object {
  // hash postmanCollection
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(postmanCollection))
    .digest("hex");

  const fileName = `${key}-${hash}.json`;

  const cachePath = path.join(cacheDir, fileName);

  const cache = fs.existsSync(cachePath)
    ? fs.readFileSync(cachePath, "utf8")
    : undefined;
  if (cache) {
    return JSON.parse(cache);
  }
  const openapi = transpile(postmanCollection);
  fs.ensureDirSync(cacheDir);
  fs.writeFileSync(cachePath, JSON.stringify(openapi, null, 2));
  return openapi;
}
