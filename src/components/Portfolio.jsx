import { useState, useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import "../sass/portfolio.scss";
import SliderText from "./SliderText";
import projects from "../data/projects.js";

const Project = ({ project }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 150]);

  return (
    <section id={project.id === 1 ? "my_projects" : null}>
      <div className="container">
        <div className="wrapper">
          <div className="img-container" ref={ref}>
            <img src={project.imgUrl} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
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
          </motion.div>
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
