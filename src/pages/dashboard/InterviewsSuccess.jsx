import React from 'react';
import { motion } from 'framer-motion';

const InterviewsSuccess = () => (
  <motion.div
    className="dashboard-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="page-header">
      <div>
        <h1 className="page-title">Interview Success</h1>
        <p className="page-subtitle">Track interview performance insights.</p>
      </div>
    </div>
    <div className="empty-state">
      <div className="empty-icon">
        <i className="bi bi-bar-chart" />
      </div>
      <div className="empty-title">No interview data yet.</div>
      <div className="empty-text">Complete interviews to see success rates.</div>
    </div>
  </motion.div>
);

export default InterviewsSuccess;
