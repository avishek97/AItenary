// HeroSection.jsx

import React from "react";
import "./heroimage.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <img
        src="../public/Hero.png"
        alt="Travel"
        className="hero-image"
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Left Content */}
        <div className="hero-text">
          <span className="hero-tag">
            ✈ Smart Travel Planning
          </span>

          <h1>
            Plan your perfect
            <br />
            trip, your way
          </h1>

          <p>
            Discover flights, trains and curated itineraries
            all in one place with AI-powered travel planning.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="primary-btn">
              Start Planning
            </button>

            <button className="secondary-btn">
              Explore Trips
            </button>
          </div>
        </div>

        {/* Search Card */}
        <div className="search-card">
          {/* Tabs */}
          

          {/* Inputs */}
          <div className="search-grid">
            <div className="input-group">
              <label>From</label>
              <input type="text" placeholder="Delhi (DEL)" />
            </div>

            <div className="input-group">
              <label>To</label>
              <input type="text" placeholder="Paris (CDG)" />
            </div>

            <div className="input-group">
              <label>Departure</label>
              <input type="date" />
            </div>

            <div className="input-group">
              <label>Return</label>
              <input type="date" />
            </div>

            <button className="search-btn">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;