import React from "react";

export default function TocH2({ toc, currentH2, index, linkH2 }) {
  if (currentH2 < 0) currentH2 = 0;
  return (
    <span
      className={currentH2 === index ? "h2 isActive" : "h2"}
      onClick={e => {
        linkH2(index);
      }}
    >
      {toc.content}
    </span>
  );
}
