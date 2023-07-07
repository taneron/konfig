import React, { ReactNode, isValidElement } from "react";

type NodeHandler = (node: ReactNode) => void;

export function traverseReactNode(node: ReactNode, handler: NodeHandler) {
  handler(node);

  if (Array.isArray(node)) {
    // If the node is an array, recursively traverse each element
    node.forEach((child) => traverseReactNode(child, handler));
  } else if (isValidElement(node)) {
    // If the node is a valid React element, recursively traverse its children
    React.Children.forEach(node.props.children, (child) =>
      traverseReactNode(child, handler)
    );
  }
}
