import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

import data from ".././../data.json";

function Bookmarked() {
  const [bookmarkedMovies, setBookmarkedMovies] = useState(null);
  const [bookmarkedTVseries, setBookmarkedTVseries] = useState(null);

  useEffect(() => {
    const getBookmarked = (type) =>
      data.filter(
        (movie) => movie?.category === type && movie?.isBookmarked === true
      );
    const bookmarkedMovies = getBookmarked("Movie");
    const bookmarkedTVseries = getBookmarked("TV Series");

    setBookmarkedMovies(bookmarkedMovies);
    setBookmarkedTVseries(bookmarkedTVseries);
  }, []);

  return (
    <Main>
      <Box gridColumn="1 / -1">
        <SearchBar
          type={"text"}
          name={"search"}
          id={"search"}
          placeholder={"Search for bookmarked shows"}
        />
      </Box>

      <Box display="flex" flexDirection="column">
        <Box>
          <Heading size={1}>Bookmarked Movies</Heading>
          <MoviesList movies={bookmarkedMovies} />
        </Box>

        <Box>
          <Heading size={1}>Bookmarked TV Series</Heading>
          <MoviesList movies={bookmarkedTVseries} />
        </Box>
      </Box>
    </Main>
  );
}

export default Bookmarked;
