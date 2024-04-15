import "../sass/hero.scss";
import { motion } from "framer-motion";
import SliderText from "./SliderText";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 1.5, repeat: Infinity },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="no-touch" variants={textVariants}>
            VICTOR CCANCHI
          </motion.h2>
          <motion.h1 className="no-touch" variants={textVariants}>
            Junior Fullstack Developer with a Senior Mindset
          </motion.h1>
          <motion.div className="buttons-container" variants={textVariants}>
            <a href="#my_projects"> See my Work</a>

            <a href="#contact">Contact Me</a>
            <motion.img
              className="no-touch"
              src="/scroll_1.png"
              alt=""
              variants={textVariants}
              animate="scrollButton"
            />
          </motion.div>
        </motion.div>
        <div className="image-container no-touch">
          <img fetchpriority="high" src="/fullstack2.webp" alt="Me, myself and I." />
        </div>
      </div>
      <SliderText
        text="Creative!"
        position={{ top: "30%", left: "30%" }}
        orientation={{ x: "-80%" }}
        duration={10}
      />
    </div>
  );
};

export default Hero;
