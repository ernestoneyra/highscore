 export const gamesUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case "Games_UPDATE_REQUEST":
        return { loading: true };
      case "Games_UPDATE_SUCCESS":
        return { loading: false, success: true };
      case "Games_UPDATE_FAIL":
        return { loading: false, error: action.payload };
      case "Games_UPDATE_RESET":
        return {};
      default:
        return state;
    }
  };