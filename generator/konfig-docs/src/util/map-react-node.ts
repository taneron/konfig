import React, {
  ReactNode,
  isValidElement,
  Children,
  cloneElement,
} from "react";

type NodeHandler = (node: ReactNode) => ReactNode;

export function mapReactNode(
  node: ReactNode,
  handler: NodeHandler,
  index = 0
): ReactNode {
  const modifiedNode = handler(node);

  if (Array.isArray(modifiedNode)) {
    // If the modified node is an array, recursively traverse each element
    return modifiedNode.map((child, idx) => mapReactNode(child, handler, idx));
  } else if (isValidElement(modifiedNode)) {
    // If the modified node is a valid React element, recursively traverse its children
    const { children, key, ...otherProps } = modifiedNode.props;
    const updatedChildren = Children.map(children, (child, idx) =>
      mapReactNode(child, handler, idx)
    );

    const updatedKey =
      key !== null && key !== undefined ? key : `__key_${index}`;

    return cloneElement(
      modifiedNode,
      { key: updatedKey, ...otherProps },
      updatedChildren
    );
  }

  return modifiedNode;
}
