import React from "react";

import sprite from "../../../src/assets/sprite.svg";

function Icon({ name, color, size }) {
  return (
    <svg width={size} height={size} className="icon">
      <use xlinkHref={`${sprite}#${name}`}></use>
    </svg>
  );
}

export default Icon;

{
  /* <svg class="icon">
<use xlink:href="#icon-bookmark-empty"></use>
</svg><svg class="icon">
<use xlink:href="#icon-bookmark-full"></use>
</svg><svg class="icon">
<use xlink:href="#icon-category-tv"></use>
</svg><svg class="icon">
<use xlink:href="#icon-nav-home"></use>
</svg><svg class="icon">
<use xlink:href="#icon-nav-movies"></use>
</svg><svg class="icon">
<use xlink:href="#icon-nav-tv-series"></use>
</svg><svg class="icon">
<use xlink:href="#icon-play"></use>
</svg><svg class="icon">
<use xlink:href="#icon-search"></use>
</svg><svg class="icon">
<use xlink:href="#logo"></use>
</svg> */
}
