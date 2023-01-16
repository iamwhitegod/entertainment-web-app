import React from "react";

function Button({ className, children, type }) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
