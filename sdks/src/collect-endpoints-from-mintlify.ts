import { recurseObject } from "../../generator/konfig-dash/packages/konfig-lib/dist";

export async function collectEndpointsFromMintlify({
  url,
}: {
  url: string;
}): Promise<string[]> {
  const regex =
    /<script\s+id="__NEXT_DATA__"\s+type="application\/json">([\s\S]*?)<\/script>/;
  const html = await fetch(url).then((res) => res.text());
  const match = regex.exec(html);
  if (match === null || match.length < 2) {
    throw Error(`Could not find a regex match for ${url}`);
  }
  const rawJson = match[1];
  const json = JSON.parse(rawJson);

  const hrefs: string[] = [];
  recurseObject(json, ({ value }) => {
    // if value is an object with keys "openapi" and "href", push "href" to the hrefs variable
    if (typeof value !== "object") return;
    if (value === null) return;
    if (!("openapi" in value)) return;
    if (!("href" in value)) return;
    if (typeof value.href !== "string") return;
    hrefs.push(value.href);
  });

  const urls = hrefs.map((href) => new URL(href, url).toString());
  return urls;
}
