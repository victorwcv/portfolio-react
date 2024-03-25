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
          <motion.h2 variants={textVariants}>VICTOR CCANCHI</motion.h2>
          <motion.h1 variants={textVariants}>
            Junior Fullstack Developer with a Senior Mindset
          </motion.h1>
          <motion.div className="buttons-container" variants={textVariants}>
            
            <a href="#my_projects"> <button >See my Work </button></a>
            
             <a href="#contact"><button >Contact Me</button></a>
            <motion.img
              src="/scroll_1.png"
              alt=""
              variants={textVariants}
              animate="scrollButton"
            />
          </motion.div>
        </motion.div>
      </div>
      <SliderText
        text="Creative!"
        position={{ top: "30%", left: "30%" }}
        orientation={{ x: "-80%" }}
        duration={10}
      />
      <div className="image-container">
        <img src="/hero.png" alt="Me, myself and I." />
      </div>
    </div>
  );
};

export default Hero;
