import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [isHover, setIsHover] = useState({});

  const socialIconsLinks = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/victor-ccanchi/",
      icon: faLinkedin,
    },
    { name: "Github", link: "https://github.com/victorwcv", icon: faGithub },
    {
      name: "E-mail",
      link: "mailto:victorccv@gmail.com",
      icon: faEnvelope,
    },
  ];

  const variantes = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const handleMouseEnter = (name) => {
    setIsHover({ ...isHover, [name]: true });
  };

  const handleMouseLeave = (name) => {
    setIsHover({ ...isHover, [name]: false });
  };

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="tittle no-touch"
          variants={variantes}
          initial="initial"
          animate="animate"
        >
          professional portfolio
        </motion.span>
        <motion.div className="social">
          {socialIconsLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={() => handleMouseLeave(item.name)}
              variants={variantes}
              initial="initial"
              animate="animate"
            >
              <FontAwesomeIcon
                size="2x"
                shake={isHover[item.name]}
                icon={item.icon}
                title={item.name}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
