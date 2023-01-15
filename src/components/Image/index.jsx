import React from "react";

function Image({ src, alt, width, height }) {
  return (
    <div
      aria-label="image wrapper"
      className={`max-w-[100%] h-[100%] rounded-lg overflow-hidden`}
    >
      <img
        src={src}
        alt={alt}
        className="w-[100%] h-[100%] object-cover object-center"
      />
    </div>
  );
}

export default Image;
