import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container" id="about">
      <div className="AboutSection">
        <div className="right">
          <h2 className="section-name">About Me</h2>
          <p>
            Hi , My name is Brahim , I have bachelor degree in Computer sience
            and More than 2 Years in experience with building web application !
            with a lot of projects built and this experience I can be the right
            person for your needs ! I care a lot about the user experience while
            using the app !
          </p>
        </div>
        <div className="left">
          <div className="left-hold"></div>

          <img src={require("../assets/about.jpg")} alt="about image" />
        </div>
      </div>
    </div>
  );
}

export default About;
