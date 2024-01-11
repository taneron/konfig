import React, { PropsWithChildren, ReactNode } from "react";

export function Figure({
  children,
  caption,
}: PropsWithChildren<{ caption: ReactNode }>) {
  const child = getChildImage(children);
  return (
    <figure className="flex flex-col items-center">
      {/* w-full is to ensure putting a code block inside figure doesn't overflow off the page */}
      {<div className="w-full">{child ? child : children}</div>}
      <b>
        <figcaption className="text-center font-light text-sm">
          {caption}
        </figcaption>
      </b>
    </figure>
  );
}

export function getChildImage(children: ReactNode): ReactNode | undefined {
  if (!React.isValidElement(children)) return;
  if (children.props.type === "p") return;
  return children.props.children;
}
