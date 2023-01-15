import React from "react";

function InputField({ type, name, placeholder, id, errorMessage }) {
  return (
    <fieldset className="bg-none border-none flex items-center relative">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="inputfield"
      />

      {errorMessage && <span className="error__message">{errorMessage}</span>}
    </fieldset>
  );
}

export default InputField;
