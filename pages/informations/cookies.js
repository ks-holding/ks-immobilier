import Layout from "../../components/general/layout/layout";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";
import RapidAccess from "./../../components/general/rapidAccess";
import FilArianne from "./../../components/general/filarianne";

const Cookies = () => {
  return (
    <Layout
      title="cookies"
      description="Découvrez notre politiques de cookies et la façon dont nous pouvons les paramétrer"
    >
      <section className="container-medium" id="cookies">
        <FilArianne
          links={[
            { url: "/informations", legend: "informations" },
            { url: "/informations/lexique", legend: "Lexique" },
          ]}
        />

        <h1>Politique d'utilisation des cookies</h1>
        <p>
          En visitant notre site Web et en utilisant nos services, vous comprenez et acceptez la façon dont nous
          traitons les données personnelles conformément à notre politique de confidentialité. Nous respectons votre vie
          privée et le droit de contrôler vos données personnelles. Nos principes directeurs sont simples. Nous allons
          être ouverts avec quelles données nous collectons et pourquoi. Veuillez prendre un moment pour les lire. C'est
          important !
        </p>
        <p>
          Les cookies sont de petites quantités d’informations stockées dans des fichiers au sein même du navigateur de
          votre ordinateur. Les cookies sont accessibles et enregistrés par les sites internet que vous consultez, et
          par les sociétés qui affichent leurs annonces publicitaires sur des sites internet, pour qu’ils puissent
          reconnaître le navigateur. Les sites Internet peuvent uniquement accéder aux cookies qu’ils ont stockés sur
          votre ordinateur.
        </p>
        <p>
          Le site Internet utilisent des cookies aux fins suivantes : Usage du site : pour nous aider à reconnaître
          votre navigateur comme celui d’un visiteur précédent et pour enregistrer les préférences que vous avez
          déterminées lors de votre précédente visite sur le Site. Par exemple, nous pouvons enregistrer vos
          informations de connexion de sorte que vous n’ayez pas à vous connecter à chaque fois que vous visitez le Site
          ; Réseaux sociaux : pour vérifier si vous êtes connectés à des services tiers (Facebook, Twitter, Google+…) ;
          Ciblage : pour nous permettre de cibler (emailing, enrichissement de base) à postériori ou en temps réel
          l’internaute qui navigue sur notre Site ; Mesure d’audience : pour suivre les données statistiques de
          fréquentation du Site (soit l’utilisation faite du Site par les utilisateurs et pour améliorer les services du
          Site) et pour nous aider à mesurer et étudier l’efficacité de notre contenu interactif en ligne, de ses
          caractéristiques, publicités et autres communications.
        </p>
        <h2>Vos Choix Concernant les Cookies et Balises Web</h2>
        <p>
          Vous avez le choix de configurer votre navigateur pour accepter tous les cookies, rejeter tous les cookies,
          vous informer quand un cookie est émis, sa durée de validité et son contenu, ainsi que vous permettre de
          refuser son enregistrement dans votre terminal, et supprimer vos cookies périodiquement.
        </p>
        <p>
          Notez toutefois que si vous désactivez les cookies, votre nom d’utilisateur ainsi que votre mot de passe ne
          seront plus sauvegardés sur aucun site web.
        </p>
      </section>

      <RapidAccess
        prev={{ url: "/informations", legend: "Informations" }}
        next={{ url: "/informations/conditions-utilisations", legend: "Conditions d'utilisation" }}
      />
    </Layout>
  );
};

export default Cookies;
