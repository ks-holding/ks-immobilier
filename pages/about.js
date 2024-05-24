import Layout from "../components/general/layout/layout.js";
import { SITE_NAME } from "../lib/constants.js";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image.js";
import { ChevronForward, GlobeOutline } from "react-ionicons";
import { HiOutlineChevronRight } from "react-icons/hi";
import { colorSecondary } from "./../lib/variables";
import DownloadFlyer from "../components/sections/DownloadFlyer.js";

export default function About() {
  return (
    <Layout
      title="A propos"
      description="Découvrez l'évolution et les services de notre entreprise, KS Coworking, à travers son historique et sa présentation. Rencontrez notre équipe dévouée et explorez l'univers du coworking au sein du groupe KS Holding."
    >
      <section id="about">
        <div className="grid-layout container">
          {/* <div className="grid-1-6 tile">
            <h1 className="">À propos du groupe</h1>

            <div className="row center mt-3">
              <Image src="/assets/about/logo ks-holding.svg" width="300" height="80" Layout="fixed" />
            </div>
            <p>
              Le groupe KS HOLDING propose par le biais des filiales des solutions en matière de rénovation énergétique,
              isolation et échafaudage. Nous nous adressons aux particuliers et aux professionnels.{" "}
            </p>
          </div> */}
          <div className="grid-1-12 tile">
            <h1 className="">À propos de notre entreprise</h1>

            <div className="row center mt-3">
              <Image src="/assets/logo.png" width="340" height="80" Layout="fixed" />
            </div>
            <p>
              
            

            Nous sommes experts dans la fourniture d'espaces de coworking flexibles adaptés à vos besoins professionnels, offrant des solutions complètes de location de bureaux en coworking.<br></br><br></br>
             Simplifiez votre quotidien avec nos services additionnels, incluant la location de parkings pour une expérience professionnelle sans tracas.
            </p>
          </div>

          
        </div>
        
        {/* //////////////////////////////////////////// */}
      </section>
    </Layout>
  );
}
