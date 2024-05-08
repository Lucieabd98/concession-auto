import "./Modale.css";

const Modale = ({ setIsOpen, cityName, handleSubmitForm }) => {
  return (
    <div className="dark">
      <div className="centered">
        <div className="modale">
          <h5>
            Confirmation de votre ville pour la récupération du véhicule :
          </h5>
          <p className="city-name">{cityName}</p>
          <div className="buttons-modale">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="button-modify"
            >
              MODIFIER
            </button>
            <button className="button-submit-form" onClick={handleSubmitForm}>
              CONTINUER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modale;
