import { Box } from "@mui/material";
import React from "react";
import TrendingCard from "../TrendingCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function TrendingList({ movies }) {
  return (
    <Box className="overflow-x-scroll scrollbar-thin scrollbar-track-semiDarkBlue scrollbar-thumb-greyishBlue scrollbar-thumb-rounded-md scroll-smooth snap-x snap-mandatory scroll-pl-4">
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(5, minmax(390px, 1fr))",
          md: "repeat(5, minmax(470px, 1fr))",
        }}
        gap={3}
      >
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        > */}
        {movies &&
          movies.map((movie, index) => (
            // <SwiperSlide key={index}>
            <TrendingCard key={index} movie={movie} />
            // </SwiperSlide>
          ))}
        {/* </Swiper> */}
      </Box>
    </Box>
  );
}

export default TrendingList;
