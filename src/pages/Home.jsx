import React, { lazy, useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

import { Box } from "@mui/material";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import Main from "../layouts/Main";
import TrendingList from "../components/TrendingList";

import data from ".././../data.json";
import { filtered } from "../utils/helpers";

function Home() {
  const [trending, setTrending] = useState(null);
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getTrending = () =>
      data.filter((movie) => movie?.isTrending === true);
    const trending = getTrending();

    setTrending(trending);
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
          placeholder={"Search for movies or TV series"}
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
            <Heading size={1}>Trending</Heading>
            <TrendingList movies={trending} />
          </Box>

          <Box display="flex" flexDirection="column" gap={2}>
            <Heading size={1}>Recommended</Heading>
            <MoviesList movies={movies} />
          </Box>
        </Box>
      )}
    </Main>
  );
}

export default Home;
