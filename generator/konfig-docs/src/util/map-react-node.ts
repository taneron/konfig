import React, {
  ReactNode,
  isValidElement,
  Children,
  cloneElement,
} from "react";
import { v4 as uuid } from "uuid";

type NodeHandler = (node: ReactNode) => ReactNode;

export function mapReactNode(
  node: ReactNode,
  handler: NodeHandler,
  index = 0
): ReactNode {
  const modifiedNode = handler(node);

  if (node === modifiedNode) return node;

  if (Array.isArray(modifiedNode)) {
    // If the modified node is an array, recursively traverse each element
    return modifiedNode.map((child, idx) => mapReactNode(child, handler, idx));
  } else if (isValidElement(modifiedNode)) {
    // If the modified node is a valid React element, recursively traverse its children
    const { children, ...otherProps } = modifiedNode.props;
    const key = modifiedNode.key;
    const updatedChildren = Children.map(children, (child, idx) =>
      mapReactNode(child, handler, idx)
    );

    const updatedKey =
      key !== null && key !== undefined ? key : `__key_${uuid()}`;

    return cloneElement(
      modifiedNode,
      { key: updatedKey, ...otherProps },
      updatedChildren
    );
  }

  return modifiedNode;
}
