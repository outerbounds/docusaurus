import React from "react";
import styles from "./Output4.module.css";

export const Output4 = ({ children }) => {
  console.log("children: ", children);

  const html = children.props.children.props.children;

  return (
    <div
      className={styles.output4}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Output4;
