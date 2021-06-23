
import Scoreblock from "../Scoreblock/Scoreblock";



const HighScore = ({ score}) => {
  return (
    <div className="">
      <Scoreblock  score={score}/>
    </div>
  );
};

export default HighScore;
