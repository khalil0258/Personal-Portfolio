import React from "react";
import "./HeroMenu.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function HeroMeu() {
  return (
    <div className="HeroMenu container">
      <div className="mainContainer">
        <p>Welcome</p>
        <h1>I'M HADJAZ IBRAHIM</h1>
        <h4>
          I'm <span>Web Developer</span> || <span>Web Designer</span>
        </h4>
        <div className="btn-holder">
          <button>HIRE ME</button>
          <div className="iconsHold">
            <span>
              {" "}
              <FaGithub />
            </span>
            <span>
              {" "}
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </div>
      <div className="blur"></div>
      <div className="blur2"></div>
    </div>
  );
}

export default HeroMeu;
