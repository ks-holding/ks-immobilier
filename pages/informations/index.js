import Link from "next/link";
import Layout from "./../../components/general/layout/layout";

export default function LegalContents() {
  return (
    <Layout
      title="Informations"
      description="Toutes les informations légales ainsi que des détails relatifs à notre activité"
    >
      <section id="informations" className="mb-6">
        <div className="container-medium text-center mb-3">
          <h1 className="text-center">Informations complémentaires</h1>
          <div className="center">
            <div className="mt-7 mb-7">
              <h2>FAQ</h2>
              <p>Réponse aux principales que l'on se pose aux sujet de l'isolation</p>
              <Link href="/informations/faq">
                <a className="link center">Pour en savoir plus, cliquez ici</a>
              </Link>
            </div>
            <div className="mt-7 mb-7">
              <h2>Lexique</h2>
              <p>
                Lexique des principaux termes utilisés dans le domaine de l'isolation thermique et de la protection
                passive incendie
              </p>
              <Link href="/informations/lexique">
                <a className="link center">Pour en savoir plus, cliquez ici</a>
              </Link>
            </div>
            <div className="mt-7 mb-7">
              <h2>Mentions légales</h2>
              <p>Informations relatives à l'entreprise ainsi qu'à l'hébergement du site web</p>

              <Link href="/informations/mentions-legales">
                <a className="link center">Pour en savoir plus, cliquez ici</a>
              </Link>
            </div>
            <div className="mt-7 mb-7">
              <h2>Cookies</h2>
              <p>
                Nous utilisons des cookies pour améliorer l'expérience utilisateur de notre site, nous vous montreront
                également comment personnaliser l'utilisation de ces derniers
              </p>
              <Link href="/informations/cookies">
                <a className="link center">Pour en savoir plus, cliquez ici</a>
              </Link>
            </div>
            <div className="mt-7 mb-7">
              <h2>Conditions d'utilisation</h2>

              <Link href="/informations/conditions-utilisations">
                <a className="link center">Pour en savoir plus, cliquez ici</a>
              </Link>
            </div>
            <div className="mt-7 mb-7">
              <h2>Fusion avec La Maison des rêves</h2>

              <Link href="/informations/fusion-lmdr">
                <a className="link center">Pour en savoir plus, cliquez ici</a>
              </Link>
            </div>
            <div className="mt-7 mb-7">
              <h2>Fusion avec KS-Calosud</h2>

              <Link href="/informations/fusion-kscalosud">
                <a className="link center">Pour en savoir plus, cliquez ici</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
