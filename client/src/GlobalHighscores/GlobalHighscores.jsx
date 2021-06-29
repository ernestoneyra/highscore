import { Link } from "react-router-dom";
import '../styles/global.css'

const GlobalHighscores = ({ scores, games }) => {
  const sortedHighscores = games.map((game) =>
    scores
      .filter((highscore) => highscore.url_slug === game.url_slug)
      .sort((a, b) => b.highscore.localeCompare(a.highscore))
  ); 






  return (
    <div>
      {sortedHighscores.map((score, index) => (
        <div key={index} className="border p-3 mb-2">
          <Link to={`/games/${score[0].url_slug}`}>
            <p className="h4">{score[0].url_slug}</p>
          </Link>
          <div>
            {score[0].fullname}, {score[0].date}
            <p className="float-end">{score[0].highscore} p</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalHighscores;
