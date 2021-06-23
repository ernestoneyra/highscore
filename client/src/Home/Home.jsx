import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import GlobalHighscores from "../GlobalHighscores/GlobalHighscores";

const Home = ({ scores, games }) => {
  return (
    <div>
      <Navbar />
      <Link to={"/new"}>
        <p className="text-center">Register High Score</p>
      </Link>
      <div className="container ">
        <GlobalHighscores scores={scores} games={games} />
      </div>
    </div>
  );
};

export default Home;
