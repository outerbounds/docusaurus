import React from "react";
import styles from "./Description.module.css";

export const Description2 = ({ summary, extended_summary }) => {
  return (
    <div className={styles.wrapper}>
      {summary} {extended_summary}
    </div>
  );
};

export default Description2;
