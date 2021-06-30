import Navbar from "../Navbar/Navbar";
import GlobalHighscores from "../GlobalHighscores/GlobalHighscores";
import { Container, Col } from "react-bootstrap";
import Searchbar from "../SearchBar/Searchbar";

const Home = ({ scores, games }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Searchbar />
        <Col>
          <GlobalHighscores scores={scores} games={games} />
        </Col>
      </Container>
    </>
  );
};

export default Home;
