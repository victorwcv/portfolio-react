import { motion } from "framer-motion";
import "../sass/slider-text.scss";

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
    ...position,
    rotate: degree,
  };

  return (
    <motion.div
      className="slider-text no-touch"
      style={style}
      variants={sliderVariants}
      animate="animate"
    >
      {text}
    </motion.div>
  );
};

export default SliderText;
