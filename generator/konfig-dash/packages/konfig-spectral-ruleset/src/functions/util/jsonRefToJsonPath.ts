import { z } from "zod";

const jsonRefToJsonPathSchema = z
  .string()
  .transform((jsonRef) =>
    jsonRef.replaceAll("/", ".").replaceAll("~0", "~").replaceAll("~1", "/")
  )
  .brand<"InstancePathToJsonPath">();
// https://swagger.io/docs/specification/using-ref/
export const jsonRefToJsonPath = (path: string) => {
  return jsonRefToJsonPathSchema.parse(path);
};
