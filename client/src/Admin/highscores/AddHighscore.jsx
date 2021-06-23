import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function AddHighscore() {
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
              <label htmFor="date" class="form-label">
                Datum
              </label>
              <input type="text" class="form-control" id="date" placeholder="Ange datum" />
            </div>

            <div class="mb-3">
              <label htmFor="points" class="form-label">
               Poäng
              </label>
              <input type="text" class="form-control" id="points" placeholder="Ange poäng" />
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
