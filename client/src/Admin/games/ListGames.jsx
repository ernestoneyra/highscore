import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListGames() {
  return (
    <>
      <Navbar />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <h1>Spel</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Namn</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td>Namn</td>
                <td>Genre</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col>
          <Link to={'/admin/addgames'}>
          <Button>Nytt Spel</Button>
          </Link>
         
        </Col>
      </Row>
    </>
  );
}
