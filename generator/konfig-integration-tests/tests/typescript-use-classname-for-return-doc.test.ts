import { e2e } from "../util";
import { test } from "vitest";

test("typescript-use-classname-for-return-doc", async () => {
  await e2e(4109);
});