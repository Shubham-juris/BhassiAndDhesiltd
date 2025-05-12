import React from "react";
import Workers from "../Assets/swqqq1.webp"; 
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Workers} alt="Construction Team" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Bhassi & Dhesi Services — your go-to team for reliable cleaning
          and construction solutions. With a strong foundation in community values and
          hands-on experience, we deliver professional results with a personal touch.
          From spotless homes to robust renovations, we build trust while we build your space.
        </p>

        <h4 className="about-text-title">How We Work</h4>

        <SolutionStep
          title="Request a Service"
          description="Tell us what you need — whether it’s cleaning, renovation, or repairs — and we’ll take care of the rest."
        />

        <SolutionStep
          title="Schedule a Visit"
          description="Pick a time that works for you. Our friendly and skilled team will arrive promptly, fully prepared."
        />

        <SolutionStep
          title="Get the Job Done"
          description="We work efficiently and respectfully, delivering high-quality results that meet your standards and budget."
        />
      </div>
    </div>
  );
}

export default About;
