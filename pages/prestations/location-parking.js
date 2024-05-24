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
              src="/assets/home/realisations/parking1.jpg"
              alt="Construction d'une charpente maison"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>

          
          <div className="grid-layout">
            <div className="column grid-1-12">
              <h2 className="text-left ">Parking (inclus avec la location de bureaux)</h2>
              <h3>
              Vous recherchez une solution de stationnement fiable et pratique ?
              </h3>
              <p> 
              Notre service de location de parking offre la solution idéale pour répondre à vos besoins en matière de stationnement.<br></br><br></br> Nous mettons à votre disposition des emplacements de parking sécurisés .
              Que vous ayez besoin d'un espace de stationnement à court terme ou à long terme, notre service de location s'adapte à vos besoins.<br></br><br></br>
              Des bornes de recharge électrique sont mis à disposition pour les personnes disposant de voitures électriques. <br></br><br></br>
              Alors optez pour la tranquillité d'esprit et la commodité avec notre service de location de parking. 
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