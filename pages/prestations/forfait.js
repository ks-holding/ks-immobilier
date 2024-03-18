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
              objectFit="cover"
              layout="fill"
              src="/assets/home/realisations/laptop-3196481_1920.jpg"
              alt="Construction d'une charpente maison"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>

          
          <div className="grid-layout">
            <div className="column grid-1-12">
              <h2 className="text-left ">Vous êtes à la recherche d’un espace de bureau professionnel ?</h2>
              <p>
              Notre Forfait « Réservation de salle de réunion » est la solution clé en main idéale pour les entreprises / particulier cherchant à élargir leur empreinte sans les problèmes liés à la gestion d'un espace physique. Profitez de la flexibilité et de la disponibilité de notre service qui s'occupe de tous les détails liés à la réservation de bureaux,
               vous permettant de vous concentrer pleinement sur le développement de votre activité.
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
