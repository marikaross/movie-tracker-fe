export const userReducer = (state={}, action) => {
  switch (action.type) {
    case "LOGIN_USER" :
      return action.user;
    case "LOG_OUT_USER" :
      return {};
    case "POPULATE_USER_FAVS":
      return {...state, favorites: action.favorites};
    case "ADD_LOCAL_FAV":
      const newFavs = [...state.favorites, action.movie_id];
      return {...state, favorites: newFavs};
    case "DELETE_LOCAL_FAV":
      const updatedFavs = state.favorites.filter(movie_id => (
        movie_id !== action.movie_id)
      );
      return {...state, favorites: updatedFavs};
    default:
      return state;
  }
};