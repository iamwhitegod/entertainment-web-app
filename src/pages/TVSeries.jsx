import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

import data from ".././../data.json";

function TVSeries() {
  const [tvseries, setTvseries] = useState(null);

  useEffect(() => {
    const getTVseries = () =>
      data.filter((movie) => movie?.category === "TV Series");
    const tvseries = getTVseries();

    setTvseries(tvseries);
  }, []);
  return (
    <Main>
      <Box gridColumn="1 / -1">
        <SearchBar
          type={"text"}
          name={"search"}
          id={"search"}
          placeholder={"Search for TV series"}
        />
      </Box>

      <Box display="flex" flexDirection="column">
        <Box>
          <Heading size={1}>TVSeries</Heading>
          <MoviesList movies={tvseries} />
        </Box>
      </Box>
    </Main>
  );
}

export default TVSeries;
