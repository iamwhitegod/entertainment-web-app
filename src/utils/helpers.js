export const filtered = (dataArr, query) => dataArr.filter((movie) =>
  movie?.title.toLowerCase().includes(query.toLowerCase())
);