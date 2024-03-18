import React from "react";

export default function TocH3({ toc, linkH3, index, currentH3 }) {
  return (
    <span className={currentH3 === index ? "h3 isActive" : "h3"} onClick={() => linkH3(index)}>
      {toc.content}
    </span>
  );
}
