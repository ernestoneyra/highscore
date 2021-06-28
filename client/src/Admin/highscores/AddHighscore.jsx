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
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>Lägg till highscore</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="game" class="form-label">
                Spel
              </label>
              <select class="form-select" id="game">
                <option selected>Välj spel</option>
                <option value="1">Tetris</option>
                <option value="2">Donkey Kong</option>
                <option value="3">Asteroids</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="player" class="form-label">
                Spelare
              </label>
              <select class="form-select" id="player">
                <option selected>Välj spelare</option>
                <option value="1">John Doe</option>
                <option value="2">Jane Doe</option>
              </select>
            </div>

            <div class="mb-3">
              <label htmlFor="date" class="form-label">
                Datum
              </label>
              <input
                type="text"
                class="form-control"
                id="date"
                placeholder="Ange datum"
              />
            </div>

            <div class="mb-3">
              <label htmlFor="points" class="form-label">
                Poäng
              </label>
              <input
                type="text"
                class="form-control"
                id="points"
                placeholder="Ange poäng"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Lägg till
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
}
