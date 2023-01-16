import React, { lazy, useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

import { Box } from "@mui/material";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import Main from "../layouts/Main";
import TrendingList from "../components/TrendingList";

import data from ".././../data.json";

function Home() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    const getTrending = () =>
      data.filter((movie) => movie?.isTrending === true);
    const trending = getTrending();

    setTrending(trending);
  }, []);

  return (
    <Main>
      <Box gridColumn="1 / -1">
        <SearchBar
          type={"text"}
          name={"search"}
          id={"search"}
          placeholder={"Search for movies or TV series"}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box>
          <Heading size={1}>Trending</Heading>
          <TrendingList movies={trending} />
        </Box>

        <Box>
          <Heading size={1}>Recommended</Heading>
          <MoviesList movies={data} />
        </Box>
      </Box>
    </Main>
  );
}

export default Home;
