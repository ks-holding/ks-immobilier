import Link from "next/link";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { colorText } from "../../lib/variables";

export default function DownloadFlyer() {
  return (
    <div className="grid-1-12 tile container column" id="download-flyer">
      <IoDocumentTextOutline size={70} color={colorText} />

      <h2>En savoir plus</h2>

      <p>Retrouvez notre documentation en suivant ce lien :</p>

      <Link href={"/assets/about/brochure-ks-renov.pdf"} download={true}>
        <a target="_blank">
          <button>
            <BsDownload size={25} color="black" />
            Télécharger brochure
          </button>
        </a>
      </Link>
    </div>
  );
}
