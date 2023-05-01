import testRule from "./__helpers__/helper";
import * as fs from "fs";
import { parse } from "yaml";

const problematicYaml = parse(
  fs.readFileSync(`${__dirname}/do-not-fail-on-null.yaml`, "utf-8")
);

testRule(true, [
  {
    name: "does not throw error on null example",
    document: problematicYaml,
    errors: [],
  },
]);
