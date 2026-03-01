import React from "react";
import { motion } from "framer-motion";

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="col-12 col-sm-6 col-lg-6 mb-4"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="card p-4 shadow rounded-4 border-0 h-100">

        <div className="d-flex align-items-center mb-3">
          {Icon && (
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="me-3 icon-dec"
            >
              <Icon size={30} />
            </motion.div>
          )}
          <h5 className="fw-bold mb-0">{title}</h5>
        </div>

        <p className="color-light mb-0">
          {description}
        </p>

      </div>
    </motion.div>
  );
};

export default AboutCard;