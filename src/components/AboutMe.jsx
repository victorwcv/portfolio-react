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
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

const logos = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "JavaScript_(ES6)", icon: faJs },
  { name: "ReactJS", icon: faReact },
  { name: "Node.js", icon: faNode },
  { name: "SASS", icon: faSass },
  { name: "Git", icon: faGitAlt },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "Node_Package_Manager", icon: faNpm },
];

const AboutMe = () => {
  const variants = {
    initial: {
      x: 500,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="about-me">
      <SliderText
        text="Innovative!"
        degree={90}
        position={{ left: "-40%", top: "55%" }}
        orientation={{ y: "-200%" }}
        duration={10}
      />
      <motion.div
        className="wrapper-am"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="container-am">
          <motion.div className="pf-container" variants={variants}>
            <img src="/public/images/pf.png" alt="Profile Picture" />
          </motion.div>
          <motion.div className="content-am" variants={variants}>
            <h1>About Me</h1>
            <p>
              Hello, I'm Victor, soon-to-be graduate of the MIT xPRO
              Professional Certificate Program in Full Stack Development.
              Excited to finish this transformative journey! Proficient in
              JavaScript, Node.js, React, and MongoDB, I bring a dedication to
              technical excellence and a passion for innovation. Eager to apply
              my skills to challenging projects and contribute to your team's
              success with creative web solutions.
            </p>
            <button>
              {" "}
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </button>
          </motion.div>
        </div>
        <motion.div className="shields" variants={variants}>
          {
            logos.map(logo => 
              (<FontAwesomeIcon key={logo.name} title={logo.name} size="5x" className="shield" icon={logo.icon} />)

            )
          }
          {/* <FontAwesomeIcon size="5x" icon={faCss3Alt} />
          <FontAwesomeIcon size="5x" icon={faSquareJs} />
          <FontAwesomeIcon size="5x" icon={faReact} />
          <FontAwesomeIcon size="5x" icon={faNode} />
          <FontAwesomeIcon size="5x" icon={faSass} />
          <FontAwesomeIcon size="5x" icon={faNpm} />
          <FontAwesomeIcon size="5x" icon={faGitAlt} />
          <FontAwesomeIcon size="5x" icon={faBootstrap} /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
