import { useEffect, useState } from "react";
import "../Slide/Slide.css";

function Slide() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    "/src/images/buzos/principal.jpg",
    "/src/images/buzos/gris.marron.negro.marron.png",
    "/src/images/buzos/gris.marron.negro.marron2.png",
    "/src/images/buzos/gris.marron.negro.marron3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="mySlides fade"
            style={{ display: slideIndex === index ? "block" : "none" }}
          >
            <img
              src={slide}
              style={{ width: "100%" }}
              alt={`slider_${index + 1}`}
            />
          </div>
        ))}
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index ? "active" : ""}`}
            onClick={() => setSlideIndex(index)}
          ></span>
        ))}
      </div>
    </>
  );
}

export default Slide;
