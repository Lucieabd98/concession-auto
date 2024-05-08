import "./SuccessMessage.css";

const SuccessMessage = () => {
  return (
    <div className="success-message">
      <div className="confirmation">
        <p>Votre réservation a bien été prise en compte. </p>
        <p>
          Vous serez contacté(e) dans{" "}
          <span className="underline">un délai de 48h.</span>
        </p>
      </div>
      <div className="thanks">
        <p>L'équipe Alfa Romeo vous remercie.</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
