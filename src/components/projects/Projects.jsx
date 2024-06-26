import React from "react";
import "./projects.css";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">What I have learned</span>
      <div className="projects__container container grid">
        <Project />
      </div>
    </section>
  );
};

export default Projects;
