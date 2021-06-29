import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function AddPlayers() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    const fullname = firstname + " " + lastname
    
    axios
      .post(`http://localhost:5000/api/players/`, {
        firstname,
        lastname,
        fullname,
        email,
      })
      .then(() => {
        //alert("successful post");
        history.push('/admin/listplayers')
      });
     
  };

  return (
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>Lägg till spelare</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                Förnamn
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder=""
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Efternamn
              </label>
              <input
                type="text"
                className="form-control"
                id="lastfirstname"
                placeholder=""
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
