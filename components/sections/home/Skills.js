import React from "react";
import Link from "next/link";
import Image from "next/image";
import SkillList from "./SkillList";
import { useInView } from "react-intersection-observer";
import { AppsOutline, PaperPlaneOutline } from "react-ionicons";

export default function Skills() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <section id="skills" className="container" ref={ref}>
      <h2 className={inView ? "text-center fadein" : "text-center"}>Nos maîtrises</h2>
      <div className="grid-layout">
        <div className="column  grid-1-12 black">
          <p className={inView ? "text-center black fadein" : "text-center black"}>
            Des fondations, à la plomberie en passant par l'installation électrique, nous possèdons un très large
            spectre de compétences en lien avec la construction et à la rénovation de bâtiment.
          </p>
          <strong className={inView ? "text-center black fadein" : "text-center black"}>
            Ainsi nous pouvons répondre à toutes vos demandes ou besoin
          </strong>
          <p className={inView ? "text-center black fadein" : "text-center black"}>
            Si vous désirez plus de détails, contactez nous par téléphone, par mail ou via le formulaire de contact
          </p>
          <Link href="/contact/#contact_form">
            <button className={inView ? "text-center black fadezoomin button-empty" : "text-center black button-empty"}>
              <PaperPlaneOutline width="22px" height="22px" color="#21273b" />
              Formulaire de contact
            </button>
          </Link>
        </div>
      </div>
      <SkillList />
      {/* {mobile ? <SkillList /> : <SkillsCircle />} */}

      
    </section>
  );
}
