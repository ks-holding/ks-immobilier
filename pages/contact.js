import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import { load } from "recaptcha-v3";

import Layout from "../components/general/layout/layout.js";
import TextInput from "../components/general/inputs/TextInput.js";
import TextArea from "../components/general/inputs/TextArea.js";

/// VERIFY CRITERES
import VerifLength from "../components/contact/verifyCriteres/VerifLength.js";
import VerifEmail from "../components/contact/verifyCriteres/VerifEmail.js";
import ModalWindow from "../components/general/modalWindow.js";

import { SITE_TEL1, SITE_TEL2, SITE_ADDRESS, SITE_ADDRESS2, SITE_ADDRESS3, CAPTCHA_PUBLIC } from "../lib/constants.js";

export default function Contact() {
  // 
  const [name, setName] = useState("");
  const [forName, setForName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  ///
  const [consent, setConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("title");
  const [modalDescription, setModalDescription] = useState("description");
  const [modalStatus, setModalStatus] = useState(null);

  ///////////////////////////////

  // console.log("NEXT_PUBLIC_RECAPTCHA");
  // console.log(process.env.NEXT_PUBLIC_RECAPTCHA);
  // console.log("CAPTCHA_SECRET");
  // console.log(process.env.CAPTCHA_SECRET);

  const verifyInputs = () => {
    if (
      VerifLength(name, 3, 40) &&
      VerifLength(forName, 3, 40) &&
      VerifLength(email, 3, 40) &&
      VerifEmail(email) &&
      VerifLength(message, 6, 500)
    ) {
      setErrorMessage("");
      return true;
    } else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      if (consent === true) {
        setErrorMessage("Veuillez corriger les champs avant de soumettre le formulaire !");
      }
      if (consent === false) {
        setErrorMessage("Veuillez corriger les champs et accepter les conditions d'utilisation");
      }
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let verified = verifyInputs();
    const recaptcha = await load(CAPTCHA_PUBLIC);

    if (verified == true) {
      const token = await recaptcha.execute("contact");
      console.log(token);
      const newContact = { name, forName, email, phone, subject, message, token };
      axios.post("api/sendcontact", { newContact }).then(data => {
        setName("");
        setEmail("");
        setPhone("");
        setForName("");
        setSubject("");
        setMessage("");
        console.log(data);

        if (data.data === true) {
          setModalTitle("Message transmis !");
          setModalDescription("Notre équipe va vous répondre dans les plus brefs délais");
          setModalStatus("success");
          setModalOpen(true);
        } else {
          setModalTitle("l'envoi a échoué !");
          setModalDescription("Veuillez vérifier vos champs avant de soumettre le formulaire");
          setModalStatus("failed");
          setModalOpen(true);
        }
      });
    }
  };

  return (
    <Layout title="Contact" description="Contactez-nous pour toute demande d'information complémentaire ou devis">
      {modalOpen && (
        <ModalWindow
          setModalOpen={setModalOpen}
          title={modalTitle}
          status={modalStatus}
          description={modalDescription}
        />
      )}

      {/* <ModalWindow name="Message Envoyé" description="nous avons bien reçu votre message, " statut="success" /> */}
      <section id="contact">
        <div className="container">
          <h1 className="text-center">Contact</h1>
          <p className="center">Ouvert du lundi au vendredi de 9h à 17h30</p>
          <div id="coordonnees">
            {/* <div>
            <img className="batiment-ks-renov" src="/assets/contact/bat-ks-ren.png" alt="batiment-ks-renov" />
            </div> */}
            <p className="center text-center ">
            <a style={{ textAlign:"center"  }} href="https://maps.app.goo.gl/AYHMzbyynAQN45hd9" target="_blank">14 avenue Eugène Freyssinet 95740 FREPILLON</a>
            </p>
            
            

            <p className="center baseline">
            <a  href="mailto:contact@ks-immo.fr">contact@ks-immo.fr</a>
            </p>
            <p className="center baseline"><a href={`tel:${SITE_TEL1}`}>{SITE_TEL1}</a></p>
          </div>
        </div>
        
        <div className="container">
        <h2 className="center" style={{textAlign:"center",marginBottom:"35px"}}>Nous contacter</h2>
        <div className="formulaire">
          <div className="partie-guache-cntc">
          <h2 id="ecr-formu" className="text-center">Formulaire</h2>
          <div className="contact-info1">
                <div className="divicon">
                  <div className="image-with-text"><img src="/assets/contact/preoccuper.png" alt="devis" className="image" /><span className="text">Vous souhaitez en savoir plus ? </span></div>
                  <div className="image-with-text"> <img className="image"  src="/assets/contact/ecrire.png" alt="contact" /><span className="text">Écrivez-nous pour vous aider. </span></div>
                  
              </div>
                </div>
          </div>
          <div  id="contact_form">
          

          <p className="error">{errorMessage}</p>

          <form action="" onSubmit={e => handleSubmit(e)} className="column">
            <TextInput name="name" label="Nom" value={name} setter={setName} placeholder="Nom *">
              
            </TextInput>
            <TextInput
              name="forname"
              value={forName}
              setter={setForName}
              validated={false}
              placeholder="Prénom *"
            >
              
            </TextInput>
            <TextInput name="email" value={email} setter={setEmail} validated={false} placeholder="E-mail *">
              
            </TextInput>
            <TextInput
              name="phone"
              value={phone}
              setter={setPhone}
              validated={false}
              placeholder="Téléphone"
            >
              
            </TextInput>
            <TextInput
              name="subject"
              value={subject}
              setter={setSubject}
              validated={false}
              placeholder="Objet"
            >
            </TextInput>
            <TextArea value={message} name="message" setter={setMessage} placeholder="Entrez votre message" />
            <div className="row">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
              />
              <label style={{color:'white'}} htmlFor="consent">
                En cochant cette case vous acceptez nos
                <Link href="/informations/conditions-utilisations">
                  <a className="link" target="_blank">
                    {" "}
                    conditions générales d'utilisations
                  </a>
                </Link>
              </label>
            </div>
            <button className="button-empty" type="submit">
              Envoyer
            </button>
            <p style={{color:'white'}}>* Champs obligatoires</p>
            <p style={{color:'white'}} className="notice">Formulaire de contact protégé par Google Recaptcha</p>
          </form>
        </div>
        </div>
        </div>
        
      </section>
    </Layout>
  );
}
