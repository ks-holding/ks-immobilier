import React from "react";
import Layout from "../../components/general/layout/layout";
import FilArianne from "./../../components/general/filarianne";

export default function fusionLmdr() {
  return (
    <Layout
      title="Fusion"
      description="Informations légales relatives à la fusion des sociétés LMDR, KS-Rénov' et KS-Calosud"
    >
      <section id="fusion" className="container mt-3">
        <FilArianne
          links={[
            { url: "/informations", legend: "informations" },
            { url: "/informations/fusion-lmdr", legend: "Fusion LMDR" },
          ]}
        />
        <h1 className="text-center mb-5">Projet de fusion entre LA MAISON DES REVES et KS RENOV-HABITAT</h1>
        <div className="grid-layout">
          <div className="tile grid-1-6">
            <h2>LA MAISON DES REVES</h2>
            <p>SARL</p>
            <p>au capital de 50 200 euros</p>
            <p>Siège social : 8 AVENUE ROLAND MORENO</p>
            <p>95740 FREPILLON</p>
            <p>491 490 371 RCS PONTOISE</p>
          </div>

          <div className="tile grid-7-12">
            <h2>KS RENOV-HABITAT </h2>
            <p>Société à responsabilité limitée </p>
            <p>au capital de 50 000 euros</p>
            <p>Siège social : 8 AVENUE ROLAND MORENO </p>
            <p>95740 FREPILLON </p>
          </div>
        </div>

        <p>Aux termes d'un acte sous signature privée en date à Frepillon du 15 Juin 2022,</p>

        <p>
          La société LA MAISON DES REVES, société à responsabilité limitée au capital de 50 200 euros, dont le siège
          social est 8 Avenue Roland Moreno, immatriculée au Registre du commerce et des sociétés sous le numéro 491 490
          371, et la société KS RENOV-HABITAT, société à responsabilité limitée au capital de 50 000 euros, dont le
          siège social est 8 AVENUE ROLAND MORENO 95740 FREPILLON, immatriculée au Registre du commerce et des sociétés
          sous le numéro 807 572 268, ont établi le projet de leur fusion par voie d'absorption de la société LA MAISON
          DES REVES par la société KS RENOV-HABITAT.
        </p>

        <p>
          La société LA MAISON DES REVES ferait apport à la société KS RENOV-HABITAT de la totalité de son actif, soit
          448 532 euros, à charge de la totalité de son passif, soit 340 804 euros. La valeur nette des apports
          s'élèverait à 107 728 euros.
        </p>

        <p>
          La totalité des droits sociaux composant le capital des sociétés absorbante et absorbée étant détenus par la
          même société mère, la société KS HOLDING, Société à responsabilité limitée au capital de 50000 euros, dont le
          siège social est situé 8 Avenue Roland Moreno 95740 FREPILLON, immatriculée sous le numéro 831 755 616 RCS
          PONTOISE, il ne sera procédé à aucune augmentation de capital, aucun échange de titres et aucune prime de
          fusion.
        </p>

        <p className="mt-4">
          La fusion prendrait effet rétroactivement au 01 avril 2022, d'un point de vue comptable et fiscal.
        </p>
        <p>
          Toutes les opérations actives et passives, effectuées par la société LA MAISON DES REVES depuis le 01 avril
          2022 jusqu'au jour de réalisation définitive de la fusion seraient prises en charge par la société KS
          RENOV-HABITAT.{" "}
        </p>

        <p>
          La société LA MAISON DES REVES sera dissoute de plein droit sans liquidation, à la date de réalisation
          définitive de la fusion.
        </p>

        <p>La fusion sera réalisée le 24 Juillet 2022.</p>
        <p className="mt-4">
          Les créanciers de la société absorbante, ainsi que ceux de la société absorbée dont les créances sont
          antérieures au présent avis, pourront faire opposition à la présente fusion dans les conditions prévues aux
          articles L. 236-14 et R. 236-8 du Code de commerce, soit trente jours à compter de la présente publication,
          devant le Tribunal de commerce compétent.
        </p>

        <p>
          Conformément à l'article L. 236-6 du Code de commerce, le projet de fusion a été déposé au greffe du Tribunal
          de commerce de Pontoise au nom des deux sociétés le 22 Juin 2022.
        </p>
        <p>
          Les créanciers de la société absorbante, ainsi que ceux de la société absorbée dont les créances sont
          antérieures au présent avis, pourront faire opposition à la présente fusion dans les conditions prévues aux
          articles L. 236-14 et R. 236-8 du Code de commerce, soit trente jours à compter de la présente publication,
          devant le Tribunal de commerce compétent.
        </p>

        <p className="mt-5">Pour avis</p>
      </section>
    </Layout>
  );
}
