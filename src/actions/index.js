export const addMovies = (movies) => ({
  type: "ADD_MOVIES",
  movies
});

export const toggleFav = (id) => ({
  type: "TOGGLE_FAV",
  id
});

export const toggleFilter = () => ({
  type: "TOGGLE_FILTER"

});

export const logIn = (email, password) => {
  type: "LOG_IN",
  email,
  password
}

export const signUpUser = (name, email, password) => {
  type: "SIGN_UP_USER",
  name,
  email,
  password
}

export const logOut = () => {
  type: "LOG-OUT"

}
