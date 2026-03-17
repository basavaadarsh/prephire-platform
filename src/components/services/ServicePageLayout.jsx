import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicePageLayout = ({ title, description, children }) => (
  <div className="container py-5">
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-secondary small mb-2">Services &gt; {title}</div>
      <Link to="/services" className="btn btn-link p-0 mb-3">
        ← Back to Services
      </Link>
      <h1 className="fw-semibold mb-2">{title}</h1>
      <p className="text-secondary mb-4">{description}</p>
    </motion.div>
    <div>{children}</div>
  </div>
);

export default ServicePageLayout;
