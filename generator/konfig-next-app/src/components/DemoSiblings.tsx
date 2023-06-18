import React from "react";
import { SimpleGrid } from "@mantine/core";
import { DemoSibling } from "./DemoSibling";
import { PortalState } from "./DemoPortal";

export type Sibling = {
  title: string;
  demoId: string;
  organizationId: string;
  demoIndex: number;
};

interface Props {
  previous?: Sibling;
  next?: Sibling;
  portal: PortalState;
}

export function DemoSiblings({ previous, next, portal }: Props) {
  return (
    <SimpleGrid mt={40} cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
      {previous && <DemoSibling portal={portal} type="prev" data={previous} />}
      {next && <DemoSibling portal={portal} type="next" data={next} />}
    </SimpleGrid>
  );
}
