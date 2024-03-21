import { collectEndpointsFromReadme } from "../src/collect-endpoints-from-readme";

collectEndpointsFromReadme({
  url: "https://docs.api.nvidia.com/nim/reference/google-gemma7b",
}).then((urls) => {
  console.log(urls);
});
