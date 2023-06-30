import React from "react";
import { PropsWithChildren } from "react";
import styles from "./styles.modules.css";

export function Gradient({ children }: PropsWithChildren) {
  return <span className={styles.gradientText}>{children}</span>;
}
