import Layout from "../components/general/layout/layout.js";
import { SITE_NAME } from "../lib/constants.js";
import Image from "next/image";
import Link from "next/link";
import { ArrowBackOutline } from "react-ionicons";

export default function Certifications() {
  return (
    <Layout
      title="Certifications"
      description="Découvrez nos certifications et leurs caractéristiques respectives. A savoir, les CEE, la certification RGE et la certification ITE"
    >
      <section id="certifications">
        <div className="container">
          <h1 className="text-center mb-3">Certifications</h1>

          <div className="row center mt-6 mb-3">
            <Image
              src="/assets/home/certifications/cee.svg"
              layout="fixed"
              width="200"
              height="100"
              alt="Certification CEE"
            />
          </div>

          <p>
            La prime CEE récompense les économies d’énergie réalisées par le financement des travaux de rénovation
            énergétique. Cette prime a été instaurée par la loi POPE (Programmation fixant les Orientations de la
            Politique Énergétique) permettant une subvention de différents travaux.
          </p>
          <p>
            De plus, ce certificat d’économies d’énergie est éligible à la quasi-totalité des particuliers que l’on soit
            locataire ou propriétaire. Cette prime est cumulable notamment avec ma PrimRenov’.
          </p>
          <p>Pour obtenir cette prime, il suffit d’effectuer une demande auprès d’un professionnel RGE.</p>

          <div className="row center mt-7 mb-3">
            <Image
              src="/assets/home/certifications/rge.png"
              layout="fixed"
              width="80"
              height="100"
              alt="Certification RGE"
            />
          </div>

          <p>
            Pour obtenir la prime CEE, il faut faire appel à un professionnel RGE (Reconnu Garant de l’Environnement).
            KS Rénov' possède ce label dans plusieurs domaines d’activités comme l’isolation, la réalisation de
            charpente, de couverture ou encore en maçonnerie.
          </p>
          <p>
            Nos compétences et nos savoir-faire vous sont ainsi assurés pour vos travaux de rénovation énergétique. Nous
            vous accompagnons du montage de votre dossier jusqu’à son dépôt.
          </p>

          <div className="row center mt-7 mb-3">
            <Image
              src="/assets/home/certifications/ite.jpg"
              layout="fixed"
              width="95"
              height="100"
              alt="Certification ITE"
            />
          </div>
          <p>
            Expert en Isolation Thermique Extérieure, nous vous accompagnons pour améliorer les performances
            énergétiques de votre logement permettant ainsi de réduire vos factures. Cette technique d’isolation de
            façade permet de limiter les ponts thermiques.
          </p>
          <p className="mb-4">
            {" "}
            Nous procédons à la pose d’isolant puis d’un revêtement effectué soit avec un enduit de façade soit un
            bardage extérieur. ITE permet aussi de rénover votre façade extérieure sans empiéter sur la surface
            habitable. Notre équipe respecte la réglementation thermique 2020 pour la réalisation des travaux.{" "}
          </p>
        </div>
        <div className="row center">
          <Link href="/">
            <button>
              {" "}
              <ArrowBackOutline width="22px" height="22px" />
              Retour à la page d'accueil
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
