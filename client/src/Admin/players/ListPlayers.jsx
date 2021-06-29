import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListPlayers() {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/players/"
      );
      const players = data;

      setPlayers(players);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

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
              {players.map((player) => (
                <tr key={player.id}>
                  <td>{player.id} </td>
                  <td>{`${player.firstname} ${player.lastname}`} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col>
          <Link to={"/admin/addplayers"}>
            <Button> Lägg till spelare</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
