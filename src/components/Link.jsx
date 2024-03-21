import { motion } from "framer-motion";

const Link = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.25,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  return (
    
    <motion.div className="links" variants={variants}>
      {items.map(item => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;
