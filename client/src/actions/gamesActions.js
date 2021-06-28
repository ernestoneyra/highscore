import axios from "axios";


export const updatGames = (games) => async (dispatch, getState) => {
    dispatch({ type: "Games_UPDATE_REQUEST", payload: games });
    try {
      const { data } = await axios.put(`/api/games/${games.url_slug}`, games, {
        headers: { "Content-Type": "application/json" },
      });
      dispatch({ type: "Games_UPDATE_SUCCESS", payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: "Games_UPDATE_FAIL", error: message });
    }
  };