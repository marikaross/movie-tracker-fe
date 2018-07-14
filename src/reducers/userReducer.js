export const userReducer = (state={}, action) => {
  switch (action.type) {
    case "LOGIN_USER" :
      return action.user;
    case "LOG_OUT_USER" :
      return {};
    case "ADD_FAVORITES":
      return {...state, favorites: action.favorites};
    default:
      return state;
  }
}
