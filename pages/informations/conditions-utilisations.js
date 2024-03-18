import Layout from "../../components/general/layout/layout";
import RapidAccess from "./../../components/general/rapidAccess";
import FilArianne from "./../../components/general/filarianne";

import { SITE_NAME } from "../../lib/constants";

const ConditionsUtilisation = () => {
  return (
    <Layout title="Conditions d'utilisation" description="Retrouvez ici nos conditions d'utilisation de notre site web">
      <FilArianne
        links={[
          { url: "/informations", legend: "informations" },
          { url: "/informations/conditions-utilisations", legend: "Conditions d'utilisation" },
        ]}
      />

      <section className="container-medium" id="conditions-utilisations">
        <h1>Conditions d'utilisation</h1>
        <h2>ARTICLE 1 : Objet</h2>
        <p>
          Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l’utilisation
          du site{SITE_NAME} et de ses services.
        </p>
        <p>Ce contrat est conclu entre :</p>
        <p>Le gérant du site internet, ci-après édité par l'entreprise{SITE_NAME} </p>
        <p>
          Toute personne physique ou morale souhaitant accéder au site{SITE_NAME} et à ses services, ci-après appelé «
          l’Utilisateur ».
        </p>
        <p>
          Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut
          acceptation de ces conditions.Elles constituent le contrat entre le site et l’Utilisateur. L’accès au site par
          l’Utilisateur signifie son acceptation des présentes conditions générales d’utilisation.
        </p>
        <h2>Article 2: Mention légales</h2>
        <p>
          Le site est édité par la société{SITE_NAME}, SARL au capital de 50 000 €, dont le siège social est situé au
          244 Boulevard Barthélémy 13730 Saint-Victoret Abbadie
        </p>
        <p>La société est représentée par M.Koffi Schmith.</p>
        <h2>ARTICLE 3 : accès aux services</h2>
        <p>L’Utilisateur du site {SITE_NAME} a accès aux services suivants :</p>
        <ul className="dotlist">
          <li>Construction</li>
          <li>Rénovation</li>
          <li>Conception</li>
          <li>Aménagement</li>
        </ul>
        <p>
          Tout Utilisateur ayant accès à internet peut accéder gratuitement et depuis n’importe où au site. Les frais
          supportés par l’Utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la
          charge de l’Éditeur.
        </p>

        <p>
          L’Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse contact@t2i-n.com
        </p>
        <h2>Article 4. Définitions</h2>
        <p>La présente clause a pour objet de définir les différents termes essentiels du contrat:</p>
        <p>
          Utilisateur: ce terme désigne toute personne qui utilise le site ou l’un des services proposés par le site.
        </p>
        <p>Contenu utilisateur: ce sont les données transmises par l'Utilisateur au sein du site.</p>
        <h2>Article 5: Propriété intellectuelle</h2>
        <p>
          Les contenus du site{SITE_NAME} (logos, textes, éléments graphiques, vidéos, etc.) sont protégés par le Code
          de la propriété intellectuelle et plus particulièrement par le droit d’auteur.
        </p>
        <p>
          L’Utilisateur devra obtenir l’autorisation de l’éditeur du site avant toute reproduction, copie ou publication
          de ces différents contenus.
        </p>
        <p>
          Ces derniers peuvent être utilisés par les utilisateurs à des fins privées ; tout usage commercial est
          interdit.
        </p>
        <p>
          L’Utilisateur est entièrement responsable de tout contenu qu’il met en ligne et il s’engage à ne pas porter
          atteinte à un tiers.
        </p>
        <p>
          L’Éditeur du site se réserve le droit de modérer ou de supprimer librement et à tout moment les contenus mis
          en ligne par les utilisateurs, et ce sans justification.
        </p>
        <h2>Article 6 . Données personnelles</h2>
        <p>
          Les informations demandées lors du formulaire de contact sont nécessaires et obligatoires. En particulier,
          l’adresse électronique pourra être utilisée par le site pour l’administration, la gestion et l’animation du
          service.
        </p>
        <p>
          Le site assure à l’Utilisateur une collecte et un traitement d’informations personnelles dans le respect de la
          vie privée conformément à la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux
          libertés.
        </p>
        <p>
          En vertu des articles 48 et suivants de la loi n° 78-17 relative à l’informatique, aux fichiers et aux
          libertés en date du 6 janvier 1978, réécrite par l’ordonnance n° 2018-1125 du 12 décembre 2018 applicable au
          1er juin 2019, l’Utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition de
          ses données personnelles. L’Utilisateur exerce ce droit via:
        </p>
        <ul className="dotlist">
          <li>un formulaire de contact</li>
          <li>par mail à l’adresse {process.env.EMAIL_DESTINATION} </li>
        </ul>
        <h2>Article 7 : Liens hypertextes</h2>
        <p>
          Les liens hypertextes sortants sont présents sur le site. Les domaines où mènent ces liens n’engagent en rien
          la responsabilité de{SITE_NAME} qui n’a pas de contrôle de ces liens.
        </p>
        <h2>Article 8: Evolution du contrat</h2>
        <p>Le site se réserve à tout moment le droit de modifier les clauses stipulées dans le présent contrat.</p>
        <h2>Article 9: Durée du contrat</h2>
        <p>
          La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de l'Utilisateur à
          compter du début de l’utilisation du service.
        </p>
        <h2>Article 10. Droit applicable et juridiction compétente</h2>
        <p>Le présent contrat dépend de la législation française.</p>
        <p>
          En cas de litige non résolu à l’amiable entre l’Utilisateur et l’Éditeur, les tribunaux de Bobigny sont
          compétents pour régler le contentieux.
        </p>
      </section>

      <RapidAccess
        prev={{ url: "/informations", legend: "Informations" }}
        next={{ url: "/informations/faq", legend: "FAQ" }}
      />
    </Layout>
  );
};

export default ConditionsUtilisation;
