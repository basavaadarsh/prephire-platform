import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaBolt } from "react-icons/fa";

const ServiceDetails = ({ service }) => {
  return (
    <section className="py-5 service-details-wrap">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <motion.div
              className="details-main-card h-100"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-kicker">Why choose this service?</span>
              <h2 className="section-title mt-2 mb-3">
                Designed to give you clarity, confidence, and measurable
                improvement
              </h2>
              <p className="details-intro">
                This service is structured to go beyond generic preparation. It
                focuses on guided improvement, expert-backed inputs, and a
                practical format that helps students and job seekers perform
                better in real scenarios.
              </p>

              <div className="mt-4">
                {service.details?.map((point, index) => (
                  <motion.div
                    key={index}
                    className="detail-list-item"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <FaCheckCircle className="detail-check" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div
              className="details-side-card h-100"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="fw-bold mb-4">What you get</h4>

              <div className="deliverable-stack">
                {service.deliverables?.map((item, index) => (
                  <div key={index} className="deliverable-item">
                    <FaBolt className="deliverable-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="trust-box mt-4">
                <div className="trust-icon">
                  <FaShieldAlt />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Guided by experts</h6>
                  <p className="mb-0">
                    Structured support, practical inputs, and premium-quality
                    guidance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
