import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const images = ["pathan.jpg", "blackpanther.jpg", "tranquity.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev_button} onClick={goToPreviousSlide}>
        Prev
      </button>
      <img
        className={styles.slide}
        src={images[currentIndex]}
        alt="Carousel Slide"
      />
      <button className={styles.next_button} onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
