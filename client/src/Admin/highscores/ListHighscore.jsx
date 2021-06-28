import React, { useEffect, useState } from "react";
import axios from 'axios'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListHighscore() {
  const [scores, setScores] = useState([]);

  const getScores = async () => {
    try {
      const {data} = await axios.get("http://localhost:5000/api/scores/scores");
      const scores = data
      //const scores = await response.json();

      setScores(scores);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getScores();
  }, []);

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
              {scores.map((score) => (
                <tr key={score.id}>
                  <td>{score.id} </td>
                  <td>{score.game} </td>
                  <td>{`${score.firstname} ${score.lastname}`} </td>
                  <td>{score.date} </td>
                  <td>{score.highscore} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col>
          <Link to={"/admin/addplayers"}>
            <Button> Nytt Highscore</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
