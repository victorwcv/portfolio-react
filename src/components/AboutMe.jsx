import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color, motion, useInView } from "framer-motion";
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
  { name: "HTML", icon: faHtml5, color: '#e74c25' },
  { name: "CSS", icon: faCss3Alt, color: '#026db4' },
  { name: "JavaScript_(ES6)", icon: faJs, color: '#ebca33' },
  { name: "ReactJS", icon: faReact, color: "#5ed3f3" },
  { name: "Node.js", icon: faNode, color: '#6aa65d' },
  { name: "SASS", icon: faSass, color: "#d95898" },
  { name: "Git", icon: faGitAlt, color: "#f65031" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7f1af5" },
  { name: "Node_Package_Manager", icon: faNpm , color: "#b84042"},
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
      y: 0,
      opacity: 1,
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
              (<FontAwesomeIcon key={logo.name} title={logo.name} size="5x" style={{color:logo.color}} className="shield" icon={logo.icon} />)

            )
          }
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
