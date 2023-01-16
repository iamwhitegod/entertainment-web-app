import { Box } from "@mui/material";
import React from "react";
import TrendingCard from "../TrendingCard";

function TrendingList({ movies }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={3}
    >
      {movies &&
        movies.map((movie, index) => (
          <TrendingCard key={index} movie={movie} />
        ))}
    </Box>
  );
}

export default TrendingList;
