import React from "react";
import styles from "./DocSection.module.css";

const BASE_URL = "https://github.com/Netflix/metaflow/tree/master/";

export const DocSection2 = ({ children, name, module, link }) => {
  return (
    <>
      <h2>{module}</h2>
      <div className={styles.titlebox}>
        <span style={{ color: "red" }}>{name}</span>
        {children.filter((child) => child.props.mdxType === "SigArgSection2")}
        <a href={BASE_URL + link}>[source]</a>
      </div>
      <div className={styles.content}>
        {children.filter((child) => child.props.mdxType === "Description2")}
        {children.filter(
          (child) =>
            child.props.mdxType !== "Description2" &&
            child.props.mdxType !== "SigArgSection2"
        )}
      </div>
    </>
  );
};

export default DocSection2;
