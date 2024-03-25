import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import "../sass/about-me.scss";
import SliderText from "./SliderText";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJs,
  faNode,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

const logos = [
  { name: "HTML", icon: faHtml5, color: "#e74c25" },
  { name: "CSS", icon: faCss3Alt, color: "#026db4" },
  { name: "JavaScript_(ES6)", icon: faJs, color: "#ebca33" },
  { name: "ReactJS", icon: faReact, color: "#5ed3f3" },
  { name: "Node.js", icon: faNode, color: "#6aa65d" },
  { name: "SASS", icon: faSass, color: "#d95898" },
  { name: "Git", icon: faGitAlt, color: "#f65031" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7f1af5" },
  { name: "Node_Package_Manager", icon: faNpm, color: "#b84042" },
];

const AboutMe = ({ anchoViewport }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: anchoViewport > 600 ? 500 : 200,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="about-me">
      <SliderText
        text="Dreamer!"
        degree={90}
        position={{ left: "-40%", top: "60%" }}
        orientation={{ y: "-150%" }}
        duration={10}
      />
      <motion.div
        ref={ref}
        className="wrapper-am"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <div className="container-am">
          <motion.div className="pf-container no-touch" variants={variants}>
            <img src="/pf.png" alt="Profile Picture" />
          </motion.div>
          <motion.div className="content-am" variants={variants}>
            <h1 className="no-touch">About Me</h1>
            <p className="no-touch">
              Hello, I'm Victor, soon-to-be graduate of the MIT xPRO
              Professional Certificate Program in Full Stack Development.
              Excited to finish this transformative journey! Proficient in
              JavaScript, Node.js, React, and MongoDB, I bring a dedication to
              technical excellence and a passion for innovation. Eager to apply
              my skills to challenging projects and contribute to your team's
              success with creative web solutions.
            </p>
            <a
              className="button-resume"
              href="/resume-victor-ccanchi-en.pdf"
              download={true}
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </motion.div>
        </div>
        <motion.div className="shields" variants={variants}>
          {logos.map((logo) => (
            <FontAwesomeIcon
              key={logo.name}
              title={logo.name}
              size="5x"
              style={{ color: logo.color }}
              className="shield"
              icon={logo.icon}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
