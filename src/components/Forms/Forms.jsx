import "./Forms.css";
import FormQuestion from "../FormQuestion/FormQuestion";
import FormChoice from "../FormChoice/FormChoice";
import { useState } from "react";
import formatLeasingDuration from "../../utils/formatLeasingDuration";
import formatPhoneNumber from "../../utils/formatedPhoneNumber";
import Contact from "../Contact/Contact";
import Modale from "../Modale/Modale";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import axios from "axios";

const Form = () => {
  const [typeModel, setTypeModel] = useState("");
  const [interest, setInterest] = useState("");
  const [stateModel, setStateModel] = useState("");
  const [duration, setDuration] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cityName, setCityName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);

  // Changement du format de la durée du leasing
  const formattedLeasingDuration = formatLeasingDuration(duration);

  // Changement du format du numéro de téléphone
  const cleanedPhoneNumber = telephone.replace(/\D/g, "");
  const formattedPhoneNumber = formatPhoneNumber(cleanedPhoneNumber);

  const handleSubmitForm = async () => {
    try {
      const response = await axios.post(
        "https://hooks.zapier.com/hooks/catch/16422019/37w62x0?em=l.abadia@orange.fr",
        {
          data: {
            type_modele: typeModel,
            achat_ou_leasing: interest,
            vehicule_neuf_ou_location: stateModel,
            duree_leasing: formattedLeasingDuration,
            nom: lastName,
            prenom: firstName,
            ville: cityName,
            telephone: formattedPhoneNumber,
          },
        }
      );
      console.log(response);
      setIsOpen(false);
      setIsFormSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      {typeModel === "" && (
        <>
          <FormQuestion question="Quel est le type de modèle que vous souhaitez tester?" />
          <FormChoice choice="COMPACTE" setChoiceFunction={setTypeModel} />
          <FormChoice choice="SUV" setChoiceFunction={setTypeModel} />
          <FormChoice
            choice="ELECTRIQUE & HYBRIDE"
            setChoiceFunction={setTypeModel}
          />
          <FormChoice choice="SPORTIVE" setChoiceFunction={setTypeModel} />
        </>
      )}
      {typeModel !== "" && interest === "" && (
        <>
          <FormQuestion question="Vous êtes intéressé par ?" />
          <FormChoice choice="UN ACHAT" setChoiceFunction={setInterest} />
          <FormChoice choice="UN LEASING" setChoiceFunction={setInterest} />
        </>
      )}
      {interest === "UN ACHAT" && stateModel === "" ? (
        <>
          <FormQuestion question="Pour quel type de véhicule ?" />
          <FormChoice choice="NEUF" setChoiceFunction={setStateModel} />
          <FormChoice choice="OCCASION" setChoiceFunction={setStateModel} />
        </>
      ) : (
        interest === "UN LEASING" &&
        duration === "" && (
          <>
            <FormQuestion question="Pour quelle durée ?" />
            <FormChoice choice="6 MOIS" setChoiceFunction={setDuration} />
            <FormChoice choice="12 MOIS" setChoiceFunction={setDuration} />
            <FormChoice choice="18 MOIS" setChoiceFunction={setDuration} />
            <FormChoice choice="24 MOIS" setChoiceFunction={setDuration} />
          </>
        )
      )}
      {((typeModel !== "" && interest !== "" && stateModel !== "") ||
        duration !== "") &&
        !isFormSent && (
          <>
            <FormQuestion question="Vos coordonnées" />
            <Contact
              setFirstName={setFirstName}
              setLastName={setLastName}
              setPostalCode={setPostalCode}
              setTelephone={setTelephone}
              setCityName={setCityName}
              postalCode={postalCode}
              formattedLeasingDuration={formattedLeasingDuration}
              cleanedPhoneNumber={cleanedPhoneNumber}
              formattedPhoneNumber={formattedPhoneNumber}
              setIsOpen={setIsOpen}
            />
          </>
        )}
      {isOpen && !isFormSent && (
        <Modale
          setIsOpen={setIsOpen}
          cityName={cityName}
          handleSubmitForm={handleSubmitForm}
        />
      )}
      {isFormSent && <SuccessMessage />}
    </div>
  );
};

export default Form;
