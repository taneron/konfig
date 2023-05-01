import { IFunctionResult, RulesetFunction } from "@stoplight/spectral-core";
import { OpenAPIV3, OpenAPIV3_1 } from "openapi-types";
import { OAS3Doc } from "./util/OAS3Doc";
import { deref } from "./util/lib";
export const duplicateSecurityAndRequestParameters: RulesetFunction<
  OpenAPIV3.OperationObject | OpenAPIV3_1.OperationObject
> = (input, _options, context) => {
  const result: IFunctionResult[] = [];
  const spec = context.document.data as OAS3Doc;
  const securitySchemes = spec.components?.securitySchemes;
  if (!securitySchemes) return [];
  const security = spec.security ? spec.security : input.security;
  if (!security) return [];
  if (!input.parameters) return [];
  const parameterNames = input.parameters.map((p) => deref(p).name);
  security.flatMap((sec) => {
    return Object.keys(sec).map((secName) => {
      const securityScheme = deref(securitySchemes[secName]);
      if (
        securityScheme.type === "http" &&
        parameterNames.includes("Authorization")
      ) {
        result.push({
          message: "Authorization",
        });
      } else if (
        securityScheme.type === "apiKey" &&
        parameterNames.includes(securityScheme.name)
      ) {
        result.push({
          message: securityScheme.name,
        });
      }
    });
  });
  return result;
};
