import React from "react";
import skils from "../assets/skils.json";
import "./skils.css";
import Marquee from "react-fast-marquee";

function Skils() {
  return (
    <div className="container">
      <div className="skils-container ">
        <Marquee direction="right" speed={100} delay={5} gradient={false}>
          {" "}
          {skils?.map((el, index) => (
            <h4 key={index}>{el}</h4>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skils;
