import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function ViewGames() {
  return (
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>View Games</h1>
          <form>

            <div class="mb-3">
              <label htmFor="title" class="form-label">
                Titel
              </label>
              <input type="text" class="form-control" id="title" placeholder="Tetris" disabled/>
            </div>

            <div class="mb-3">
              <label htmlFor="description" class="form-label">
                Beskrivning
              </label>
              <textarea
                class="form-control"
                id="description"
                rows="3"
                placeholder="Example text of games description"
                disabled
              ></textarea>
            </div>

            <div className="mb-3">
            <label htmlFor="genre" class="form-label">
                Genre
              </label>
              <select class="form-select" id="genre" disabled>
              <option selected>Välj genre</option>
              <option value="1">Puzzel</option>
              <option value="2">Action</option>
              <option value="3">Shoot 'em up</option>
              <option value="3">Äventyr</option>
              <option value="3">Plattform</option>
            </select>
            </div>
            
            <div class="mb-3">
              <label htmFor="image" class="form-label">
                Bild
              </label>
              <input type="text" class="form-control" id="image" placeholder="Ange URL" disabled/>
            </div>

            <button type="submit" class="btn btn-primary">
              Uppdatera
            </button>
            <button type="submit" class="btn btn-primary ms-4">
              Radera
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
}
