import React, { useState } from "react";
import Icon from "../Icon";
import Image from "../Image";

function Bookmark({ src, alt }) {
  const [selected, setSelected] = useState(false);

  return (
    <div aria-label="bookmark " className="bookmark relative">
      <div
        onClick={() => setSelected(!selected)}
        className={`bookmark__icon ${selected ? "active" : ""}`}
      >
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <Image src={src} alt={alt} />
    </div>
  );
}

export default Bookmark;
