export const addMovies = (movies) => ({
  type: "ADD_MOVIES",
  movies
});

export const toggleFav = (id) => {
  type: "TOGGLE_FAV",
  id
};

export const toggleFilter = () => {
  type: "TOGGLE_FILTER"
};