import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Demo } from "./demos";
import { toString } from "mdast-util-to-string";

export type DemoInput = { fileName: string; content: string };

export function generateDemosFromFilenameAndContent({
  demos,
}: {
  demos: DemoInput[];
}): Demo[] {
  const result: Demo[] = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkDirectiveRehype);

  demos.forEach(({ content, fileName }) => {
    const mdast = processor.parse(content);

    // find first heading text and use that as name
    const node = mdast.children.find(({ type }) => type === "heading");
    const demoName = toString(node);

    // compute id from filename by removing extension
    const id = fileName.replace(/\.[^/.]+$/, "");

    result.push({ id, name: demoName, markdown: content });
  });
  return result;
}
