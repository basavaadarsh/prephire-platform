import React from 'react';
import { HiOutlineAdjustmentsVertical } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const SkillsList = () => (
  <motion.div
    className="dashboard-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="page-header">
      <div>
        <h1 className="page-title">Skills</h1>
        <p className="page-subtitle">Organize and track your skills.</p>
      </div>
    </div>
    <div className="empty-state">
      <div className="empty-icon">
        <HiOutlineAdjustmentsVertical />
      </div>
      <div className="empty-title">No skills recorded.</div>
      <div className="empty-text">Add skills to build your profile.</div>
    </div>
  </motion.div>
);

export default SkillsList;
