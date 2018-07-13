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

export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
})

export const signUpUser = (name, email, password) => ({
  type: "SIGN_UP_USER",
  name,
  email,
  password
})

export const logOut = () => ({
  type: "LOG-OUT"

})