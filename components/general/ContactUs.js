import React from "react";
import Link from "next/link";
import { MailOpenOutline } from "react-ionicons";

export default function ContactUs() {
  return (
    <div id="contactus">
      <p>
        {" "}
        Nous proposons des devis gratuits et personnalisé sur demande
        <br />
        <br />
        N'hésitez pas à nous contacter par téléphone ou sur notre site web via le formulaire de contact
      </p>

      <br />
      <div className="row center">
        <Link href="/contact">
          <button className="button-empty">
            <MailOpenOutline width="30px" height="30px" color={"#2A3352"} />
            Formulaire de contact
          </button>
        </Link>
      </div>
    </div>
  );
}
