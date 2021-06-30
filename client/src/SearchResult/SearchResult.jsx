import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/global.css";
import Searchbar from "../SearchBar/Searchbar";

export default function SearchResult(props) {
  const [games, setGames] = useState([]);
  const searchTerm = props.location.search;

  //const filteredPosts = filterPosts(posts, searchQuery);

  console.log("props", props);

  const getGames = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/games/search/${searchTerm}`
      );
      const games = data;

      setGames(games);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  const { search } = window.location;
  console.log(search);

  return (
    <>
      <Navbar className />
      <Container>
     <h1>Sök spel</h1>
     
        <Searchbar />
        <div>
          {games.length < 2 ? (
            <h1>{`Hittade ${games.length} träff på `}</h1>
          ) : (
            <h1>{`Hittade ${games.length} träffar på `}</h1>
          )}
        </div>

        {games.map((game) => (
          <Row key={game.id} className="border p-3 mb-2">
            <Col>
              <p className="h2">{game.title}</p>

              <p className="h5">{game.genre}</p>
            </Col>

            <div className="col-2">
              <img src={game.image_url} alt={game.title}></img>
            </div>
          </Row>
        ))}
      </Container>
    </>
  );
}
