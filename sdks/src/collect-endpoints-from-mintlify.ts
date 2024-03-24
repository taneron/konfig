import { JSDOM } from "jsdom";
export async function collectEndpointsFromMintlify({
  url,
}: {
  url: string;
}): Promise<string[]> {
  const html = await fetch(url).then((res) => res.text());

  const dom = new JSDOM(html);
  const div = dom.window.document;

  // find all <a> tags and return their hrefs appended to the input url's base domain
  const hrefs = Array.from(div.querySelectorAll("a")).map((a: any) => {
    const href = a.getAttribute("href");
    if (!href) {
      throw new Error("No href found on <a> tag");
    }
    return href;
  });

  const urls = hrefs
    .map((href) => new URL(href, url).toString())
    // filter mailto: urls
    .filter((url) => !url.startsWith("mailto:"));

  return urls;
}
