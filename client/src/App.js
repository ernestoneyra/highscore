import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import {  useEffect } from "react";
import React from "react";
import Home from "./Home";
//import RegHighscore from "./RegHighscore";
import "bootstrap/dist/css/bootstrap.min.css";
import GameDetail from "./GameDetail/GameDetail";
import { connect } from "react-redux";
import AdminScreen from "./Admin/AdminScreen";
//import ListPlayers from "./Admin/players/AdminListPlayers";
import ListPlayers from "./Admin/players/ListPlayers";
import AddPlayers from "./Admin/players/AddPlayers";
import ListGames from "./Admin/games/ListGames";
import AddGames from "./Admin/games/AddGames";
import ViewGames from "./Admin/games/ViewGames";
import UpdateGames from "./Admin/games/UpdateGames";
import AddHighscore from "./Admin/highscores/AddHighscore";
import ListHighscore from "./Admin/highscores/ListHighscore";

if (module.hot) {
  module.hot.accept();
}

const App = (props) => {
  /*  let scores = useSelector(state => state.scores);
  let games = useSelector(state => state.games); */



  return (
    <>
      <Router>
        <Switch>
        {/*   <Route exact path="/new">
            <RegHighscore scores={props.scores} />
          </Route> */}
          <Route path="/games/:slug">
            <GameDetail scores={props.scores} games={props.games} />
          </Route>

          <Route path="/admin/listplayers" component={ListPlayers} />
          <Route path="/admin/addplayers" component={AddPlayers} />
          <Route path="/admin/listgames" component={ListGames} />
          <Route path="/admin/addgames" component={AddGames} />
          <Route path="/admin/viewgames" component={ViewGames} />
          <Route path="/admin/updategames" component={UpdateGames} />
          <Route path="/admin/addhighscore" component={AddHighscore} />
          <Route path="/admin/listhighscore" component={ListHighscore} />
          <Route exact path="/admin" component={AdminScreen} />

          <Route path="/">
            <Home scores={props.scores} games={props.games} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

function mapStateToProps(state) {
  const { scores } = state;
  const { games } = state;

  return { scores, games };
}

export default connect(mapStateToProps)(App);

//homeScore={homeScore}  till gamedetail
/* onRegister={addScore} */
