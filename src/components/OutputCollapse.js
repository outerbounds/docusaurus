import React from "react";
import styles from "./OutputCollapse.module.css";

export const OutputCollapse = ({ summary, children }) => {
  return (
    <details>
      <summary>{summary}</summary>
      {children}
    </details>
  );
};

export default OutputCollapse;
