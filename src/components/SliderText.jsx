import { motion } from "framer-motion";

const SliderText = ({ text, orientation, degree, position, duration }) => {
  const sliderVariants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      ...orientation,

      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: duration,
        staggerChildren: 0.1,
      },
    },
  };

  const style = {
    position: "absolute",
    fontSize: "50vh",
    ...position,
    whiteSpace: "nowrap",
    color: "#ffffff09",
    height: "100%",
    width: "100%",
    fontWeight: "bold",
    rotate: degree,
    zIndex: "1",
  };

  return (
    <motion.div style={style} variants={sliderVariants} animate="animate">
      {text}
    </motion.div>
  );
};

export default SliderText;
