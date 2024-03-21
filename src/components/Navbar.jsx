import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [isHover, setIsHover] = useState({
  });

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
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.4 }}
        >
          Personal Portfolio
        </motion.span>
        <div className="social">
          {socialIconsLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={() => handleMouseLeave(item.name)}
            >
              <FontAwesomeIcon
                size="2x"
                beat={isHover[item.name]}
                icon={item.icon}
                title={`Go to ${item.name}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
