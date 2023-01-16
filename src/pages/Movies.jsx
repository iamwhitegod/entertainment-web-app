import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

import data from ".././../data.json";
function Movies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = () => data.filter((movie) => movie?.category === "Movie");
    const movies = getMovies();

    setMovies(movies);
  }, []);

  return (
    <Main>
      <Box gridColumn="1 / -1">
        <SearchBar
          type={"text"}
          name={"search"}
          id={"search"}
          placeholder={"Search for movies"}
        />
      </Box>

      <Box display="flex" flexDirection="column">
        <Box>
          <Heading size={1}>Movies</Heading>
          <MoviesList movies={movies} />
        </Box>
      </Box>
    </Main>
  );
}

export default Movies;
