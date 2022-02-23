import React from "react";
import styles from "./Description.module.css";

export const Description = ({ children }) => (
  <div className={styles.description}>
    {children}
    <hr />
  </div>
);

export default Description;
