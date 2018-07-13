
export const userReducer = (state={}, action) => {
  debugger
  switch (action.type) {
    case "LOGIN_USER" :
      return action.user;
    default:
      return state;
  }
}
