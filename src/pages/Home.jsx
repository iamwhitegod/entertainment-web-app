import React, { lazy, useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

import { Box } from "@mui/material";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import Main from "../layouts/Main";
import TrendingList from "../components/TrendingList";

import { filtered } from "../utils/helpers";
import { useMovie } from "../contexts/movie";

function Home() {
  const { movies, trending } = useMovie();

  const [search, setSearch] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
        <Box
          display="flex"
          flexDirection="column"
          gap={5}
          className="overflow-hidden"
        >
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
