import React from "react";
import Icon from "../Icon";
import Image from "../Image";

function Thumbnail({ src, alt }) {
  return (
    <div aria-label="thumbnail" className="thumbnail">
      <div className="thumbnail__btn">
        <Icon size={30} name={"icon-play"} />
        <span>Play</span>
      </div>
      <Image src={src} alt={alt} />
    </div>
  );
}

export default Thumbnail;
