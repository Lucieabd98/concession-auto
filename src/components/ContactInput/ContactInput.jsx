import "./ContactInput.css";
import { useState, useEffect } from "react";

const ContactInput = ({
  placeholder,
  setFunction,
  verifyPostalCode,
  isActive,
  onFocus,
}) => {
  const handleChange = (event) => {
    setFunction(event.target.value);
  };

  return (
    <div>
      <input
        className={isActive ? "active" : ""}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={onFocus}
      />
    </div>
  );
};

export default ContactInput;
