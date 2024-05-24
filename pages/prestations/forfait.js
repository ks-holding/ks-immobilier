import React from "react";
import Layout from "../../components/general/layout/layout";
import FilArianne from "../../components/general/filarianne";
import ContactUs from "../../components/general/ContactUs";
import RapidAccess from "../../components/general/rapidAccess";
import Image from "next/image";

const bureau = () => {
  return (
    <Layout
      title="Forfaits"
      description="Installation de carrelage, parquet, PVC, lino  ainsi que la dépose du revêtement précedent. KS Renov' peut réaliser n'importe quel type de revêtement de sol"
    >
      <section id="sols" className="service_page">
        <div className="container">
          <FilArianne
            links={[
              { url: "/prestations", legend: "Prestations" },
              { url: "/prestation/Forfaits : (mettre réservation d’une salle)", legend: "Forfaits " },
            ]}
          />
          <figure className="picture-panorama">
            <Image
              objectFit="contain"
              layout="fill"
              src="/assets/home/realisations/Bannière.png"
              alt="Construction d'une charpente maison"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>

          
          <div className="grid-layout">
            <div className="column grid-1-12">
              <h2 className="text-left ">Forfaits - réservation d’une salle </h2>
              <p>
              Découvrez nos offres de forfaits pour la réservation de salles conçues pour répondre à vos besoins professionnels. Que vous ayez besoin d'un espace pour des réunions, des conférences,
               ou des sessions de coworking, nous avons la solution idéale pour vous.
               Profitez de la flexibilité et de la disponibilité de notre service, vous permettant de vous concentrer pleinement sur le développement de votre activité.
              </p>
              <h3>
              Nos forfaits :
              </h3>

              <ul>
                 <li><strong>Forfait journalière : </strong>
                 Idéal pour des réunions ou des séminaires d'une journée entière. Convient également aux personnes souhaitant réserver des bureaux pour quelques heures ou une demie-journée.
                </li>
                <br></br>
                <li><strong>Forfait mensuel : </strong>
                convient aux petites entreprises ou aux indépendants qui ont besoin d'un espace de réunion de manière occasionnelle.
                </li>
                <br></br>
                <li><strong>Forfait annuel : </strong>
                convient pour les plus grandes entreprises et les organisations nécessitant un accès illimité.
                </li>
                <br></br>
              </ul>
              <h3>
              L’avantage de nos forfaits :
              </h3>
              <ul>
                <li><strong>Accès Immédiat : </strong>
                Obtenez un accès rapide à des bureaux entièrement équipés, permettant à votre entreprise de démarrer ou de poursuivre ses activités sans délai.
                </li>
                <br></br>
                <li>
                <strong>Durée flexible : </strong>
                Choisissez la durée qui convient le mieux à vos besoins, que ce soit pour une courte période de projet ou sur du long terme. De plus, notre forfait offre une flexibilité adaptée à l'évolution de votre entreprise.
                </li>
                <br></br>
                <li>
                <strong>Services Inclus : </strong>
                Profitez de services complets tels que l'accès à Internet Haut débit, des salles de réunion équipées pour faciliter votre quotidien professionnel.
                </li>
                <br></br>
                <li>
                <strong> Mobilier Ergonomique : </strong>
                Les bureaux réservés sont fournis avec du mobilier ergonomique de haute qualité, créant un environnement de travail confortable et propice à la productivité.
                </li>
        
              </ul>
              <p style={{margin:"20px"}}>
              Gagnez du temps, évitez les problèmes logistiques et concentrez-vous sur le développement de votre entreprise.
              </p>
              <p>
              Réservez votre forfait dès maintenant et profitez d'un espace de travail professionnel !
              </p>
              

              
            </div>
            {/* <div className="column grid-9-12 ">
              <figure className="picture">
                <Image
                  src="/assets/services/sol/carrelage.jpg"
                  alt="Pose de carrelage dans un salon de coiffure"
                  layout="fill"
                  objectFit="cover"
                  blurDataURL="/assets/placeholder.png"
                  placeholder="blur"
                />
              </figure>
              <figcaption>Pose de carrelage dans un salon de coiffure</figcaption>
            </div> */}
          </div>

          

          <ContactUs />
          <RapidAccess
            prev={{ url: "/prestations/location-parking", legend: "Location-parking" }}
            next={{ url: "/prestations/location-bureau", legend: "Location-bureau" }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default bureau;
