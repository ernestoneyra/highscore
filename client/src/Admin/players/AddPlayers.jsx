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
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Förnamn
              </label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Efternamn
              </label>
              <input type="text" className="form-control" id="lastfirstname" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
