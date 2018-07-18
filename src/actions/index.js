export const addMovies = (movies) => ({
  type: "ADD_MOVIES",
  movies
});

export const toggleFilter = () => ({
  type: "TOGGLE_FILTER"
});

export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
});

export const logOutUser = () => ({
  type: "LOG_OUT_USER"
});

export const populateUserFavs = (favorites) => ({
  type: "POPULATE_USER_FAVS",
  favorites
});

export const deleteLocalFav = (movie_id) => ({
  type: "DELETE_LOCAL_FAV",
  movie_id
});

export const addLocalFav = (movie_id) => ({
  type: "ADD_LOCAL_FAV",
  movie_id
});
