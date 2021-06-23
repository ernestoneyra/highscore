import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function AddPlayers() {
  return (
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>Lägg till spelare</h1>
          <form>
            <div class="mb-3">
              <label htmFor="firstname" class="form-label">
                Förnamn
              </label>
              <input type="text" class="form-control" id="firstname" />
            </div>
            <div class="mb-3">
              <label htmFor="lastname" class="form-label">
                Efternamn
              </label>
              <input type="text" class="form-control" id="lastfirstname" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
