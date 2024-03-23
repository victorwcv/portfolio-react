import React, { useState } from "react";
import { motion } from "framer-motion";
import "../sass/portfolio.scss";
import SliderText from "./SliderText";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationActiveR, setAnimationActiveR] = useState(false);
  const [animationActiveL, setAnimationActiveL] = useState(false);

  const slides = [
    {
      title: "Real State with Rect",
      description: `A full stack web application built using Node.js and Express for the server side, MongoDB as the database, and a RESTful API to handle user authentication. The front end was`,
      imgUrl: "/public/images/proyect_1.jpg",
      githubLink: "",
      deployLink: "",
    },
    {
      title: "Bad Bank App",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non voluptas soluta laborum ipsam fuga libero est tenetur temporibus vero minus, qui quam quibusdam nemo. Sapiente illum quasi dolorem cupiditate?`,
      imgUrl: "/public/images/proyect_2.jpg",
      githubLink: "",
      deployLink: "",
    },
    {
      title: "Shoping Cart",
      description: `A full stack web application built using Node.js and Express for the server side, MongoDB as the database, and a RESTful API to handle user authentication. The front end was`,
      imgUrl: "/public/images/proyect_3.jpg",
      githubLink: "",
      deployLink: "",
    },
    {
      title: "My first Portfolio",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem inventore quaerat, nulla quisquam quidem adipisci natus ipsum voluptates, laborum reprehenderit ullam facere earum alias sed in, dolore obcaecati explicabo iste.`,
      imgUrl: "/public/images/proyect_4.jpg",
      githubLink: "",
      deployLink: "",
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
      y: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
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
      scale: 3.10,
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
      scale: 3.10,
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
        duration: 1,
      },
    },
  };

  return (
    <div className="portfolio">
      <h1>Welcome to my Projects</h1>
      <motion.div
        className="portfolio-item"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="slider" variants={variants}>
          <button onClick={handlePrev}>❮</button>
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
              <div className="links" style={{left:'0%'}}>
                <p>
                  You're welcome to check out the code of my project on GitHub clicking here.
                </p>
              </div>
            </a>
            <a
              href={slides[currentIndex].deployLink}
              target="_blank"
              rel="noopener noreferer"
            >
              <div className="links" style={{left:"50%"}}>
                <p>You can visit the project clicking here</p>
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

          <button onClick={handleNext}>❯</button>
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
        text="Passionate..."
        position={{ top: "35%" }}
        orientation={{ x: "-100%" }}
        duration={20}
      />
    </div>
  );
};

export default Portfolio;
