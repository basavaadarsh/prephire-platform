import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ctaData } from "../../data/ServicesData";

const ServiceCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="service-cta-wrap py-5">
      <div className="container">
        <motion.div
          className="service-cta-card text-center"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="section-kicker section-kicker-light">
            Let’s get started
          </span>
          <h2 className="cta-title mt-2">{ctaData.title}</h2>
          <p className="cta-subtitle">{ctaData.subtitle}</p>

          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <button
              className="btn btn-light px-4 py-3 fw-semibold"
              onClick={() => navigate("/services")}
            >
              {ctaData.primaryBtn}
            </button>

            <button
              className="btn btn-outline-light px-4 py-3 fw-semibold"
              onClick={() => navigate("/courses")}
            >
              {ctaData.secondaryBtn}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
