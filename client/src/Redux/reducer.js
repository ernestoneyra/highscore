/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const initialState = {
  scores: [],
  games: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "scores/show": {
      const score = action.payload.scores; //har scores som object
      //console.log('action.payload.scores', action.payload.scores)
      const game = action.payload.games;

      const newState = { ...state };

      newState.scores = score;
      newState.games = game;

      //console.log(newState);

      return newState;
    }

    case "score/add": {
      //const score = action.payload.scores; //last is undefined
      const score = action.payload.score;

      //console.log(score);
      const newState = { ...state, scores: [...score] };

      return newState;
    }

    default:
      return state;
  }
}

export async function fetchScores(dispatch, getState) {
  const response = await axios.get("http://localhost:5000/api/scores/");
  const scores = response.data;

  const { data } = await axios.get("http://localhost:5000/api/games/");
  const games = data;

  //const scores = await scores.json()
  dispatch({ type: "scores/show", payload: { scores, games } });
}

export function addScores(score) {
  return async function addScoresThunk(dispatch, getState) {
    // 1: skicka POST-request till backend för att skapa upp produkt
    const response = await fetch("http://localhost:5000/scores/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(score),
    });

    const addedScore = await response.json();

    // 2: dispatcha action till store för att även lägga till produkten där
    dispatch({ type: "score/add", payload: { score: addedScore } });
  };
}
