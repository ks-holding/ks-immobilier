import React from "react";

import Extension from "./prestations/Extension";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ChevronForwardOutline } from "react-ionicons";
import { colorMain, colorText } from "../../../lib/variables";
import DomotikSvg from "../../skills/Domotik";

export default function Prestations() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  return (
    <section id="prestations" ref={ref}>
      <div className="container">
        <h2 className={inView ? "text-center fadein" : "text-center"} style={inView ? { opacity: 1 } : { opacity: 0 }}>
          Nos solutions
        </h2>

        {/* <p className={inView ? "text-center fadein mt-2" : "text-center mt-2"}>
          Nous proposons différents services tels que la construction, la rénovation mais aussi l’extension et la
          surélévation.{" "}
        </p> */}

        <div className="container" style={inView ? { opacity: 1 } : { opacity: 0 }}>
          <div className="wrapper">
            <Link href="/prestations/location-bureau">
              <div className={inView ? "item fadezoomin" : "item"}>
                <figure>
                <img src="/assets/home/prestations/bureau.png" width="90px" height="90px" layout="fixed"></img>
                </figure>
                <h3>Location bureaux</h3>
                <p className="detail">
                  <ChevronForwardOutline size="7" color="#CA2720" />
                  Accéder au détail
                </p>
              </div>
            </Link>
            {/* <Link href="/domaine-d-activite/construction">
              <div className={inView ? "item fadezoomin" : "item"}>
                <figure>
                  <Construction />
                  {/* <Image src="/assets/home/prestations/construction.svg" width="90px" height="90px" layout="fixed" /> 
                </figure>
                <h3>Construction</h3>
                <p className="detail">
                  <ChevronForwardOutline size="7" color={colorMain} />
                  Accéder au détail
                </p>
              </div>
            </Link> */}
            <Link href="/prestations/location-parking">
              <div className={inView ? "item fadezoomin" : "item"}>
                <figure>
                <img src="/assets/home/prestations/garage.png" width="90px" height="90px" layout="fixed"></img>
                  
                </figure>
                <h3>Location parking</h3>

                <p className="detail">
                  <ChevronForwardOutline size={4} color="#CA2720" />
                  Accéder au détail
                </p>
              </div>
            </Link>
            <Link href="/prestations/forfait">
              <div className={inView ? "item fadezoomin" : "item"}>
                <figure>
                <img src="/assets/home/prestations/abonnement.png" width="90px" height="90px" layout="fixed"></img>
                </figure>
                <h3>Forfait</h3>
                <p className="detail">
                  <ChevronForwardOutline size="7" color="#CA2720" />
                  Accéder au détail
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
