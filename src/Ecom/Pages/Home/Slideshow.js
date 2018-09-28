import React from "react";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  "Assets/Images/angel-oak.jpg",
  "Assets/Images/cherry-blossom.jpg",
  "Assets/Images/grandidier's-baobab.jpg"
];

const fadeProperties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};

const Slideshow = () => {
  return (
    <div className="featured">
      <h2 className="featured__title">Featured</h2>
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="angel oak tree" />
          </div>
          <h3 className="featured__item">Angel Oak</h3>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="cherry blossom tree" />
          </div>
          <h3 className="featured__item">Cherry Blossom</h3>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="grandidier's baobab tree" />
          </div>
          <h3 className="featured__item">Grandidier's Baobab</h3>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
