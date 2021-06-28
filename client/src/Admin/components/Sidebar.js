import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "../../styles/global.css";

export default function Sidebar() {
  return (
    <>
      <div className="back vh-100 pt-3 container-fluid  col-lg-9 col-sm-12 col-md-12 col-xl-7 col-xxl-6 m-0">
        <Col>
          <h1 className="mb-4">Spelare</h1>
          <Row>
            <div className="col-1">
              <img src="./cute.jpg" alt="player"></img>
            </div>
            <div className="col-5 mb-1">
              <Link to={"/admin/listplayers"} className="black">
                <h5>Lista spelare</h5>
              </Link>
            </div>
          </Row>
          <Row>
            <div className="col-1">
              <img src="./cute.jpg" alt="player"></img>
            </div>
            <div className="col mb-5">
              <Link to={"/admin/addplayers"} className="black">
                <h5>Lägg till spelare</h5>
              </Link>
            </div>
          </Row>
        </Col>
        <Col>
          <h1 className="mb-4">Spel</h1>
          <Row>
            <div className="col-1">
              <img src="./cute.jpg" alt="game"></img>
            </div>
            <div className="col-5 mb-1">
              <Link to={"/admin/listgames"} className="black">
                <h5>Lista spel</h5>
              </Link>
            </div>
          </Row>


          

          <Row>
            <div className="col-1">
              <img src="./cute.jpg" alt="game"></img>
            </div>
            <div className="col-5 mb-5">
              <Link to={"/admin/addgames"} className="black">
                <h5>Lägg till spel</h5>
              </Link>
            </div>
          </Row>
        </Col>
        <Col>
          <h1 className="mb-4">Highscores</h1>
          <Row>
            <div className="col-1">
              <img src="./cute.jpg" alt="highscore"></img>
            </div>
            <div className="col-5 mb-1">
              <Link to={"/admin/listhighscore"} className="black">
                <h5>Lista highscore</h5>
              </Link>
            </div>
          </Row>
          <Row>
            <div className="col-1">
              <img src="./cute.jpg" alt="highscore"></img>
            </div>
            <div className="col-6 mb-5">
              <Link to={"/admin/addhighscore"} className="black">
                <h5>Lägg till highscore</h5>
              </Link>
            </div>
          </Row>
        </Col>
      </div>
    </>
  );
}
