import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Presentation() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  return (
    <section id="presentation" ref={ref}>
      <div className="grid-layout container ">
        <div className="column grid-9-12">
          <h2 style={inView ? { opacity: 1 } : { opacity: 0 }}>Présentation</h2>
        </div>

        <figure className="grid-1-7 picture" style={inView ? { opacity: 1 } : { opacity: 0 }}>
          <Image
            src="/assets/home/presentation.jpg"
            alt="Conception de bureau"
            layout="fill"
            objectFit="cover"
            blurDataURL="/assets/placeholder.png"
            placeholder="blur"
          />

          <figcaption>Conception d'un bureau à Frépillon</figcaption>
        </figure>
        <div className="column grid-9-12" style={inView ? { opacity: 1 } : { opacity: 0 }}>
          <p className={inView ? "fadein" : ""}>
            Depuis plus de 14 ans, notre entreprise KS Rénov' a montré son expertise dans la construction de maisons
            individuelles et de rénovation de bâtiments.{" "}
          </p>

          <p className={inView ? "fadein" : ""}>
            Nous réalisons des projets pour les particuliers et pour les professionnels, en passant par des aménagements
            de bureaux, d’un espace de vie ou d’une salle de réunion.
          </p>
        </div>
      </div>
    </section>
  );
}
