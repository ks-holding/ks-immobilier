import Layout from "../components/general/layout/layout.js";
import { useInView } from "react-intersection-observer";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, forwardRef, useState } from "react";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';


const Costuminput = forwardRef(({ value, onClick }, ref) => {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={value}
          onClick={onClick}
          readOnly
          ref={ref}
        />
        <div className="input-group-append" onClick={onClick}>
          <span className="input-group-text">
            <FaCalendarAlt />
          </span>
        </div>
      </div>
    );
});

export default function Services() {
    const [selecthours, setSelecthours] = useState([]);
    const [heuredispo, setHeuredispo] = useState([]);
    const [day, setDay] = useState("1");
    const [month, setMonth] = useState("1");
    const [year, setYear] = useState("2024");
    const [selectedDate, setSelectedDate] = useState("");
    const [showReservationForm, setShowReservationForm] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const form = useRef(null);
    const sectionRef = useRef(null);
  
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [phone, setPhone] = useState("");
  
  
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();


    const [nomError, setNomError] = useState("");
    const [prenomError, setPrenomError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("title");
    const [modalDescription, setModalDescription] = useState("description");
    const [modalStatus, setModalStatus] = useState(null);
    
    const reservationReussiePopup = () => {
      window.alert("La réservation a été réussie! l'un de nos agents vous contactera dans le plus brefs délais");
    };
  
    const isDateValid1 =
      parseInt(year, 10) > currentYear ||
      (parseInt(year, 10) === currentYear &&
        parseInt(month, 10) > currentMonth) ||
      (parseInt(year, 10) === currentYear &&
        parseInt(month, 10) === currentMonth &&
        parseInt(day, 10) >= currentDay);
  
        const handleHoursChange = (e) => {
          // Utilisez la propriété "selectedOptions" pour obtenir les options sélectionnées
          const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
          setSelecthours(selectedOptions);
        };
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
  
      const dateObject = new Date(date);
      const day = dateObject.getDate();
      const month = dateObject.getMonth() + 1;
      const year = dateObject.getFullYear();
      setDay(day);
      setMonth(month);
      setYear(year);
    };
  
  // ...
  
  const sendEmail = (e) => {
    e.preventDefault();

    setNomError("");
    setPrenomError("");
    setPhoneError("");
    setEmailError("");

    let isValid = true;
    if (!nom) {
      setNomError("Le champ nom est requis.");
      isValid = false;
    }
    if (!prenom) {
      setPrenomError("Le champ prénom est requis.");
      isValid = false;
    }
    if (!phone) {
      setPhoneError("Le champ numéro de téléphone est requis.");
      isValid = false;
    }
    if (!email) {
      setEmailError("Le champ adresse e-mail est requis.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const newContact = { nom, prenom, email, phone, day, month, year, selecthours };
    Axios.post("api/sendreservation", { newContact }).then(data => {
      setNom("");
      setEmail("");
      setPhone("");
      setPrenom("");

      if (data.data === true) {
        setModalTitle("Message transmis !");
        setModalDescription("Notre équipe va vous répondre dans les plus brefs délais.");
        setModalStatus("success");
        setModalOpen(true);
      } else {
        setModalTitle("L'envoi a échoué !");
        setModalDescription("Veuillez vérifier vos champs avant de soumettre le formulaire.");
        setModalStatus("failed");
        setModalOpen(true);
      }
    });
  };
  
  
  const disponible = () => {
    Axios.post("https://ks-immo-back.vercel.app/disponible", {
      selectedDay: day,
      selectedMonth: month,
      selectedYear: year,
    })
      .then((response) => {
        console.log(response.data);
        setHeuredispo(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la vérification de la disponibilité de la date :",
          error
        );
      });
  };
  
  const actualiserdispo = () => {
    setNomError("");
    setPrenomError("");
    setPhoneError("");
    setEmailError("");

  // Vérifiez que tous les champs requis sont remplis
  if (!nom || !prenom || !phone || !email) {
    // Mettez à jour les messages d'erreur pour chaque champ manquant
    if (!nom) {
      setNomError("Le champ nom est requis.");
    }
    if (!prenom) {
      setPrenomError("Le champ prénom est requis.");
    }
    if (!phone) {
      setPhoneError("Le champ numéro de téléphone est requis.");
    }
    if (!email) {
      setEmailError("Le champ adresse e-mail est requis.");
    }
    // Arrêtez le processus de réservation car tous les champs requis ne sont pas remplis
    return;
  }
    Axios.post("https://ks-immo-back.vercel.app/actualiserdispo", {
      selectedDay: day,
      selectedMonth: month,
      selectedYear: year,
      heuredispo: selecthours
    })
      .then(() => {
        reservationReussiePopup(); // Afficher la popup lors de la réussite de la réservation
        setShowReservationForm(false);
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la vérification de la disponibilité de la date :",
          error
        );
      });
  };
  
  // ...
  
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
      
    //   setShowReservationForm(false);
    //   setName("");
    //   setEmail("");
    // };

  return (
    <Layout
      title="Réservation des salles"
      description=""
    >
      <section id="services" ref={sectionRef}> {/* Attacher la référence */}
        <div className="container">
        <div className="employees">
        <div className="dates-container">
          <h2>Choisissez la date de réservation de la salle ?</h2>
          <div id="date-picker-container">
            <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            customInput={<Costuminput value={selectedDate} onClick={handleDateChange} />}
            dateFormat="dd/MM/yyyy"
          />
          </div>
          
          {console.log(isDateValid1)}
          {selectedDate && !isDateValid1 && (
          <p style={{color:'red'}}>Veuillez choisir une date valide.</p>
        )}
          {isDateValid1 && (
            <>
              <button  id="reservation-button" onClick={disponible}>
                Voir les disponibilités
              </button>
              <h2 style={{marginBottom:"20px"}}>Les heures disponibles :</h2>
            <select
              name="hours"
              id="hours-select"
              value={selecthours}  // Assurez-vous de définir la valeur correcte ici
              onChange={handleHoursChange}
              multiple  // Ajoutez l'attribut "multiple" pour permettre la sélection multiple
            >
              {heuredispo &&
                heuredispo.map((val, index) => (
                  <option key={index} value={val.heure}>
                    {val.heure}
                  </option>
                ))}
            </select>
            <button onClick={() => {
                if (selecthours.length > 0) {
                  setShowReservationForm(true);
                } else {
                  window.alert("Veuillez sélectionner au moins une heure.");
                }
              }}>
                Réserver
              </button>
              {showReservationForm && (
                <div id="formulaire-resrvation">
                  <h2>Formulaire de Réservation</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Date de reservation:</label>
                    <input
                      type="text"
                      name="date"
                      value={`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year} : ${selecthours}`}
                      readOnly
                    />
                    <br></br>
                    <label htmlFor="nom">Votre nom:</label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                    <span style={{color: "red"}}>{nomError}</span>
                    <br></br>
                    <label htmlFor="prenom">Votre prénom:</label>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                    <span style={{color: "red"}}>{prenomError}</span>
                    <br></br>
                    <br></br>
                    <label htmlFor="phone">Numéro de téléphone:</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <span style={{color: "red"}}>{phoneError}</span>
                    <br></br>
                    <label htmlFor="email">Adresse e-mail:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span style={{color: "red"}}>{emailError}</span>
                    <button style={{marginTop:"20px"}} onClick={actualiserdispo}>Valider la réservation</button>
                  </form>
                </div>
              )}
            </>
          )}
          <div className="dates"></div>
          <div></div>
        </div>
      </div>

          
          
        </div>
        
      </section>
      
    </Layout>
  );
}