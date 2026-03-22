import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";
import ServicesDataCard from "../components/ServicesDataCard";

import { servicesData, howItWorksData, ctaData } from "../data/ServicesData";

const Services = () => {
  const navigate = useNavigate();
  const isOdd = servicesData.length % 2 !== 0;

  const handleNavigate = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="service-theme-blue">
      {/* ================= HERO ================= */}
      <motion.section
        className="service-hero-wrap text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container py-5">
          <h1 className="service-hero-title gradient-text">Our Services</h1>

          <p className="service-hero-subtitle mx-auto mt-3">
            Explore premium career services designed to help you prepare,
            perform, and succeed in interviews.
          </p>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {servicesData.map((service, index) => {
            const isLast = index === servicesData.length - 1;

            return (
              <motion.div
                key={service.id}
                className={
                  isOdd && isLast ? "col-12" : "col-lg-6 col-md-6 col-sm-12"
                }
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="service-card-wrapper"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleNavigate(service.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleNavigate(service.id);
                  }}
                >
                  <ServicesDataCard {...service} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-5 text-center">
        <div className="container">
          <span className="section-kicker">Process</span>

          <h2 className="section-title mt-2">How It Works</h2>

          <p className="section-subtitle mb-5">
            Simple step-by-step process to start your preparation journey.
          </p>

          <div className="row g-4 justify-content-center">
            {howItWorksData.map((step, index) => (
              <motion.div
                key={step.step}
                className="col-lg-3 col-md-6 col-sm-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className="feature-premium-card text-center">
                  <span className="circle-step">{step.step}</span>
                  <h5 className="fw-bold mt-3">{step.title}</h5>
                  <p className="feature-desc">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="service-cta-wrap">
        <div className="container">
          <motion.div
            className="service-cta-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-kicker section-kicker-light">
              Get Started
            </span>

            <h2 className="cta-title mt-3">{ctaData.title}</h2>

            <p className="cta-subtitle">{ctaData.subtitle}</p>

            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
              <button
                className="btn btn-light px-4 py-2 fw-semibold"
                onClick={() => navigate("/services")}
              >
                {ctaData.primaryBtn}
              </button>

              <button
                className="btn btn-outline-light px-4 py-2 fw-semibold"
                onClick={() => navigate("/courses")}
              >
                {ctaData.secondaryBtn}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
