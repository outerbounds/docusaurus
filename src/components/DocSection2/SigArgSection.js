import React from "react";

export const SigArgSection2 = ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <strong>
        (
        {children.map((c, index) => (
          <>
            {c}
            {index === children.length - 1 ? "" : ", "}
          </>
        ))}
        )
      </strong>
    );
  } else {
    return <strong>({children})</strong>;
  }
};

export default SigArgSection2;
