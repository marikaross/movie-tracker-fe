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

export const signUpUser = (name, email, password) => ({
  type: "SIGN_UP_USER",
  name,
  email,
  password
});

export const logOutUser = () => ({
  type: "LOG_OUT_USER"
});

export const populateUserFavs = (favorites) => ({
  type: "POPULATE_USER_FAVS",
  favorites
});

export const deleteLocalFav = (movieId) => ({
  type: "DELETE_LOCAL_FAV",
  movieId
});

export const addLocalFav = (movie) => ({
  type: "ADD_LOCAL_FAV",
  movie
});
