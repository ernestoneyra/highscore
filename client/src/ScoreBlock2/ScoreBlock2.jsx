import { useParams } from "react-router-dom";

const Scoreblock2 = ({ scores }) => {
  const { slug } = useParams();
  //const game = games.find((game) => game.urlSlug === slug);
  //const score = homeScore.filter((score) => score.urlSlug === slug);
  const scoress = scores.filter((score) => score.url_slug === slug);

  //const combined = [...score, ...scoress];

  const sortedScores = scoress.sort((a, b) =>
    b.highscore.localeCompare(a.highscore)
  );

  console.log("scoreblock", sortedScores);

  return (
    <div className="d-flex row">
      <div>
        {sortedScores.map((score) => (
          <div key={score.id} className="border p-3 mb-2">
            <div className="mt-2">
              <strong>{`${score.firstname} ${score.lastname}`} </strong>,{" "}
              {score.date}
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
