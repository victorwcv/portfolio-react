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

  const items = ["Homepage", "About_me", "My_Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.toLowerCase()}`}
          key={item.toLowerCase()}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          {item.replace(/_/, " ")}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;
