import Link from "next/link";
import Image from "next/image";
import { PhonePortraitOutline, CallOutline, LogoLinkedin, LogoFacebook, LogoInstagram } from "react-ionicons";
import { AiFillInstagram } from "react-icons/ai";
import { FaHouzz, FaTiktok } from "react-icons/fa";
import { FaFacebookF} from "react-icons/fa";
import { SITE_NAME, SITE_TEL1, FACEBOOK, LINKEDIN, INSTAGRAM, HOUZZ, TIKTOK } from "../../../lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="infos">
        <div className="wrapper">
          <ul className="column">
            <li>
              <Link href="/informations">
                <a className="title">Informations</a>
              </Link>
            </li>
            <li>
              <Link href="/informations/mentions-legales">
                <a>Mentions légales</a>
              </Link>
            </li>

            <li>
              <Link href="/informations/cookies">
                <a>Cookies</a>
              </Link>
            </li>
            
          </ul>

          <ul className="column">
            <li>
              <Link href="/contact">
                <a href="/contact" className="title">
                  Contact
                </a>
              </Link>
            </li>

            <li className="tel"><a  href={`tel:${SITE_TEL1}`}>{SITE_TEL1}</a></li>
            {/* <li>
              <strong>
                {" "}
                <PhonePortraitOutline className="picto" width="20px" height="20px" color="white" />
              </strong>{" "}
              06 12 99 19 45
            </li> */}
            <li>
              <Link href="/contact/#contact_form">
                <a href="/contact/#contact_form">Formulaire</a>
              </Link>
            </li>
            <li>
            <a style={{fontSize:"18px"}} href="mailto:contact@ks-immo.fr">contact@ks-immo.fr</a>
            </li>
          </ul>

          <ul className="column">
            <li>
              <Link href="/prestations">
                <a href="/prestations" className="title">
                  Prestations
                </a>
              </Link>
            </li>

            <li>
              <Link href="/prestations/location-bureau">
                <a>Location bureau</a>
              </Link>
            </li>
            <li>
              <Link href="/prestations/location-parking">
                <a>Location parking</a>
              </Link>
            </li>
            <li>
              <Link href="/prestations/forfait">
                <a>Forfait</a>
              </Link>
            </li>
          
          </ul>
          <div className=" column">
            <div className="logo">
              <Link href="/">
                <a href="">
                  <Image width={150} height={60} layout="fixed" src="/assets/logo.svg" alt="Logo KS Rénov'" />
                </a>
              </Link>
            </div>
            
            <p className="title">Réseaux sociaux</p>
  <div className="row" style={{ display: 'flex', flexWrap: 'wrap'}}>
    <Link href={FACEBOOK}>
      <a href={FACEBOOK} target="_blank">
        <FaFacebookF className="picto"   />
      </a>
    </Link>
  </div>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright 2024 - Tous droits réservés - {SITE_NAME}</div>
    </footer>
  );
}
