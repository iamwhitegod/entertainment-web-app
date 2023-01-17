import { Box } from "@mui/material";
import React from "react";
import Bookmark from "../Bookmark";
import Dot from "../Dot";
import Heading from "../Heading";
import Icon from "../Icon";

function MovieCard({ movie }) {
  return (
    <Box display={"flex"} flexDirection="column" gap={0.6}>
      <Bookmark
        src={movie.thumbnail.regular.medium}
        alt={movie.title}
        isBookmarked={movie.isBookmarked}
      />

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
  );
}

export default MovieCard;
