import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

import data from ".././../data.json";
import { filtered } from "../utils/helpers";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getMovies = () => data.filter((movie) => movie?.category === "Movie");
    const movies = getMovies();

    setMovies(movies);
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);

    const res = filtered(movies, e.target.value);
    setSearch(res);
  };

  return (
    <Main>
      <Box gridColumn="1 / -1">
        <SearchBar
          type={"text"}
          name={"search"}
          id={"search"}
          placeholder={"Search for movies"}
          value={searchQuery}
          onChange={handleChange}
        />
      </Box>

      {(search && searchQuery && (
        <Box display="flex" flexDirection="column" gap={5}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Heading
              size={1}
            >{`Found ${search.length} results for ‘${searchQuery}’`}</Heading>
            <MoviesList movies={search} />
          </Box>
        </Box>
      )) || (
        <Box display="flex" flexDirection="column" gap={5}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Heading size={1}>Movies</Heading>
            <MoviesList movies={movies} />
          </Box>
        </Box>
      )}
    </Main>
  );
}

export default Movies;
