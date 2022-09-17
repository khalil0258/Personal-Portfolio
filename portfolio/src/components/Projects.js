import React from "react";
import Card from "./Card";
import "./Projects.css";
import desc from "../assets/desc.json";
function Projects() {
  return (
    <div className="container" id="projects">
      <h2 className="section-name">Projects</h2>
      <div className="card-container">
        {Object.entries(desc).map((arr) => (
          <Card image={arr[0]} url={arr[0]} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
