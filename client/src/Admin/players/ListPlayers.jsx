import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListPlayers() {
  return (
    <>
      <Navbar />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <h1>Spelare</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Namn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td>Namn</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col>
          <Link to={'/admin/addplayers'}>
          <Button> Lägg till spelare</Button>
         
          </Link>
         
        </Col>
      </Row>
    </>
  );
}
