import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col, Button } from "react-bootstrap";
import "../../styles/global.css";

export default function ListGames() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/games/games");
      const games = data;

      setGames(games);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

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
                <th>Title</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.id}</td>
                  <td>
                    <Link
                      className="black"
                      to={`/admin/games/${game.url_slug}`}
                    >
                      {" "}
                      {game.title}{" "}
                    </Link>
                  </td>
                  <td> {game.genre} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col>
          <Link to={"/admin/addgames"}>
            <Button>Nytt Spel</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
