import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

import { filtered } from "../utils/helpers";
import { useMovie } from "../contexts/movie";

function Bookmarked() {
  const { bookmarked } = useMovie();

  const [bookmarkedMovies, setBookmarkedMovies] = useState(null);
  const [bookmarkedTVseries, setBookmarkedTVseries] = useState(null);

  const [search, setSearch] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getBookmarkedType = (type) =>
      bookmarked.filter(
        (movie) => movie?.category === type && movie?.isBookmarked === true
      );
    const bookmarkedMovies = getBookmarkedType("Movie");
    const bookmarkedTVseries = getBookmarkedType("TV Series");

    setBookmarkedMovies(bookmarkedMovies);
    setBookmarkedTVseries(bookmarkedTVseries);
  }, [bookmarked]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);

    const res = filtered(
      [...bookmarkedMovies, ...bookmarkedTVseries],
      e.target.value
    );
    setSearch(res);
  };

  return (
    <Main>
      <Box gridColumn="1 / -1">
        <SearchBar
          type={"text"}
          name={"search"}
          id={"search"}
          placeholder={"Search for bookmarked shows"}
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
          {bookmarkedMovies?.length > 0 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <Heading size={1}>Bookmarked Movies</Heading>
              <MoviesList movies={bookmarkedMovies} />
            </Box>
          )}

          {bookmarkedTVseries?.length > 0 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <Heading size={1}>Bookmarked TV Series</Heading>
              <MoviesList movies={bookmarkedTVseries} />
            </Box>
          )}
        </Box>
      )}
    </Main>
  );
}

export default Bookmarked;
