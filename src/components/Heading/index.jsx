import React from "react";

function Heading({ children, size }) {
  switch (size) {
    case 1:
      return <h1 className="heading-l">{children}</h1>;
    case 2:
      return <h2 className="heading-m">{children}</h2>;
    case 3:
      return <h3 className="heading-s">{children}</h3>;
    case 4:
      return <h4 className="heading-xs">{children}</h4>;
    default:
      return <h1 className="heading-l">{children}</h1>;
  }
}

export default Heading;
