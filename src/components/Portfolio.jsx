import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../sass/portfolio.scss";
import SliderText from "./SliderText";

const Portfolio = ({ anchoViewport }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationActiveR, setAnimationActiveR] = useState(false);
  const [animationActiveL, setAnimationActiveL] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const slides = [
    {
      title: "App de Autenticación de usuarios",
      description: `Construida con el stack MERN (MongoDB, Express, React y Node.js), mi aplicación ofrece una experiencia de autenticación robusta y escalable, con estilos cuidadosamente diseñados utilizando Tailwind CSS para una apariencia atractiva y consistente.`,
      imgUrl: "/auth.webp",
      githubLink: "https://github.com/victorwcv/App-de-autenticacion-con-MERN",
      deployLink: "https://app-de-autenticacion-con-mern.onrender.com",
    },
    {
      title: "Project React",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non voluptas soluta laborum ipsam fuga libero est tenetur temporibus vero minus, qui quam quibusdam nemo. Sapiente illum quasi dolorem cupiditate?`,
      imgUrl: "/under-construction.webp",
      githubLink: "#",
      deployLink: "#",
    },
    {
      title: "Project Fullstack 1",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore quaerat, nulla quisquam quidem adipisci natus ipsum voluptates, laborum reprehenderit ullam facere earum alias sed in, dolore obcaecati explicabo iste.`,
      imgUrl: "/under-construction.webp",
      githubLink: "#",
      deployLink: "#",
    },
    {
      title: "Project Fullstack 2",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore quaerat, nulla quisquam quidem adipisci natus ipsum voluptates, laborum reprehenderit ullam facere earum alias sed in, dolore obcaecati explicabo iste.`,
      imgUrl: "/under-construction.webp",
      githubLink: "#",
      deployLink: "#",
    },
  ];

  const handleNext = () => {
    setAnimationActiveR(true);
    setTimeout(() => {
      setAnimationActiveR(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    },350);
  };

  const handlePrev = () => {
    setAnimationActiveL(true);
    setTimeout(() => {
      setAnimationActiveL(false);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }, 350);
  };

  const variants = {
    initial: {
      x: anchoViewport > 600 ? -500 : -200,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const miniatureVariants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: anchoViewport < 738 ? 1 : 0.5,
    },
    animate: {
      x: anchoViewport < 738 ? "-56.5%" : "-220%",
      y: anchoViewport < 738 ? "-170%" : 0,
      scale: anchoViewport < 738 ? 2.1 : 3.1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const miniatureVariantsB = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: anchoViewport < 738 ? 1 : 0.5,
    },
    animate: {
      x: anchoViewport < 738 ? "56.5%" : "220%",
      y: anchoViewport < 738 ? "-170%" : 0,
      scale: anchoViewport < 738 ? 2.1 : 3.1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const descriptionVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="portfolio">
      <motion.div
        ref={ref}
        className="portfolio-item"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.h1 variants={variants}> My Projects</motion.h1>
        <motion.div className="slider" variants={variants}>
          <button onClick={handlePrev} className="button">
            ❮
          </button>
          <motion.div
            className="miniature-container"
            variants={miniatureVariantsB}
            initial="initial"
            animate={animationActiveL ? "animate" : ""}
          >
            <img
              src={
                slides[(currentIndex - 1 + slides.length) % slides.length]
                  .imgUrl
              }
              className="miniature"
            />
          </motion.div>
          <div className="img-project-container">
            <motion.img
              className="img-project"
              src={slides[currentIndex].imgUrl}
              alt={slides[currentIndex].title}
            />

            <a
              href={slides[currentIndex].githubLink}
              target="_blank"
              rel="noopener noreferer"
            >
              <div className="links" style={{ left: "0%" }}>
                <p>Click here to check out the respository.</p>
              </div>
            </a>
            <a
              href={slides[currentIndex].deployLink}
              target="_blank"
              rel="noopener noreferer"
            >
              <div className="links" style={{ left: "50%" }}>
                <p>Click here to visit the project.</p>
              </div>
            </a>
          </div>

          <motion.div
            className="miniature-container"
            variants={miniatureVariants}
            initial="initial"
            animate={animationActiveR ? "animate" : ""}
          >
            <img
              className="miniature"
              src={slides[(currentIndex + 1) % slides.length].imgUrl}
            />
          </motion.div>

          <button onClick={handleNext} className="button">
            ❯
          </button>
        </motion.div>
        <motion.div
          className="portfolio-description"
          variants={descriptionVariants}
          initial="initial"
          animate={animationActiveR ? "animate" : ""}
        >
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </motion.div>
      </motion.div>
      <SliderText
        text="Passionate!"
        position={{ top: "0%", left: "40%" }}
        orientation={{ y: "150%" }}
        duration={10}
        degree={270}
      />
    </div>
  );
};

export default Portfolio;
