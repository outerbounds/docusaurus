import React from "react";
import styles from "./Caption.module.css";

export const Caption = ({ children }) => (
  <div className={styles.caption}>{children}</div>
);

export default Caption;
