import { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function CookieShow(props) {
  const setCookieAgree = props.setCookieAgree;

  return (
    <div className="cookies-advert">
      <h2>Cookies</h2>
      <p>Nous utilisons des cookies sur ce site</p>

      <p>
        Cliquez sur le bouton "J'ai compris" pour donner votre consentement à ces opérations. Vous pouvez modifier vos
        préférences à tout moment en revenant sur ce site.
      </p>

      <div className="row">
        <Link href="/legalcontent/cookies">
          <button className="">En savoir plus</button>
        </Link>

        <button
          onClick={() => {
            setCookieAgree(true);
            Cookies.set("cookiesConsent", "true");
          }}
        >
          J'ai compris
        </button>
      </div>
    </div>
  );
}
