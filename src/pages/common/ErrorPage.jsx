import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page d-flex align-items-center justify-content-center">
      <motion.div
        className="error-card text-center"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* ICON */}
        <div className="error-icon">
          <FaExclamationTriangle />
        </div>

        {/* TITLE */}
        <h2 className="fw-bold mt-3">Something Went Wrong</h2>

        {/* MESSAGE */}
        <p className="text-muted">
          We encountered an unexpected error. Please try again or go back.
        </p>

        {/* ACTION BUTTONS */}
        <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
          <button
            className="btn btn-primary px-4"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>

          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
