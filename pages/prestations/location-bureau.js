import React from "react";
import Layout from "../../components/general/layout/layout";
import FilArianne from "../../components/general/filarianne";
import ContactUs from "../../components/general/ContactUs";
import RapidAccess from "../../components/general/rapidAccess";
import Image from "next/image";

const bureau = () => {
  return (
    <Layout
      title="Location bureau"
      description="Installation de carrelage, parquet, PVC, lino  ainsi que la dépose du revêtement précedent. KS Renov' peut réaliser n'importe quel type de revêtement de sol"
    >
      <section id="sols" className="service_page">
        <div className="container">
          <FilArianne
            links={[
              { url: "/prestations", legend: "Prestations" },
              { url: "/prestation/Location-bureau", legend: "Location-bureau" },
            ]}
          />
          <figure className="picture-panorama">
            <Image
              objectFit="cover"
              layout="fill"
              src="/assets/home/realisations/image-bureau-2.jpg"
              alt="Construction d'une charpente maison"
              blurDataURL="/assets/placeholder.png"
              placeholder="blur"
            />
          </figure>

          
          <div className="grid-layout">
            <div className="column grid-1-12">
              <h2 className="text-left ">Vous êtes à la recherche d’un espace de bureau professionnel ?</h2>
              <p>
              
              Notre service de location de bureaux offre des espaces modernes et équipés pour répondre aux besoins variés de votre entreprise. Découvrez un environnement de travail exceptionnel conçu pour favoriser la productivité et l'efficacité.
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
          <div className="grid-layout">
    {/* Première ligne d'images */}
    <div className="column grid-1-4">
      <figure className="picture">
        <Image
          src="/assets/home/realisations/image-bureau-3.jpg"
          alt="Description de la première image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure>
    </div>
    <div className="column grid-5-8">
      <figure className="picture">
        <Image
          src="/assets/home/realisations/image-bureau-7.jpg"
          alt="Description de la deuxième image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure>
    </div>
    <div className="column grid-9-12">
      <figure className="picture">
        <Image
          src="/assets/home/realisations/image-bureau-4.jpg"
          alt="Description de la troisième image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure>
    </div>

    {/* Deuxième ligne d'images */}
    <div className="column grid-1-6">
      <figure className="picture">
        <Image
          src="/assets/home/realisations/image-bureau-6.jpg"
          alt="Description de la quatrième image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure>
    </div>
    <div className="column grid-7-12">
      <figure className="picture">
        <Image
          src="/assets/home/realisations/image-bureau-5.jpg"
          alt="Description de la cinquième image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure>
    </div>
  </div>
          

          <ContactUs />
          <RapidAccess
            prev={{ url: "/prestations/location-parking", legend: "Location-parking" }}
            next={{ url: "/prestations/forfait", legend: "Forfait" }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default bureau;