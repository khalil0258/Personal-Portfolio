import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ image, url }) {
  return (
    <Link
      to={`project/${image}`}
      style={{ textDecoration: "none", color: "black" }}
      className="card"
    >
      <div className="imageHolder">
        <img src={require(`../assets/${image}/1.png`)} alt={url} />
        <div className="overlay">
          <h3>{image}</h3>
        </div>
      </div>
      <div className="desc">
        <p>About</p>
        <span>
          <FaLongArrowAltRight />
        </span>
      </div>
    </Link>
  );
}

export default Card;
