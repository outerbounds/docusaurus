import React from "react";
import styles from "./Description.module.css";
import { micromark } from "micromark";

export const Description3 = ({ summary, extended_summary }) => {
  const description = (summary + "\\n\\n" + extended_summary).replace(
    /\\n/g,
    "\n"
  );

  console.log("description: ", description);
  return (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{
        __html: micromark(description ?? ""),
      }}
    />
  );
};

export default Description3;
