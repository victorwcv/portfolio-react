import React, { useState, useEffect } from "react";

const ProjectSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`imagen ${index + 1}`}
          className={currentImage === index ? 'visible' : ''}
          style={{ zIndex: currentImage === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

export default ProjectSlider;
