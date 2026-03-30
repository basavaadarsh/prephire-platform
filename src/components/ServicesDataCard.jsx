import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ICON MAP */
const iconMap = {
  video: "bi-camera-video",
  resume: "bi-file-earmark-text",
  guidance: "bi-lightbulb",
  placement: "bi-briefcase",
  corporate: "bi-file-earmark-ruled"
};

const ServicesDataCard = ({ icon, title, subtitle, features, price, serviceId }) => {
  const iconClass = iconMap[icon] || "bi-camera-video";

  return (
    <motion.div
      className="container-fluid border rounded-4 shadow servicesDataCard p-4 h-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      {/* ===== HEADER ===== */}
      <motion.div
        className="d-flex gap-3 align-items-start mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <i className={`bi ${iconClass} icon-dec fs-2 flex-shrink-0`} aria-hidden="true" />
        <div>
          <h5 className="m-0 fw-semibold">{title}</h5>
          <p className="m-0 color-light small">{subtitle}</p>
        </div>
      </motion.div>

      {/* ===== FEATURES ===== */}
      <ul className="list-unstyled d-flex flex-column gap-2 color-light mt-3 mb-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="d-flex align-items-start gap-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <i className="bi bi-check-circle mark-icon fs-5 mt-1" aria-hidden="true" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <hr />

      {/* ===== FOOTER ===== */}
      <motion.div
        className="d-flex justify-content-between align-items-center flex-wrap gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <span className="fw-semibold text-blue">{price}</span>
        <Link className="btn border px-3" to={`/signup?service=${serviceId}`}>
          Get Started
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServicesDataCard;
