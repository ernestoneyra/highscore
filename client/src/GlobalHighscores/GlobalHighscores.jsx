import { Link } from "react-router-dom";
import '../styles/global.css'

const GlobalHighscores = ({ scores, games }) => {
  /* const sortedHighscores = games.map((game) =>
    scores
      .filter((highscore) => highscore.urlSlug === game.urlSlug)
      .sort((a, b) => b.highscore.localeCompare(a.highscore))
  ); */






  return (
    <div>
      {scores.map((score, index) => (
        <div key={index} className="border p-3 mb-2">
          <Link to={`/games/${score.url_slug}`}>
            <p className="h4">{score.url_slug}</p>
          </Link>
          <div>
            {score.firstname} {score.lastname}, {score.date}
            <p className="float-end">{score.highscore} p</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalHighscores;
