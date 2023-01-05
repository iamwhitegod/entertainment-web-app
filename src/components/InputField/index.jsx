import React from "react";

function InputField({ type, name, placeholder, id, className }) {
  return (
    <fieldset className="bg-none border-b-[1px] flex items-center">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="bg-[transparent] font-light flex-grow text-pureWhite px-4 py-5 border-b-greyishBlue border-solid focus:border-b-pureWhite focus:outline-none placeholder:text-pureWhite placeholder:opacity-[0.5] placeholder:font-light"
      />
    </fieldset>
  );
}

export default InputField;
