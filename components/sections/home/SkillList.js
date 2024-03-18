import React from "react";
import Electricite from "./../../skills/Electricite";
import Charpente from "./../../skills/Charpente";
import Isolation from "./../../skills/Isolation";
import Maconnerie from "./../../skills/Maconnerie";
import Peinture from "./../../skills/Peinture";
import Sol from "./../../skills/Sol";
import Zinc from "./../../skills/Zinc";
import Couverture from "./../../skills/Couverture";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import MenuiserieSvg from "./../../skills/Menuiserie";
import PlomberieSvg from "./../../skills/Plomberie";
import BorneElectriqueSvg from "./../../skills/BorneElectriqueSvg";
import DomotikSvg from "../../skills/Domotik";
export default function SkillList() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div id="skill-circle" ref={ref}>
      <Link href="/prestation/installation-electrique">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/charpente">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/isolation-thermique">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/maconnerie">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/peinture">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/revetement-sol">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/zinc">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/couverture-toiture">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/plomberie">
        <div className={inView ? "circle fadezoomin" : "circle"}>
         
        </div>
      </Link>
      <Link href="/prestation/menuiserie">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/installation-de-bornes-electriques">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          
        </div>
      </Link>
      <Link href="/prestation/domotique">
        <div className={inView ? "circle fadezoomin" : "circle"}>
          

          
        </div>
      </Link>
      
    </div>
  );
}
