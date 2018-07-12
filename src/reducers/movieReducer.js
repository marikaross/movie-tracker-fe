
export const movieReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_MOVIES": 
      return [...state, action.movies];
    case "TOGGLE_FAV": 
      return state.map(movie => (movie.id === action.id ? {...movie, favorite: true} : movie));
    default:
      return state;
  }
}

