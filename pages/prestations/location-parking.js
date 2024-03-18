import React from "react";
import Layout from "../../components/general/layout/layout";
import FilArianne from "../../components/general/filarianne";
import ContactUs from "../../components/general/ContactUs";
import RapidAccess from "../../components/general/rapidAccess";
import Image from "next/image";

const parking = () => {
  return (
    <Layout
      title="Location parking"
      description="Installation de carrelage, parquet, PVC, lino  ainsi que la dépose du revêtement précedent. KS Renov' peut réaliser n'importe quel type de revêtement de sol"
    >
      <section id="sols" className="service_page">
        <div className="container">
          <FilArianne
            links={[
              { url: "/prestations", legend: "Prestations" },
              { url: "/prestation/Location-parking", legend: "Location-parking" },
            ]}
          />
          <figure className="picture-panorama">
            <Image
              objectFit="cover"
              layout="fill"
              src="/assets/home/realisations/parking.jpg"
              alt="Construction d'une charpente maison"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>

          
          <div className="grid-layout">
            <div className="column grid-1-12">
              <h2 className="text-left ">Vous recherchez une solution de stationnement fiable et pratique ?</h2>
              <p>
              Notre service de location de parking offre la solution idéale pour répondre à vos besoins en matière de stationnement. Nous mettons à votre disposition des emplacements de parking sécurisés dans des emplacements stratégiques.
            Que vous ayez besoin d'un espace de stationnement à court terme ou à long terme, notre service de location s'adapte à vos besoins. Nous offrons des options flexibles pour répondre à toutes vos demandes.
            
            Alors optez pour la tranquillité d'esprit et la commodité avec notre service de location de parking. Réservez dès aujourd'hui et assurez-vous un stationnement sûr et accessible à tout moment !
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
            prev={{ url: "/prestations/location-bureau", legend: "Location-bureau" }}
            next={{ url: "/prestations/forfait", legend: "Forfait" }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default parking;