import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function AddGames() {
  return (
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>Lägg till Spel</h1>
          <form>

            <div class="mb-3">
              <label htmFor="title" class="form-label">
                Titel
              </label>
              <input type="text" class="form-control" id="title" placeholder="Ange titel"/>
            </div>

            <div class="mb-3">
              <label htmlFor="description" class="form-label">
                Beskrivning
              </label>
              <textarea
                class="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-3">
            <label htmlFor="genre" class="form-label">
                Genre
              </label>
              <select class="form-select" id="genre">
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
              <input type="text" class="form-control" id="image" placeholder="Ange URL" />
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
