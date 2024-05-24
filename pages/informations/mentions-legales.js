import Head from "next/head";
import BackLink from "../../components/general/backlink.js";
import Layout from "../../components/general/layout/layout.js";
import RapidAccess from "./../../components/general/rapidAccess";
import FilArianne from "./../../components/general/filarianne";
import {
  SITE_NAME,
  SITE_ADDRESS,
  SIREN,
  SIRET,
  TVA,
  RCS,
  FORME_JURIDIQUE,
  APE,
  CAPITAL,
  HOSTER_NAME,
  HOSTER_ADDRESS,
  HOSTER_CITY,
  SITE_TEL1,
  DIRIGEANT,
} from "../../lib/constants.js";

export default function MentionsLegales() {
  return (
    <Layout
      title="Informations légales"
      description="Toutes les informations obligatoires liées à notre société ainsi que les informations d'hébergement du site web"
    >
      {/* <FilArianne
        links={[
          { url: "/informations", legend: "informations" },
          { url: "/informations/mentions-legales", legend: "Mentions légales" },
        ]}
      /> */}

      <section className="container-medium" id="mentions-legales">
        <h1 className="text-center">Mentions légales</h1>
        <h2 className="text-center"> {SITE_NAME}</h2>
        <div className="wrapper">
          {SITE_ADDRESS && (
            <div className="row">
              <h3>Adresse du siège social </h3>
              <span>14 avenue Eugène Freyssinet 95740 FREPILLON</span>
            </div>
          )}
          {SITE_TEL1 && (
            <div className="row">
              <h3>Téléphone </h3>
              <span> {SITE_TEL1}</span>
            </div>
          )}
          {SIREN && (
            <div className="row">
              <h3>SIREN </h3> <span>{SIREN}</span>
            </div>
          )}
          {SIRET && (
            <div className="row">
              <h3>SIRET </h3> <span> {SIRET}</span>
            </div>
          )}
          {TVA && (
            <div className="row">
              <h3>TVA </h3> <span> {TVA}</span>
            </div>
          )}
          {RCS && (
            <div className="row">
              <h3>RCS </h3>
              <span> {RCS}</span>
            </div>
          )}
          {FORME_JURIDIQUE && (
            <div className="row">
              <h3>Forme juridique </h3> <span> {FORME_JURIDIQUE}</span>
            </div>
          )}
          {APE && (
            <div className="row">
              <h3>Code APE </h3>
              <span> {APE}</span>
            </div>
          )}
          {CAPITAL && (
            <div className="row">
              <h3>Montant du capital social</h3>
              <span> {CAPITAL} €</span>
            </div>
          )}
          {DIRIGEANT && (
            <div className="row">
              <h3>Dirigeant</h3>
              <span> {DIRIGEANT}</span>
            </div>
          )}
        </div>
        <div className="wrapper">
          <h2 className="text-center">Hébergeur</h2>
          {HOSTER_NAME && (
            <div className="row">
              <h3>Nom de l'hébergeur </h3>
              <span> {HOSTER_NAME}</span>
            </div>
          )}
          {HOSTER_ADDRESS && (
            <div className="row">
              <h3>Adresse</h3> <span>{HOSTER_ADDRESS}</span>
            </div>
          )}
          {HOSTER_CITY && (
            <div className="row">
              <h3>Ville</h3>
              <span> {HOSTER_CITY}</span>
            </div>
          )}
        </div>
      </section>

      {/* <RapidAccess
        prev={{ url: "/informations", legend: "Informations" }}
        next={{ url: "/informations/cookies", legend: "Cookies" }}
      /> */}
    </Layout>
  );
}
