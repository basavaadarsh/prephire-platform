import React from "react";
import StatsSection from "../components/Stats/StatsSection";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Transform Your Career</span>
            <h1 className="hero-heading">
              Start Your Interview<br />Preparation Today
            </h1>
            <p className="hero-subtitle">Prepare. Perform. Get Hired.</p>
            <div className="hero-buttons">
              <a href="/courses" className="btn btn-primary hero-btn-primary">
                Explore Courses <span>&rarr;</span>
              </a>
              <a href="/signup" className="btn btn-outline-secondary hero-btn-secondary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="platform-banner">
        <div className="container">
          <p className="platform-banner-text">
            <strong>Mandatory Platform Access:</strong> ₹99 for 3 Months – Get access to all features and resources
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
