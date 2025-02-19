import React from "react";
import withGlasses from "../assets/with-glasses.webp";
import "../css/heroSection.css";

const heroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={withGlasses} alt="With Glasses" className="hero-image" />
        <h2 className="hero-title">Fitzpatrick Managuit (p1trickDev)</h2>
        <p className="hero-subtitle">
          Full Stack Developer
          <br />
          Zamboanga City | Philippines
        </p>
      </div>
    </section>
  );
};

export default heroSection;
