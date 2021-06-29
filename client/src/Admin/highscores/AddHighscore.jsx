import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
//import { addScores } from "../../Redux/reducer";
//import { useDispatch } from "react-redux";

export default function AddHighscore() {
  ///const dispatch = useDispatch();

  ////PLAYERS////////////
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/players/");
      const players = data;

      setPlayers(players);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  /////////////////////////////////////////

  ///////////GAMES/////////////////////////
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/games/");
      const games = data;

      setGames(games);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getGames();
  }, []);
  /////////////////////////////////////////

  //////////////////SCORES///////////////////
  const history = useHistory();

  const [game, setGame] = useState("");
  const [fullname, setFullname] = useState("");
  const [date, setDate] = useState("");
  const [highscore, setHighscore] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/scores/`, {
        game,
        fullname,
        date,
        highscore,
      })
      .then(() => {
        //alert("successful post");
        history.push("/admin/listhighscore");
      });
  };
  //////////////////////////////////////////



  return (
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>Lägg till highscore</h1>
          <form onSubmit={submitHandler}>

            <div className="mb-3">
              <label htmlFor="game" className="form-label">
                Spel
              </label>
              <select
                className="form-select"
                id="game"
                value={game}
                onChange={(e) => setGame(e.target.value)}
              >
                <option defaultValue>Välj spel</option>
                {games.map((gameTitle) => (
                  <option key={gameTitle.id}>{`${gameTitle.title}`}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="player" className="form-label">
                Spelare
              </label>
              <select
                className="form-select"
                id="player"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              >
                <option defaultValue>Välj spelare</option>
                {players.map((player) => (
                  <option type="text" key={player.id}>
                    {`${player.fullname}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Datum
              </label>
              <input
                type="text"
                className="form-control"
                id="date"
                placeholder="Ange datum"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="points" className="form-label">
                Poäng
              </label>
              <input
                type="text"
                className="form-control"
                id="points"
                placeholder="Ange poäng"
                value={highscore}
                onChange={(e) => setHighscore(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Lägg till
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
}
