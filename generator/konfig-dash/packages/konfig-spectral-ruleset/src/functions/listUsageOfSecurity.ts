import { RulesetFunction } from "@stoplight/spectral-core";
import type { OpenAPIV3, OpenAPIV3_1 } from "openapi-types";
export const listUsageOfSecurity: RulesetFunction<
  (OpenAPIV3.SecuritySchemeObject | OpenAPIV3_1.SecuritySchemeObject)[]
> = (input) => {
  return input.length <= 1
    ? []
    : [{ message: "Potential misuse of security has been detected" }];
};
