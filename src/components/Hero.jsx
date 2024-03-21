import "../sass/hero.scss";
import { motion } from "framer-motion";

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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      staggerChildren: 0.1,
    },
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
            <motion.button variants={textVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
            <motion.img
              src="../../public/images/scroll_1.png"
              alt=""
              variants={textVariants}
              animate="scrollButton"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="sliding-text-container"
        variants={sliderVariants}
        animate="animate"
      >
        Creative...
      </motion.div>
      <div className="image-container">
        <img src="../../public/images/hero.png" alt="Me, myself and I." />
      </div>
    </div>
  );
};

export default Hero;
