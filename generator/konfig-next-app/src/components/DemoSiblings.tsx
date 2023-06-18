import React from "react";
import { SimpleGrid } from "@mantine/core";
import { DemoSibling } from "./DemoSibling";

export type Sibling = {
  id: string;
  title: string;
};

interface Props {
  previous: Sibling;
  next: Sibling;
}

export function MdxSiblings({ previous, next }: Props) {
  return (
    <SimpleGrid mt={40} cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
      {previous && <DemoSibling type="prev" data={previous} />}
      {next && <DemoSibling type="next" data={next} />}
    </SimpleGrid>
  );
}
