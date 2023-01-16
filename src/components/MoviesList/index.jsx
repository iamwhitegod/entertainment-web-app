import { Box } from "@mui/material";
import React from "react";
import MovieCard from "../MovieCard";

function MoviesList({ movies }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(255px, 1fr))"
      gap={3}
    >
      {movies &&
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
    </Box>
  );
}

export default MoviesList;
