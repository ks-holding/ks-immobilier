require("dotenv").config();
const nodemailer = require("nodemailer");

import { SITE_NAME } from "../../lib/constants.js";

const CONTACT_HOST = "smtp.office365.com";
const CONTACT_PORT = "587";
const CONTACT_EMAIL = "webcontact@ife-france.fr";
const CONTACT_PASSWORD = "EhJs25**";
const EMAIL_DESTINATION = "contact@ks-immo.fr";

export default (req, res) => {
  console.log(req.body);

  const { nom, prenom, email, phone, day, month, year, selecthours} = req.body.newContact;
  

  const sendMail = () => {
    console.log("test sending");
    const transporter = nodemailer.createTransport({
      host: CONTACT_HOST,
      port: CONTACT_PORT,
      secure: false,
      auth: {
        user: CONTACT_EMAIL,
        pass: CONTACT_PASSWORD,
      },
    });

    transporter.sendMail(
      {
        from: CONTACT_EMAIL,
        to: EMAIL_DESTINATION,
        subject: `Nouveau mail de ${email} - Pour le site ${SITE_NAME}`,
        html: `
          <p>📩 Message pour ${SITE_NAME}:</p>
          <p>👤 Prénom : ${prenom}</p>
          <p>👥 Nom : ${nom}</p>
          <p>📧 Adresse e-mail : ${email}</p>
          <p>☎️ Téléphone : ${phone}</p>
          <p>📅 Date réservée: ${day}/${month}/${year}</p>
          <p>⏰ Heure réservée: ${selecthours.join(', ')}</p>
        `
      }
      ,
      (err, data) => {
        console.log(err);
        console.log(data);

        if (err) {
          console.log(err);
          res.send(false);
        } else {
          console.log("mail send");
          res.send(true);
        }
      }
    );
  };

  sendMail();
};
