import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListHighscore() {
  return (
    <>
      <Navbar />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <h1>Highscores</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Spel</th>
                <th>Spelare</th>
                <th>Datum</th>
                <th>Poäng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td>Spel</td>
                <td>Spelare</td>
                <td>Datum</td>
                <td>Poäng</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col>
          <Link to={'/admin/addplayers'}>
          <Button> Nytt Highscore</Button>
         
          </Link>
         
        </Col>
      </Row>
    </>
  );
}
