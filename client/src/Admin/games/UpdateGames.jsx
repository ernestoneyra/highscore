import React, { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";

export default function UpdateGames(props) {
  const slug = props.match.params.url_slug;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //const [genre, setGenre] = useState("");
  const [image_url, setImage_Url] = useState("");

  /*

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
  }, []); */

  const submitHandler = (e) => {
    e.preventDefault();
    //Submit
    axios.put(`http://localhost:5000/api/games/${slug}`, {
      title,
      description,
      
      image_url,
    }).then(() => {
      alert('successful post')
    })
    
  };

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
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Spel
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder=""
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
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select className="form-select" id="genre">
                <option defaultValue>Välj genre</option>
                <option value="1">Puzzel</option>
                <option value="2">Shooter</option>
                <option value="3">Platform</option>
                <option value="4">Adventure</option>
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
                placeholder=""
                value={image_url}
                onChange={(e) => setImage_Url(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary ms-4">
              Spara
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
}
