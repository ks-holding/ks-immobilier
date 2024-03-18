import Layout from "../../components/general/layout/layout";
import RapidAccess from "./../../components/general/rapidAccess";
import FilArianne from "./../../components/general/filarianne";
import LexiqueWrapper from "./../../components/general/lexique-wrapper";

const Lexique = () => {
  return (
    <Layout
      title="Lexique"
      description="Ce lexique présentent toutes les définitions utiles concernant l'isolation thermique"
    >
      <section id="lexique">
        <FilArianne
          links={[
            { url: "/informations", legend: "informations" },
            { url: "/informations/lexique", legend: "Lexique" },
          ]}
        />

        <div className="container-medium">
          <h1 className="text-center">Lexique</h1>
          <LexiqueWrapper />
        </div>
      </section>
      <RapidAccess
        prev={{ url: "/informations", legend: "Informations" }}
        next={{ url: "/informations/mentions-legales", legend: "Mentions légales" }}
      />
    </Layout>
  );
};

export default Lexique;
