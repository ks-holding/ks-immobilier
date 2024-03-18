import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { RibbonOutline } from "react-ionicons";
export default function Certifications() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  useEffect(() => {
    console.log("certifications" + inView);
  }, [inView]);

  return (
    <section id="certifications" ref={ref}>
      <h2
        className={inView ? "fadezoomin text-center mb-7" : "text-center mb-7"}
        style={inView ? { opacity: 1 } : { opacity: 0 }}
      >
        Certifications
      </h2>
      <div className="grid-layout container" style={inView ? { opacity: 1 } : { opacity: 0 }}>
        <div className="column grid-1-4">
          <figure>
            <Image
              src="/assets/home/certifications/cee.svg"
              layout="fixed"
              width="200"
              height="100"
              alt="Certification CEE"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>
          <h3 className="mt-1">CEE</h3>
          <p>
            La prime CEE récompense les économies d’énergie réalisées par le financement des travaux de rénovation
            énergétique
          </p>
        </div>
        <div className="column grid-5-8">
          <figure>
            <Image
              src="/assets/home/certifications/rge.png"
              layout="fixed"
              width="80"
              height="100"
              alt="Certification RGE"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>
          <h3 className="mt-1">RGE</h3>
          <p>
            Le fait que notre entreprise soit reconnue RGE est la preuve d'un savoir-faire dans les travaux de
            rénovation énergétique.{" "}
          </p>{" "}
          <p>
            {" "}
            Cette Certification vous permet également d’obtenir des aides financières importantes pour la réalisation de
            vos travaux
          </p>
        </div>
        <div className="column grid-9-12">
          <figure>
            <Image
              src="/assets/home/certifications/ite.jpg"
              layout="fixed"
              width="95"
              height="100"
              alt="Certification ITE"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>
          <h3 className="mt-1">ITE</h3>
          <p>
            Expert en Isolation Thermique Extérieure, nous vous accompagnons pour améliorer les performances
            énergétiques de votre logement permettant ainsi de réduire vos factures.
          </p>
        </div>

        <div className="grid-3-10 column mt-4">
          <Link href="/certifications">
            <button className="button-empty" href="/certifications">
              <RibbonOutline width="22px" height="22px" color="#21273b" />
              Découvrir les certifications
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
