const initialState = {
    scores: [],
    games: [],
  };

  

export const gamesListReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
        case "scores/show": {
            const score = action.payload.scores; //har scores som object
            //console.log('action.payload.scores', action.payload.scores)
            const game = action.payload.games;
      
            const newState = { ...state};
      
             newState.scores = score;
            newState.games = game;  
      
            //console.log(newState);
      
            console.log("games invoked", action.payload.scores);
            return state;
          }
      default:
        return state;
    }
  };