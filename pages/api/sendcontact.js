require("dotenv").config();
const nodemailer = require("nodemailer");
import VerifLength from "../../components/contact/verifyCriteres/VerifLength.js";
import VerifyEmail from "../../components/contact/verifyCriteres/VerifEmail.js";
import { SITE_NAME } from "../../lib/constants.js";
import axios from "axios";
const CAPTCHA_SECRET = "6LdmFWcaAAAAAH0gUIJLIxCbAXFI2JQkylpYP5R3";

export default (req, res) => {
  console.log(req.body);

  const { email, name, forName, phone, subject, message, token } = req.body.newContact;
  //console.log(token);
  //////
  const verifyToken = () => {
    axios
      .post(`https://www.google.com/recaptcha/api/siteverify?secret=${CAPTCHA_SECRET}&response=${token}`, {
        token,
      })
      .then(resp => {
        console.log(resp);
        if (resp.data.success === true) {
          sendMail();
        } else {
          res.send("error recaptcha");
        }
      });
  };

  const sendMail = () => {
    console.log("test sending");
    const transporter = nodemailer.createTransport({
      host: process.env.CONTACT_HOST,
      port: process.env.CONTACT_PORT,
      secure: false,
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD,
      },
    });

    transporter.sendMail(
      {
        from: `${process.env.CONTACT_EMAIL}`,
        to: `${process.env.EMAIL_DESTINATION}`,
        subject: `Nouveau mail de ${email} - Pour le site ${SITE_NAME}`,
        text: `message pour ${SITE_NAME}: 
        
        Prénom : ${forName} 
        Nom : ${name}
        Adresse e-mail : ${email}
        Téléphone : ${phone}
        Objet : ${subject}
  
        
        ${message}`,
      },
      (err, data) => {
        console.log(err);
        console.log(data);

        if (err) {
          // console.log(err);
          res.send(false);
        } else {
          console.log("mail send");
          res.send(true);
        }
      }
    );
  };

  //////

  const bodyVerification = () => {
    // console.log("bodyVerification");
    if (
      VerifLength(email, 3, 40) &&
      VerifLength(name, 3, 40) &&
      VerifLength(forName, 3, 40) &&
      VerifLength(message, 6, 500) &&
      VerifyEmail(email)
    ) {
      verifyToken();
    } else {
      res.end("BAD REQUEST");
    }
  };

  bodyVerification();
};
