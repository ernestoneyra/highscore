const initialState = {
    scores: [],
    games: [],
  };

export const gamesListReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
        case "score/add": {
            //const score = action.payload.scores; //last is undefined
            const score = action.payload.score;
            console.log('score', score)
            //console.log(score);
            const newState = { ...state, 
          scores: [...score] };
      
          console.log('scores added', state.scores)
         
          console.log('newState', newState) //the new score becomes an array of all the scores. 8th score becomes and array of the old and new one
         
            
      
            return newState;
            
          }
      
          default:
            return state;
  }};