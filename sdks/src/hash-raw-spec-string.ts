import * as crypto from "crypto";

export function hashRawSpecString(rawSpecString: string) {
  return crypto.createHash("sha256").update(rawSpecString).digest("hex");
}
