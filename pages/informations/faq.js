import FaqItem from "../../components/faq-item.js";
import Layout from "../../components/general/layout/layout.js";
import Head from "next/head";
import { SITE_NAME } from "../../lib/constants";
import FilArianne from "../../components/general/filarianne";
import RapidAccess from "../../components/general/rapidAccess.js";

const Faq = ({ content }) => {
  const richSnippets = content.map(question => ({
    "@type": "Question",
    name: question.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.content[0],
    },
  }));

  // console.log(richSnippets);

  return (
    <Layout title="FAQ" description="Réponses aux questions les plus fréquentes au sujet de l'isolation thermique">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [richSnippets],
            }),
          }}
        />
      </Head>
      <section id="faq">
        <FilArianne
          links={[
            { url: "/informations", legend: "informations" },
            { url: "/informations/faq", legend: "FAQ" },
          ]}
        />
        <div className="container">
          <h1 className="text-center ">Foire aux questions</h1>

          <div className="mt-7">
            {content.map(question => (
              <FaqItem key={question.title} description={question.content}>
                {question.title}
              </FaqItem>
            ))}
          </div>
        </div>
      </section>
      <RapidAccess
        prev={{ url: "/informations", legend: "Informations" }}
        next={{ url: "/informations/lexique", legend: "Lexique" }}
      />
    </Layout>
  );
};

export default Faq;

export async function getStaticProps() {
  const content = [
    {
      title: "Laine de verre ou de roche : quels isolants choisir ?",
      content: [
        "Ce sont deux isolants fibreux. La laine de roche est issue du basalte et la laine de verre est issue de sable et de verre. Leurs caractéristiques sont proches. ",
        "La laine de roche augmentera plus votre confort thermique l’été dû à sa densité.",
        "La laine de verre a un pouvoir isolant supérieur pour une isolation thermique intérieure. La laine de verre reste moins chère. ",
      ],
    },
    {
      title: "ITE ET ITI la différence ? ",
      content: [
        "Après une trentaine d’années, il faut effectuer obligatoirement un ravalement de façade. Pour ce faire, on utilise l’ITE dit isolation thermique par l'extérieur, qui consiste à placer un isolant à l'extérieur de la maison. Cette technique est privilégiée car elle limite les ponts thermiques. De plus, en été une ITE attribue à votre logement une inertie thermique. Les murs vont baisser la température extérieure. Un mur isolé de l’extérieur protège contre les risques hygrothermiques. ",
        "L’isolation thermique intérieur dit ITI, consiste à poser l’isolant choisi à l'intérieur de la maison. L’ITI est une solution efficace et économique. En hiver cette isolation permettra de maintenir la chaleur, la consommation de chauffage diminue. En été, la fraîcheur du logement sera conservée et les ponts thermiques seront évités de manière efficace.",
      ],
    },
    {
      title: "Pourquoi opter pour une rénovation énergétique ?",
      content: [
        "Faire le choix d’entreprendre une rénovation énergétique c’est respecter et protéger l’environnement en limitant l'émission de gaz à effet de serre. Mais encore obtenir un meilleur confort thermique tout en réduisant vos factures de chauffage. Ces travaux énergétiques peuvent aussi vous permettre lors d’une revente de valoriser votre patrimoine immobilier. Plusieurs aides de l’Etat ou des collectivités locales sont versés pour vous permettre de sauter le pas.",
      ],
    },
  ];

  return {
    props: {
      content,
    },
  };
}
