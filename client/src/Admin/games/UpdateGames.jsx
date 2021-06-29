import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function UpdateGames(props) {
  const slug = props.match.params.url_slug;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [image_url, setImage_Url] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //Submit
    axios
      .put(`http://localhost:5000/api/games/${slug}`, {
        title,
        genre,
        description,
        image_url,
      })
      .then(() => {
        alert("successful put");
      });
  };

  ///////////GAMES/////////////////////////
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/games/${slug}`
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
  /////////////////////////////////////////

  return (
    <>
      <Navbar />
      <Row>
        <Col className="col-4">
          <Sidebar />
        </Col>
        <Col className="col-6">
          <h1>Uppdatera spel</h1>

          <form className="mt-4" onSubmit={submitHandler}>
            {games.map((game) => (
              <>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Spel
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder={game.title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Beskrivning
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    placeholder={game.description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <select
                    className="form-select"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option defaultValue>Välj genre</option>
                    <option type="text">{game.genre}</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="image_url" className="form-label">
                    Bild
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image_url"
                    placeholder={game.image_url}
                    value={image_url}
                    onChange={(e) => setImage_Url(e.target.value)}
                  />
                </div>
              </>
            ))}

            <button type="submit" className="btn btn-primary">
              Spara
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
}
