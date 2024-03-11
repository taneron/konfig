import * as crypto from "crypto";

/**
 * Deterministic hash of the raw spec string
 */
export function hashRawSpecString(rawSpecString: string) {
  return crypto.createHash("sha256").update(rawSpecString).digest("hex");
}
