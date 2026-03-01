import React from "react";
import { motion } from "framer-motion";

const AboutProfile = ({ initials, name, role, experience }) => {
  return (
    <motion.div
      className="col-12 col-sm-6 col-lg-3 mb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="card shadow-sm p-4 text-center h-100 border-0 rounded-4">

        {/* Avatar Circle */}
        <div
          className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#1850e7",
            fontWeight: "bold",
            fontSize: "20px"
          }}
        >
          {initials}
        </div>

        <h5 className="fw-bold mb-4 mt-3">{name}</h5>
        <p className="text-primary mb-2">{role}</p>
        <p className="text-muted small mb-0">{experience}</p>

      </div>
    </motion.div>
  );
};

export default AboutProfile;