import React from "react";
import "./HeroMenu.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
function HeroMeu({ setter }) {
  const refer = document.getElementById("footer");
  const scrollto = () => {
    setter(true);
  };
  return (
    <div className="HeroMenu container" id="main">
      <div className="mainContainer">
        <p>Welcome</p>
        <h1>I'M HADJAZ IBRAHIM</h1>
        <h4>
          I'm <span>Web Developer</span> || <span>Web Designer</span>
        </h4>
        <div className="btn-holder">
          <button onClick={scrollto}>HIRE ME</button>
          <div className="iconsHold">
            <span>
              {" "}
              <a href="https://github.com/khalil0258" target="_blank">
                <FaGithub />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/brahim-khalil-hadjaz-2193951a3/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
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
