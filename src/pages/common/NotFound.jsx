import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page d-flex align-items-center justify-content-center">
      <motion.div
        className="notfound-card text-center"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* 🔥 BIG 404 */}
        <h1 className="notfound-code">404</h1>

        {/* TITLE */}
        <h3 className="fw-bold mt-2">Page Not Found</h3>

        {/* SUBTITLE */}
        <p className="text-muted">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* ACTION BUTTONS */}
        <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
          <button
            className="btn btn-primary px-4"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>

          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("/mentors")}
          >
            Browse Mentors
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
