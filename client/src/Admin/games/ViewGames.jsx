import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function ViewGames(props) {
  const [games, setGames] = useState([]);
  const slug = props.match.params.slug;

  const history = useHistory();

  const getGames = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/games/admin/${slug}`
      );
      const games = data;

      setGames([games]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  const deleteGames = async (slug) => {
   
    try {
       await axios.delete(
        `http://localhost:5000/api/games/admin/${slug}`
      );
      alert("success delete")
      history.push("/admin/listgames")
    } catch (err) {
      alert("failed delete")
      console.log("delete err", err.message);
    }
  };

  return (
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>Spelinfo</h1>
          {games.map((game) => (
            <form key={game.id} className="mt-4">
              <div className="mb-3">
                <label htmlFor={game.title} className="form-label">
                  Spel
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={game.title}
                  placeholder={game.title}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor={game.description} className="form-label">
                  Beskrivning
                </label>
                <textarea
                  className="form-control"
                  id={game.description}
                  rows="3"
                  placeholder={game.description}
                  disabled
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor={game.genre} className="form-label">
                  Genre
                </label>
                <select className="form-select" id={game.genre} disabled>
                  <option defaultValue>{game.genre}</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor={game.image_url} className="form-label">
                  Bild
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={game.image_url}
                  placeholder={game.image_url}
                  disabled
                />
              </div>
              <Link to={`/admin/update/${game.url_slug}`}>
                <button type="submit" className="btn btn-primary">
                  Uppdatera
                </button>
              </Link>

              <button
                type="submit"
                onClick={() => deleteGames(slug)}
                className="btn btn-primary ms-4"
              >
                Radera
              </button>
            </form>
          ))}
        </Col>
      </Row>
    </>
  );
}
