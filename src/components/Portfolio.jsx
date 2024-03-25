import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../sass/portfolio.scss";
import SliderText from "./SliderText";

const Portfolio = ({anchoViewport}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationActiveR, setAnimationActiveR] = useState(false);
  const [animationActiveL, setAnimationActiveL] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const slides = [
    {
      title: "Project HTML",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore quaerat, nulla quisquam quidem adipisci natus ipsum voluptates, laborum reprehenderit ullam facere earum alias sed in, dolore obcaecati explicabo iste.`,
      imgUrl: "/under-construction.webp",
      githubLink: "#",
      deployLink: "#",
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
    }, 300);
  };

  const handlePrev = () => {
    setAnimationActiveL(true);
    setTimeout(() => {
      setAnimationActiveL(false);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }, 300);
  };

  const variants = {
    initial: {
      x: 0,
      y: anchoViewport < 300 ? 200 : 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const miniatureVariants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0.5,
    },
    animate: {
      x: "-220%",
      y: 0,
      scale: 3.1,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const miniatureVariantsB = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0.5,
    },
    animate: {
      x: "220%",
      y: 0,
      scale: 3.1,
      opacity: 1,
      transition: {
        duration: 0.2,
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
        <motion.h1 variants={variants}> Projects</motion.h1>
        <motion.div className="slider" variants={variants}>
          <button onClick={handlePrev} className="button">❮</button>
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
                <p>
                  Click here to check out the respository.
                </p>
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

          <button onClick={handleNext} className="button">❯</button>
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
