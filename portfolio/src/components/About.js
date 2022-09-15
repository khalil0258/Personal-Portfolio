import React from "react";
import "./About.css";

function About() {
  return (
    <div className="AboutSection container ">
      <div className="right">
        <h2 className="section-name">About Me</h2>
        <p>
          {" "}
          loremLaborum fugiat consequat excepteur sint tempor labore Lorem Lorem
          magna amet ipsum qui. Elit amet officia deserunt magna do enim. Enim
          minim occaecat et eu reprehenderit. Ullamco veniam proident dolor id
          pariatur i{" "}
        </p>
      </div>
      <div className="left">
        <div className="left-hold"></div>
        <img src={require("../assets/about.jpg")} alt="" />
      </div>
    </div>
  );
}

export default About;
