import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Clients() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <section id="ourclients" ref={ref}>
      <div className="container">
        <h2 className={inView ? "text-center fadein" : "text-center"}> Nos clients</h2>

        <div className="wrapper">
        <div className={inView ? "column item zoomin" : "column item "}>
            <figure>
              <Image
                src="/assets/home/clients/particulier.svg"
                alt="logo construction de maison personnalisée"
                layout="fixed"
                width="120px"
                height="120px"
              />
            </figure>
            <h3 className={inView ? "fadein" : ""}>Particuliers</h3>
          </div>
          
          <div className={inView ? "column item zoomin" : "column item "}>
            <figure className={inView ? "zoomin" : ""}>
              <Image
                src="/assets/home/clients/professionnel.svg"
                alt="logo construction de bureaux sur mesure"
                layout="fixed"
                width="120px"
                height="120px"
                blurDataURL="/assets/placeholder.png"
                placeholder="blur"
              />
            </figure>

            <h3 className={inView ? "fadein" : ""}>Professionnels</h3>
          </div>

          
        </div>
      </div>
    </section>
  );
}
