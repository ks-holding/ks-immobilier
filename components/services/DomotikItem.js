import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DomotikItem({ item, showCategory = false }) {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className={open === true ? "domotik-item tile open" : "domotik-item tile"}>
      <figure style={{ width: open === true ? "150px" : "50px", height: open === true ? "150px" : "50px" }}>
        <Image src={"/assets/services/domotique/items/" + item.picture} layout="fill" objectFit="cover" />
      </figure>
      <div className="content">
        <div className="column">
          <h3 className="legend">{item.legend}</h3>
          {open === true && showCategory === true && (
            <Link href={"/prestation/domotique/" + item.category.url}>
              <a className="category link">{item.category.legend}</a>
            </Link>
          )}
        </div>
        {item.description?.length > 0 && open === true && <p className="description">{item.description}</p>}
      </div>
    </div>
  );
}
