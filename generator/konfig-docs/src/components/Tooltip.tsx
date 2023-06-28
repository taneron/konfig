import React, { useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import { v4 as uuid } from "uuid";
import { Tooltip as ReactTooltip } from "react-tooltip";

export function Tooltip({
  tip,
  children,
  text,
}: PropsWithChildren<{ tip: string; text?: string }>) {
  const [id, setId] = useState(null);

  useEffect(() => {
    if (!id) {
      setId(uuid());
    }
  }, [id]);
  return (
    <span
      style={{ cursor: "pointer", textDecoration: "underline" }}
      data-tooltip-id={id}
      data-tooltip-content={tip}
    >
      {text ? text : children}
      <ReactTooltip clickable style={{ opacity: 0.98 }} id={id} />
    </span>
  );
}
