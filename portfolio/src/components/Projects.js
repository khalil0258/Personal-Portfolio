import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="container">
      <h2 className="section-name">Projects</h2>
      <div className="card-container">
        <Card image="insta clone" url="insta clone" />
        <Card image="tesla clone" url="tesla clone" />
        <Card image="linkedin clone" url="linkedin clone" />
        <Card image="slack clone" url="slack clone" />
        <Card image="gallery project" url="gallery project" />
        <Card image="color picker" url="color picker" />
        <Card image="portfolio" url="portfolio" />
      </div>
    </div>
  );
}

export default Projects;
