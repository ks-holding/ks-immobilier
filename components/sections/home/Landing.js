import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PaperPlaneOutline, MailOpenOutline } from "react-ionicons";
const Landing = () => {
  const landingRef = useRef(null);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    //console.log("landing" + inView);
  }, [inView]);

  return (
    <section id="landing" ref={ref}>
      <p>{inView}</p>
      <div className="row-reverse">
        <div className="column">
          <figure className="circle">
            <Image
              src="/assets/home/home ks.png"
              alt="Rénovation intérieure maison"
              layout="fill"
              objectFit="cover"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
            {/* <img src="/assets/home/landing.jpg" alt="Rénovation intérieure maison" /> */}
          </figure>
        </div>

        <div className="column">
          <h1 className="slogan">KS Immobilier</h1>
          <h2>Des espaces coworking adaptés selon vos besoins</h2>
          <ul className="dotlist">
          <li>Location de bureaux professionnels coworking</li>
          <li>Location parking</li>
          <li>Abonnement hebdomadaire et mensuel</li>
        </ul>

          <p style={{margin:"0"}}>Pour nous contacter, cliquez sur le bouton ci-dessous</p>
          <Link href="/contact">
            <button className="button-empty row">
              <MailOpenOutline width="22px" height="22px" color="#21273b" />
              Contactez-nous
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
