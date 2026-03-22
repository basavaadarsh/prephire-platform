import React from "react";
import { motion } from "framer-motion";
import { LiaCheckCircle } from "react-icons/lia";
import { IoVideocamOutline } from "react-icons/io5";

const ServicesDataCard = ({ icon, title, subtitle, features, price }) => {
  const IconComponent = icon || IoVideocamOutline;

  return (
    <motion.div
      className="service-premium-card h-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {/* ===== TOP GRADIENT LINE ===== */}
      <div className="card-top-line"></div>

      {/* ===== HEADER ===== */}
      <div className="d-flex gap-3 align-items-start mb-3">
        <div className="icon-box">
          <IconComponent size={22} />
        </div>

        <div>
          <h5 className="m-0 fw-bold">{title}</h5>
          <p className="m-0 text-muted small">{subtitle}</p>
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <ul className="list-unstyled d-flex flex-column gap-3 mt-4 mb-4">
        {features?.slice(0, 3).map((feature, index) => (
          <motion.li
            key={index}
            className="feature-row"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <LiaCheckCircle className="check-icon" />

            <div>
              <span className="fw-semibold d-block">{feature.title}</span>
              <small className="text-muted">{feature.desc}</small>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* ===== FOOTER ===== */}
      <div className="card-footer-custom">
        <span className="price-text">{price}</span>

        <button className="btn btn-gradient">Get Started →</button>
      </div>
    </motion.div>
  );
};

export default ServicesDataCard;
