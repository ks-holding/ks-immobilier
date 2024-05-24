import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ImagesOutline } from "react-ionicons";
export default function Realisations() {
  const realisationRef = useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    // console.log("réalisations" + inView);
  }, [inView]);

  return (
    <section id="realisations" ref={ref}>
      <div className="container">
        <h2 className={inView ? " fadein text-center" : "text-center"}> Exemple de locations</h2>

        <div className="grid-layout">
          <div className={inView ? " fadein column grid-1-6" : "column grid-1-6"}>
          <h3 >Découverte de nos locaux à Frépillon !</h3>
            <p>
            
            <br></br>
          Bienvenue dans la ZAC des Épineaux, nous vous présentons ce magnifique local situé au 8 Avenue Roland Moreno, 95740 Frépillon.
          <br></br>
          <br></br>
          Sa création remonte à 2020.
                      </p>
          </div>

          <figure className={inView ? "column grid-7-12 picture fadezoomin" : "column grid-7-12 picture"}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/home/realisations/IMG_9263.jpg"
              alt="confection de bureaux pour entreprises"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>
        </div>

        <div className="grid-layout">
        <figure className={inView ? "column grid-1-6 picture fadezoomin" : "column grid-1-5 picture"}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/home/realisations/idea_1.jpg"
              alt="confection de bureaux pour entreprises"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
            
        </figure>
        

          <div className={inView ? " fadein column grid-7-12" : "column grid-7-12"}>
          <h3>Dimensions et Capacité</h3>
            <p>
            Avec une superficie de 125m² de bureaux et de 600m² de locaux d’activité, elle convient parfaitement à une petite entreprise de type PME.<br></br>
              
            </p>
            
          </div>
          
          
        </div>
        <div className="grid-layout">
          <div className={inView ? " fadein column grid-1-6" : "column grid-1-6"}>
            
          <ul>
            <li>Elle est composée de :</li>
              <li>4 bureaux</li>
              <li>1 bureau de passage</li>
              <li>1 grande salle de réunion</li>
              <li>1 coin cuisine</li>
              <li>1 terrasse</li>
              <li>10 places de parkings</li>
              <li>1 accueil </li>
            </ul>
          </div>

          <figure className={inView ? "column grid-7-12 picture fadezoomin" : "column grid-7-12 picture"}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/home/realisations/idea_2.jpg"
              alt="confection de bureaux pour entreprises"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>
        </div>
        <div className="grid-layout">
        <figure className={inView ? " fadein column grid-1-6" : "column grid-1-6"}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/home/realisations/idea_3.jpg"
              alt="confection de bureaux pour entreprises"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>
          <div className={inView ? "column grid-7-12 picture fadezoomin" : "column grid-7-12 picture"}>
            <h3>Aménagement Intérieur</h3>
            <p>
            L’aménagement total de ces locaux a été réalisé par des architectes professionnels. Mélangeant verdure et modernité, les collaborateurs s’y plaisent et possèdent un environnement de travail sain. 
            </p>
           
          </div>

          
        </div>
        {/* <div className="grid-layout">
        <figure className={inView ? "column grid-1-6 picture fadezoomin" : "column grid-1-5 picture"}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/home/realisations/idea_2.jpg"
              alt="confection de bureaux pour entreprises"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>
          <div className={inView ? " fadein column grid-7-12" : "column grid-7-12"}>
          <h3>Bureaux à Frépillion</h3>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
          
          
        </div> */}
        

        {/* <h3 className="text-center mt-5">Rénovation appartement</h3>
        <div className="grid-layout beforeafter">
          <div className="grid-2-7 column">
            <figure className=" picture ">
              <Image
                layout="fill"
                objectFit="cover"
                src="/assets/home/realisations/appartement/before1.jpg"
                alt="Appartement avant notre intervention"
                blurDataURL="/assets/placeholder.png"
                placeholder="blur"
              />
            </figure>
            <h4 className="text-center">Avant</h4>
          </div>
          <div className="column grid-8-11">
            <figure className=" picture ">
              <Image
                layout="fill"
                objectFit="cover"
                src="/assets/home/realisations/appartement/after1.jpg"
                alt="Appartement après l'intervention de KS Renov'"
                blurDataURL="/assets/placeholder.png"
                placeholder="blur"
              />
            </figure>
            <h4 className="text-center">Après</h4>
          </div>
        </div>
        <div className="grid-layout beforeafter">
          <div className="grid-1-4 column">
            <figure className=" picture ">
              <Image
                layout="fill"
                objectFit="cover"
                src="/assets/home/realisations/appartement/before2.jpg"
                alt="Salon avant notre intervention"
                blurDataURL="/assets/placeholder.png"
                placeholder="blur"
              />
            </figure>
            <h4 className="text-center">Avant</h4>
          </div>
          <div className="column grid-5-12">
            <figure className="picture">
              <Image
                layout="fill"
                objectFit="cover"
                src="/assets/home/realisations/appartement/after2.jpg"
                alt="Salon, rénovation après l'intervention de KS Renov'"
                blurDataURL="/assets/placeholder.png"
                placeholder="blur"
              />
            </figure>
            <h4 className="text-center">Après</h4>
          </div>
        </div> */}

        
      </div>
    </section>
  );
}
