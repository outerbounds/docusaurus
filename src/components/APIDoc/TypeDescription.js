import React from "react";
import styles from "./APIDoc.module.css";

export const TypeDescription = ({ type, description }) => (
  <div>
    <span className={styles.returnType}>{type}</span>&nbsp;
    <span className={styles.description}>{description}</span>
  </div>
);

export default TypeDescription;
