import React from "react";
import styles from "./Parameter.module.css";
import { micromark } from "micromark";

export const Parameter3 = ({ name, type, desc }) => {
  return (
    <div>
      <div>
        <strong
          dangerouslySetInnerHTML={{
            __html: micromark(
              (name ? name : "") +
                (name && type ? ": " : "") +
                (type ? type : "") ?? ""
            ),
          }}
        />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: micromark(desc ?? "") }}
      />
    </div>
  );
};

export default Parameter3;
