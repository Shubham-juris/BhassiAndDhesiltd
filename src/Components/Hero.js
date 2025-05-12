import React, { useEffect, useState } from "react";
import WorkerImage from "../Assets/sweeper.webp"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRequestServiceClick = () => {
    navigate("/request-service");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🛠️ Clean & Build with Trust</p>
          <h2 className="text-title">
            Professional Cleaning & Construction Services
          </h2>
          <p className="text-descritpion">
            Offering Bhassi and Dhesi-style cleaning, repairs, remodeling, and
            post-construction cleaning with a personal touch. Reliable and
            community-driven service you can trust.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleRequestServiceClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Request a Service
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>300+</p>
              <p>Projects Completed</p>
            </div>

            <div className="text-stats-container">
              <p>100+</p>
              <p>Satisfied Clients</p>
            </div>

            <div className="text-stats-container">
              <p>15+</p>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={WorkerImage} alt="Construction Worker" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
