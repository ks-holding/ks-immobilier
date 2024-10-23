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
              <h2 className="text-left ">Location bureaux :</h2>
              <h3>Vous êtes à la recherche d’un espace de bureau professionnel ?</h3>

              <p>
              
              Notre service de location de bureaux offre des espaces modernes et équipés pour répondre aux besoins variés de votre entreprise. Découvrez un environnement de travail exceptionnel conçu pour favoriser la productivité et l'efficacité.
              </p>
              <h3>Pourquoi choisir nos bureaux ?</h3>
              <ul>
                <li><strong>Bureaux entièrement équipés  : </strong>
                 Nos bureaux sont meublés avec soin, équipés de mobilier ergonomique et de technologies modernes pour créer un environnement de travail optimal.
                </li>
                <br></br>
                <li>
                <strong>Emplacements stratégiques : </strong>
                 KS IMMOBILIER offre à votre entreprise une adresse professionnelle et une bonne visibilité. Vous êtes à proximité des plus grands sites industriels des Bouches-du-Rhône.
                </li>
                <br></br>
                <li>
                <strong>Accès au WIFI : </strong>
                 Profitez de la connectivité rapide et fiable, et d'un accès sécurisé à internet pour vous aider dans vos activités professionnelles.
                </li>
                <br></br>
                <li>
                <strong> Flexibilité de location : </strong>
                Que vous ayez besoin d'un bureau privé, d'un espace de coworking ou d'une salle de réunion, nos offres sont flexibles et s'adaptent à votre besoin.
                </li>
                <br></br>
                <li>
                <strong>Services complémentaires : </strong>
                 Accédez à des services complémentaires comme une imprimante connectée dernière génération pour vous simplifier dans vos missions professionnelles.
                </li>
                <br></br>
                <li>
                <strong>Espaces de détente : </strong>
                 Nos locaux offrent des espaces de détente conviviaux, des cuisines équipées, et parfois même des espaces verts, créant un environnement équilibré propice au bien-être au travail.
                 <br></br>
                 <br></br>
                Alors n’attendez plus ! Choisissez la location de bureaux chez KS IMMOBILIER pour bénéficier d'un cadre professionnel exceptionnel et d'une flexibilité adaptée à l'évolution de votre entreprise.
                <br></br><br></br>Réservez votre espace de travail dès aujourd'hui et offrez-vous le meilleur environnement pour la réussite de vos activités professionnelles.
                </li>
        
              </ul>

              
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
      {/* <figure className="picture">
        <Image
          src="/assets/home/realisations/image-bureau-3.jpg"
          alt="Description de la deuxième image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure> */}
    <figure className="picture">
        <Image
          src="/assets/home/realisations/Image2.jpg"
          alt="Description de la première image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure>
    
      {/* <figure className="picture">
        <Image
          src="/assets/home/realisations/image-bureau-3.jpg"
          alt="Description de la deuxième image"
          layout="fill"
          objectFit="cover"
          blurDataURL="/assets/placeholder.png"
          placeholder="blur"
        />
      </figure> */}
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
    {/* <div className="column grid-1-6">
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
    </div> */}
  </div>
  <div className="grid-layout">
    {/* Première ligne d'images */}
    <div className="column grid-1-4">
      <figure className="picture">
        <Image
          src="/assets/home/realisations/Image3.jpg"
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
          src="/assets/home/realisations/image-bureau-3.jpg"
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
          src="/assets/home/realisations/Image.jpg"
          alt="Description de la troisième image"
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