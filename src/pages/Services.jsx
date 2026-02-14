import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.css";
import ServicesDataCard from "../components/ServicesDataCard";

// ✅ IMPORT DATA
import {
  servicesData,
  howItWorksData,
  ctaData
} from "../data/servicesData";

const Services = () => {
  const isOdd = servicesData.length % 2 !== 0;

  return (
    <div>

      {/* ================= HEADER ================= */}
      <motion.div
        className="container-fluid bg-dark-light text-center py-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="display-5 fw-semibold">Our Services</h1>
        <p className="fs-5 color-light">
          Comprehensive interview preparation and career development services
        </p>
      </motion.div>

      {/* ================= SERVICES CARDS ================= */}
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">

          {servicesData.map((service, index) => {
            const isLast = index === servicesData.length - 1;

            return (
              <motion.div
                key={service.id}
                className={
                  isOdd && isLast
                    ? "col-12"
                    : "col-lg-6 col-md-6 col-sm-12"
                }
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <ServicesDataCard
                  icon={service.icon} 
                  title={service.title}
                  subtitle={service.subtitle}
                  features={service.features}
                  price={service.price}
                />
              </motion.div>
            );
          })}

        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <motion.div
        className="container-fluid bg-light py-5 mt-5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-semibold mb-2">How It Works</h2>
        <p className="fs-5 color-light mb-5">
          Simple 4-step process to get started
        </p>

        <div className="container">
          <div className="row g-4 justify-content-center">

            {howItWorksData.map((step, index) => (
              <motion.div
                key={step.step}
                className="col-lg-3 col-md-6 col-sm-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="d-flex flex-column align-items-center gap-2">
                  <span className="circle-step">{step.step}</span>
                  <h5 className="fw-semibold mt-2">{step.title}</h5>
                  <p className="color-light text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.div>

      {/* ================= CTA ================= */}
      <motion.div
        className="container-fluid bg-blue text-white text-center py-5 pt-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-semibold">{ctaData.title}</h2>
        <p className="fs-5 mb-3">{ctaData.subtitle}</p>
        <button className="btn bg-white text-blue fw-semibold px-4">
          {ctaData.buttonText}
        </button>
      </motion.div>

    </div>
  );
};

export default Services;
