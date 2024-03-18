import { useState } from "react";
import { SITE_NAME, SITE_TEL1 } from "../../../lib/constants";
import { Call } from "react-ionicons";

import Link from "next/link";
import Image from "next/image";

const HeaderNav = props => {
  const selected = props.selected;

  return (
    <nav>
      <div className="container">
        <Link href="/">
          <a className="fadein">
            <Image width="160" height="40" layout="fixed" src="/assets/logo.png" alt={SITE_NAME} id="logo" />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/prestations">
              <a
                className={
                  selected == "/prestations" ||
                  selected == "/prestation/charpente" ||
                  selected == "/prestation/couverture-toiture" ||
                  selected == "/prestation/installation-electrique" ||
                  selected == "/prestation/isolation-thermique" ||
                  selected == "/prestation/maconnerie" ||
                  selected == "/prestation/peinture" ||
                  selected == "/prestation/plomberie" ||
                  selected == "/prestation/revetement-sol" ||
                  selected == "/prestation/zinc"
                    ? "nav_selected"
                    : null
                }
              >
                Prestations
              </a>
            </Link>
          </li>
          
          
          <li>
            <Link href="/about">
              <a className={selected == "/about" ? "nav_selected " : null}>A propos</a>
            </Link>
          </li>
          <li>
            <Link href="/reservation_salle">
              <a className={selected == "/reservation_salle" ? "nav_selected" : null}>Réservation salle de réunion</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={selected == "/contact" ? "nav_selected" : null}>Contact</a>
            </Link>
          </li>
        </ul>
        <div className="phone_number">
          
          <Call size={20} color="black" />
          <a  href={`tel:${SITE_TEL1}`}>{SITE_TEL1}</a>
          
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
