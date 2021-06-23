import { useParams } from "react-router-dom";

const Scoreblock2 = ({ scores, homeScore, games }) => {
  const { slug } = useParams();
  //const game = games.find((game) => game.urlSlug === slug);
  //const score = homeScore.filter((score) => score.urlSlug === slug);
  const scoress = scores.filter((score) => score.urlSlug === slug);

  //const combined = [...score, ...scoress];

  const sortedScores = scoress.sort((a, b) =>
    b.highscore.localeCompare(a.highscore)
  );


  return (
    <div className="d-flex row">
      <div>
        {sortedScores.map((score) => (
          <div key={score.highscore} className="border p-3 mb-2">
            <div className="mt-2">
              {score.player}, {score.date}
              <p className="float-end">{score.highscore} p</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreblock2;

//, {score.urlSlug}