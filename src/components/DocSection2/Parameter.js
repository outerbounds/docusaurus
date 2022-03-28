import React from "react";
import styles from "./Parameter.module.css";

export const Parameter2 = ({ name, type, desc }) => {
  return (
    <div>
      <div>
        <strong>
          {name ? name : ""}
          {name && type ? ": " : ""}
          {type ? type : ""}
        </strong>
      </div>
      <div className={styles.content}>{desc}</div>
    </div>
  );
};

export default Parameter2;
