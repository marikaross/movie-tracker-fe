export const userReducer = (state={}, action) => {
  switch (action.type) {
    case "LOGIN_USER" :
      return action.user;
    case "LOG_OUT_USER" :
      return {};
    default:
      return state;
  }
}
