import "./Contact.css";
import ContactTitle from "../ContactTitle/ContactTitle";
import ContactInput from "../ContactInput/ContactInput";
import ContactButton from "../ContactButton/ContactButton";
import axios from "axios";
import { useState } from "react";

const Contact = ({
  setFirstName,
  setLastName,
  setPostalCode,
  setTelephone,
  setCityName,
  postalCode,
  formattedLeasingDuration,
  cleanedPhoneNumber,
  formattedPhoneNumber,
  setIsOpen,
}) => {
  const [activeInputId, setActiveInputId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputFocus = (inputId) => {
    setActiveInputId(inputId);
  };

  // VERIFICATION DU FORMAT DU CODE POSTAL
  const postalCodeRegex = /^[0-9]{5}$/;
  // VERIFICATION DU FORMAT DU NUMERO DE TELEPHONE
  const phoneNumberRegex = /^0[0-9]{9}$/;

  // APPUIE SUR LE BOUTON CONTINUER

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!postalCodeRegex.test(postalCode)) {
      setErrorMessage("Format du code postal incorrect");
    } else if (!phoneNumberRegex.test(cleanedPhoneNumber)) {
      setErrorMessage("Numéro de téléphone non valide");
    } else {
      try {
        console.log("jesuisdanstry");
        const { data } = await axios.get(
          `https://geo.api.gouv.fr/communes?codePostal=${postalCode}`
        );
        setCityName(data[0].nom);
        setIsOpen(true);
        setErrorMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="one-contact-form">
        <ContactTitle title="PRÉNOM" />
        <ContactInput
          placeholder="Écrire"
          setFunction={setFirstName}
          isActive={activeInputId === "firstName"}
          onFocus={() => handleInputFocus("firstName")}
        />
      </div>
      <div className="one-contact-form">
        <ContactTitle title="NOM" />
        <ContactInput
          placeholder="Écrire"
          setFunction={setLastName}
          isActive={activeInputId === "lastName"}
          onFocus={() => handleInputFocus("lastName")}
        />
      </div>
      <div className="one-contact-form">
        <ContactTitle title="CODE POSTAL" />
        <ContactInput
          placeholder="75008"
          setFunction={setPostalCode}
          isActive={activeInputId === "postalCode"}
          onFocus={() => handleInputFocus("postalCode")}
        />
      </div>
      <div className="one-contact-form">
        <ContactTitle title="TÉLÉPHONE" />
        <ContactInput
          placeholder="06 XX XX XX XX"
          setFunction={setTelephone}
          isActive={activeInputId === "telephone"}
          onFocus={() => handleInputFocus("telephone")}
        />
      </div>
      <div className="button-div">
        <p className="error-message">{errorMessage}</p>
        <ContactButton />
      </div>
    </form>
  );
};

export default Contact;
