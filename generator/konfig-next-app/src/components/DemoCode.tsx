import { Code, Transition } from "@mantine/core";
import { Prism, PrismProps } from "@mantine/prism";
import { observer } from "mobx-react";
import { useContext } from "react";
import { Components } from "react-markdown";
import { DemoStateContext } from "./DemoMarkdown";
import { Prism as ReactPrism } from "prism-react-renderer";

// this is how you add language support to prism according to:
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
((typeof global !== "undefined" ? global : window) as any).Prism = ReactPrism;
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-php");

type Language = PrismProps["language"];

const langDisplayName = {
  python: { name: "Python" },
  typescript: { name: "TypeScript" },
  markdown: { name: "Markdown" },
  ruby: { name: "Ruby" },
  csharp: { name: "C#" },
  php: { name: "PHP" },
} as Record<Language | "ruby" | "csharp" | "php", { name: string }>;

const _DemoCode: Components["code"] = ({
  node,
  inline,
  className,
  children,
  siblingCount,
  ...props
}) => {
  const demoState = useContext(DemoStateContext);

  if (inline) return <Code>{children}</Code>;
  const match = /language-(\w+)/.exec(className || "");
  if (match === null || inline)
    return (
      <Code {...props} className={className}>
        {children}
      </Code>
    );
  const language = match[1];
  if (!(language in langDisplayName))
    return (
      <Code block {...props} className={className}>
        {children}
      </Code>
    );

  return (
    <Transition
      mounted={demoState?.portal.showCode ?? false}
      transition="pop"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => {
        return (
          <div style={styles}>
            <Prism.Tabs value={language}>
              <Prism.TabsList>
                <Prism.Tab value={language}>
                  {
                    langDisplayName[language as keyof typeof langDisplayName]
                      .name
                  }
                </Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value={language} language={language as Language}>
                {String(children).replace(/\n$/, "")}
              </Prism.Panel>
            </Prism.Tabs>
          </div>
        );
      }}
    </Transition>
  );
};

export const DemoCode = observer(_DemoCode);
