import { createContext, useContext, useEffect, useState } from "react";
import data from "../../data.json";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(data);
  const [trending, setTrending] = useState(null);
  const [bookmarked, setBookmarked] = useState(null);

  useEffect(() => {
    const getTrending = () =>
      movies.filter((movie) => movie?.isTrending === true);

    const getBookmarked = () =>
      movies.filter((movie) => movie?.isBookmarked === true);

    const marked = getBookmarked();
    const trending = getTrending();

    setTrending(trending);
    setBookmarked(marked);
  }, []);

  const addToBookmarked = (movie) => {
    movie.isBookmarked = true;
    setBookmarked((prev) => [...prev, movie]);
    console.log(bookmarked);
  };

  const removeFromBookmarked = (movie) => {
    movie.isBookmarked = false;
    const newBookMarked = bookmarked.filter((mov) => mov.title !== movie.title);
    setBookmarked((prev) => [...newBookMarked]);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        trending,
        bookmarked,
        addToBookmarked,
        removeFromBookmarked,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
