import React from "react";
import styles from "./Description.module.css";

export const Description2 = ({ summary, extended_summary }) => {
  return (
    <div className={styles.wrapper}>
      <div>{summary}</div>
      <div>{extended_summary}</div>
    </div>
  );
};

export default Description2;
