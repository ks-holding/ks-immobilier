import React, { useEffect, useState } from "react";
import TocH3 from "./TocH3";
import TocH2 from "./TocH2";

export default function Toc({ content, slug, currentH2, linkH2, linkH3, currentH3 }) {
  let indexH2 = -1;
  let indexH3 = -1;
  const [minActiveH3, setMinActiveH3] = useState(0);
  const [maxActiveH3, setMaxActiveH3] = useState(0);

  useEffect(() => {
    const H2List = content.filter(title => {
      if (title.lvl === 2) {
        return title;
      }
    });
    console.log(H2List);

    setMinActiveH3();
    setMaxActiveH3();
  }, [currentH2]);

  return (
    <div id="toc">
      <p className="h1">Sommaire</p>

      {content.map((item, key) => {
        if (item.lvl === 2) {
          indexH2++;
          return <TocH2 toc={item} slug={slug} currentH2={currentH2} index={indexH2} realIndex={key} linkH2={linkH2} />;
        }
        if (item.lvl === 3) {
          indexH3++;
          return (
            <TocH3
              toc={item}
              slug={slug}
              currentH3={currentH3}
              index={indexH3}
              realIndex={key}
              linkH3={linkH3}
              minActive={minActiveH3}
              maxActive={maxActiveH3}
            />
          );
        }
      })}
    </div>
  );
}
