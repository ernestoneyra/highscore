import React from "react";
import { useParams, Link } from "react-router-dom";
import Scoreblock2 from "../ScoreBlock2/ScoreBlock2";

export default function GameDetail({ scores, games, homeScore }) {
  const { slug } = useParams();

  const game = games.find((game) => game.url_slug === slug);

console.log('gamedetail', game)
 
  return (
    <>
      <nav className="navbar navbar-dark bg-info d-flex justify-content-center mb-4">
        <span className="navbar-brand mb-0">
          <Link to={"/"}>
            <h1 className="text-white">High Score</h1>
          </Link>
        </span>
      </nav>

      <div className="container">
        <div className=" d-flex">
          <div className="row">
            <h1>{game.title}</h1>
            <p className="">{game.description}</p>
            <p className="">{game.genre}</p>
            <p className="">{game.release_year}</p>
          </div>
          <img className="ms-3 w-50" src={game.image_url} alt={game.title} />
        </div>

        <div className="d-flex justify-content-center">
          <h1>High Scores</h1>
        </div>

        <Scoreblock2 scores={scores} games={games} />
      </div>
    </>
  );
}
//homeScore={homeScore} 