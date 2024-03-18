import Layout from "../components/general/layout/layout.js";
import Link from "next/link";

import { useInView } from "react-intersection-observer";


import Image from "next/image";
import { MailOpenOutline } from "react-ionicons";
import BorneElectriqueSvg from "./../components/skills/BorneElectriqueSvg";
import DomotikSvg from "./../components/skills/Domotik";

export default function Services() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Layout
      title="Prestations"
      description=""
    >
      <section id="services" ref={ref} >
        <div className="container">
          <h1 className="text-center mb-2">Prestations</h1>

          <div className="grid-layout">
            <div className="grid-2-11 column">
              <p className="text-center">
              KS IMMOBILIER vous propose différentes prestations en fonction de vos besoins
              </p>
              

              <div className="row center mt-4 ">
                <Link href="/contact">
                  <button className="button-empty row">
                    <MailOpenOutline width="22px" height="22px" />
                    Contactez-nous
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <Link href="/prestations/location-bureau">
              <div className={inView ? "column item zoomin" : "column item"}>
                <figure>
                <img src="/assets/home/prestations/bureau.png" width="90px" height="90px" layout="fixed"></img>
                </figure>
                <h3>Location bureaux</h3>
                <p className="detail">
                  {/* <ChevronForwardOutline size="7" color="#CA2720" /> */}
                  
                </p>
              </div>
            </Link>
            <Link href="/prestations/location-parking">
              <div className={inView ? "column item zoomin" : "column item"}>
                <figure>
                <img src="/assets/home/prestations/garage.png" width="90px" height="90px" layout="fixed"></img>
                </figure>
                <h3>Location parking</h3>
                <p className="detail">
                  {/* <ChevronForwardOutline size="7" color="#CA2720" /> */}
                  
                </p>
              </div>
            </Link>
            <Link href="/prestations/forfait">
              <div className={inView ? "column item zoomin" : "column item"}>
                <figure>
                <img src="/assets/home/prestations/abonnement.png" width="90px" height="90px" layout="fixed"></img>
                </figure>
                <h3>Forfait</h3>
                <p className="detail">
                  {/* <ChevronForwardOutline size="7" color="#CA2720" /> */}
                  
                </p>
              </div>
            </Link>
            
          </div>
          
        </div>
        
      </section>
      <section id="realisations" ref={ref} style={{paddingTop:"0px"}}>
      <div className="container" >
        <h2 style={{marginBottom:'50px'}} > Aperçu des locations</h2>

        <div className="grid-layout">
          <div className={inView ? " fadein column grid-1-6" : "column grid-1-6"}>
          <h3 >Découverte de nos locaux à Frépillon !</h3>
            <p>
            
            <br></br>
          Bienvenue dans la ZAC des Épineaux, nous vous présentons ce magnifique local situé au 8 Avenue Roland Moreno, 95740 Frépillon.
          
          
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
              <li>1 bureau de passage.</li>
              <li>1 grande salle de réunion.</li>
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
        


        
      </div>
    </section>
    </Layout>
  );
}
