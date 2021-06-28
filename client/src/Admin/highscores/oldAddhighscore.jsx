import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {addScores} from '../../Redux/reducer'
import { useDispatch } from "react-redux";

export default function AddHighscore() {
  const dispatch = useDispatch();

  const history = useHistory();

  //const [game, setGame] = useState("");
  const [player, setPlayer] = useState("");
  const [date, setDate] = useState("");
  const [highscore, setHighscore] = useState("");
  const [url_slug, setUrl_slug] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Ett tips är att i handleSubmit, inte bara skicka en post till servern, utan att även lägga till score till din score state som du har sedan innan
    //Så uppdaterar du servern, och uppdaterar det lokala, utan att behöva skicka ett onödigt get request till servern

    //Allt från formuläret regisreras här

    //setGame("");
    setPlayer("");
    setDate("");
    setHighscore("");

    //Byter sida till startsidan
    history.push("/");

    let score = {
      player,
      date,
      highscore,
      url_slug,
    };

    dispatch(addScores(score));
  };
  return (
    <div>
    <nav className="navbar navbar-dark bg-info d-flex justify-content-center mb-4">
      <span className="navbar-brand mb-0">
        <h1>Register High Score</h1>
      </span>
    </nav>
    <form className="container" method="POST" action="/scores">
      <label className="mb-2" htmlFor="game">
        Game:
      </label>

      <select
        className="form-select"
        id="urlSlug game"
        onChange={(e) => {
          //setGame(e.target.value);
          setUrl_slug(e.target.value);
        }}
      >
        <option value="Choose game">Choose Game...</option>
        <option value="tetris" name="game">Tetris</option>
        <option value="pacman" name="game">Pacman</option>
        <option value="asteroids" name="game">Asteroids</option>
      </select>

      <label className="mb-2" htmlFor="player">
        Player:
      </label>
      <input
        type="text"
        name="player"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
        id="player"
        className="form-control"
      />
      <label className="mb-2" htmlFor="date">
        Date:
      </label>
      <input
        type="text"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        id="date"
        className="form-control"
      />
      <label className="mb-2" htmlFor="score">
        Score:
      </label>
      <input
        type="text"
        name="score"
        value={highscore}
        onChange={(e) => setHighscore(e.target.value)}
        id="score"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Submit
      </button>
      <Link to={"/"}>
        <button className="btn btn-info mt-2 ms-2">Back</button>
      </Link>
    </form>
  </div>
  );
}
