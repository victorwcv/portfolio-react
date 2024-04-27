import { useState, useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import "../sass/portfolio.scss";
import projects from "../data/projects.js";
import ProjectSlider from "./ProjectSlider.jsx";

const Project = ({ project }) => {
  return (
    <section id={project.id === 1 ? "my_projects" : null}>
      <div className="container">
        <div className="wrapper">
          <ProjectSlider images={project.imgUrl} />
          <div className="text-container">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="button-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="shields">
              {project.shields.map((shield, index) => {
                return <img key={index} src={shield} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progress-bar"
        ></motion.div>
      </div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;
