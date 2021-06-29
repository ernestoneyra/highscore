import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function AddGames() {
  //////////////GENRE/////////////////////
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/genre/");
      const genres = data;

      setGenres(genres);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);
  ///////////////////////////////////////////////


  const [title, setTitle] = useState("");
  const [release_year, setRelease_year] = useState("")
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [image_url, setImage_url] = useState("");

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/games/`, {
        title,
        release_year,
        description,
        genre,
        image_url,
      })
      .then(() => {
        alert("successful post");
        history.push("/admin/listgames");
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
          <h1>Lägg till Spel</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Titel
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Ange titel"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="release_year" className="form-label">
                Året spelet släptes
              </label>
              <input
                type="text"
                className="form-control"
                id="release_year"
                placeholder="Ange år"
                value={release_year}
                onChange={(e) => setRelease_year(e.target.value)}
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
                {genres.map((genre) => (
                  <option type="text" key={genre.id}>
                    {genre.genre}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Bild
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                placeholder="Ange URL"
                value={image_url}
                onChange={(e) => setImage_url(e.target.value)}
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
