export const filtered = (data, query) => data.filter((movie) =>
  movie?.title.toLowerCase().includes(query.toLowerCase())
);