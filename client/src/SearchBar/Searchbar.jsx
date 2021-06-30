import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Searchbar() {
  const [title, setTitle] = useState("");

  return (
    <>
      <Col>
        <form>
          <div className="input-group justify-content-center mb-3">
            <div className="form-outline col-5">
              <input
                type="search"
                id="search"
                className="form-control"
                placeholder="Search"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <Link to={`/search/?q=${title}`}>
              <Button type="submit" className="btn btn-primary">
                <i className="fas fa-search"></i>
              </Button>
            </Link>
          </div>
        </form>
      </Col>
    </>
  );
}
