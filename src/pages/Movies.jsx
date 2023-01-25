import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

import { filtered } from "../utils/helpers";
import { useMovie } from "../contexts/movie";

function Movies() {
  const { movies } = useMovie();

  const [movieCategory, setMovieCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getMovieCategory = () =>
      movies.filter((movie) => movie?.category === "Movie");
    const results = getMovieCategory();

    setMovieCategory(results);
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
            <MoviesList movies={movieCategory} />
          </Box>
        </Box>
      )}
    </Main>
  );
}

export default Movies;
