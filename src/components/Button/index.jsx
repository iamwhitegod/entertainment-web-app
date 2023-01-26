import React from "react";

function Button({ className, children, type, ...others }) {
  return (
    <button type={type} className={className} {...others}>
      {children}
    </button>
  );
}

export default Button;
