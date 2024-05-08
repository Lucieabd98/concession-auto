import "./FormChoice.css";

const FormChoice = ({ choice, setChoiceFunction }) => {
  return (
    <button
      onClick={() => {
        setChoiceFunction(choice);
      }}
    >
      {choice}
    </button>
  );
};

export default FormChoice;
