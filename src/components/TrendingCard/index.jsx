import { Box } from "@mui/material";
import React from "react";
import Dot from "../Dot";
import Heading from "../Heading";
import Icon from "../Icon";
import Thumbnail from "../Thumbnail";

function TrendingCard({ movie }) {
  return (
    <Box position={"relative"}>
      <Thumbnail src={movie.thumbnail.regular.medium} alt={movie.title} />

      <Box position={"absolute"} bottom={"12px"} left={"12px"}>
        <Box display={"flex"} gap={1.5} alignItems="center">
          <span className="desc-s opacity-[75%]">{movie?.year}</span>
          <Dot />
          <Box display="flex" gap={1} alignItems="center">
            <Icon name="icon-nav-movies" size={16} />
            <span className="desc-s opacity-[75%]">{movie?.category}</span>
          </Box>
          <Dot />
          <span className="desc-s opacity-[75%]">{movie?.rating}</span>
        </Box>

        <Box>
          <Heading size={4}>{movie.title}</Heading>
        </Box>
      </Box>
    </Box>
  );
}

export default TrendingCard;
