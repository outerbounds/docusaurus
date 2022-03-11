import React from "react";
import styles from "./Output3.module.css";

export const Output3 = ({ html }) => {
  return (
    <div
      className={styles.output3}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Output3;
