import React from "react";

import Layout from "./../../components/general/layout/layout";
import FilArianne from "./../../components/general/filarianne";

export default function fusionKscalosud() {
  return (
    <Layout
      title="Fusion"
      desription="Informations lrégales relatives à la fusion entre KS-CALOSUD et KS RENOV-HABITAT"
    >
      <section id="fusion" className="container mt-3">
        <FilArianne
          links={[
            { url: "/informations", legend: "informations" },
            { url: "/informations/fusion-kscalosud", legend: "Fusion KS-Calosud" },
          ]}
        />

        <h1 className="text-center">Projet de fusion entre KS-CALOSUD et KS-RENOV-HABITAT</h1>

        <div className="grid-layout">
          <div className="grid-1-6 tile">
            <h2>KS CALO-SUD</h2>
            <p>SARL</p>
            <p>au capital de 50 000 euros</p>
            <p>Siège social : 4-6 chemin de l'Arenas</p>
            <p>06200 Nice</p>
            <p>839 084 720 RCS NICE</p>
          </div>
          <div className="grid-7-12 tile">
            <h2>KS RENOV-HABITAT</h2>
            <p>Société à responsabilité limitée</p>
            <p>au capital de 50 000 euros</p>
            <p>Siège social : 8 AVENUE ROLAND MORENO</p>
            <p>95740 FREPILLON</p>
            <p>807 572 268 RCS PONTOISE</p>
          </div>
        </div>

        <p>Aux termes d'un acte sous signature privée en date à Frepillon du 15 Juin 2022,</p>
        <p className="mt-2">
          La société KS CALO SUD, société à responsabilité limitée au capital de 50 000 euros, dont le siège social est
          4-6 CHEMIN DE L'ARENAS 06200 NICE, immatriculée au Registre du commerce et des sociétés sous le numéro 839 084
          720, et la société KS RENOV-HABITAT, société à responsabilité limitée au capital de 50 000 euros, dont le
          siège social est 8 AVENUE ROLAND MORENO 95740 Frepillon, immatriculée au Registre du commerce et des sociétés
          sous le numéro 807 572 268, ont établi le projet de leur fusion par voie d'absorption de la société KS CALO
          SUD par la société KS RENOV-HABITAT.
        </p>

        <p>
          La société KS CALO SUD ferait apport à la société KS RENOV-HABITAT de la totalité de son actif, soit 2 052 296
          euros, à charge de la totalité de son passif, soit 1 638 793 euros. La valeur nette des apports s'élèverait à
          413 503 euros.
        </p>

        <p>
          La totalité des droits sociaux composant le capital des sociétés absorbante et absorbée étant détenus par la
          même société mère, la société KS HOLDING, Société à responsabilité limitée au capital de 50000 euros, dont le
          siège social est situé 8 Avenue Roland Moreno 95740 FREPILLON, immatriculée sous le numéro 831 755 616, il ne
          sera procédé à aucune augmentation de capital, aucun échange de titres et aucune prime de fusion.
        </p>
        <p>La fusion prendrait effet rétroactivement au 01/04/2022, d'un point de vue comptable et fiscal.</p>
        <p className="mt-3">
          Toutes les opérations actives et passives, effectuées par la société KS CALO SUD depuis le 01/04/2022 jusqu'au
          jour de réalisation définitive de la fusion seraient prises en charge par la société KS RENOV-HABITAT.{" "}
        </p>
        <p>
          La société KS CALO SUD sera dissoute de plein droit sans liquidation, à la date de réalisation définitive de
          la fusion.
        </p>

        <p className="mb-3">La fusion sera réalisée le 24 Juillet 2022.</p>

        <p>
          Les créanciers de la société absorbante, ainsi que ceux de la société absorbée dont les créances sont
          antérieures au présent avis, pourront faire opposition à la présente fusion dans les conditions prévues aux
          articles L. 236-14 et R. 236-8 du Code de commerce, soit trente jours à compter de la présente publication,
          devant le Tribunal de commerce compétent.
        </p>

        <p>Conformément à l'article L. 236-6 du Code de commerce, le projet de fusion a été déposé :</p>

        <ul className="dotlist">
          <li>au greffe du Tribunal de commerce de Nice pour la société KS CALO-SUD en date du 22 Juin 2022</li>
          <li>
            au greffe du Tribunal de commerce de Pontoise pour la société KS RENOV-HABITAT en date du 22 Juin 2022.
          </li>
        </ul>
        <p>
          Les créanciers de la société absorbante, ainsi que ceux de la société absorbée dont les créances sont
          antérieures au présent avis, pourront faire opposition à la présente fusion dans les conditions prévues aux
          articles L. 236-14 et R. 236-8 du Code de commerce, soit trente jours à compter de la présente publication,
          devant le Tribunal de commerce compétent.
        </p>

        <p className="mt-2">Pour avis</p>
      </section>
    </Layout>
  );
}
