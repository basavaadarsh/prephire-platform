import React from 'react';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const SkillGrowth = () => (
  <motion.div
    className="dashboard-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="page-header">
      <div>
        <h1 className="page-title">Skill Growth</h1>
        <p className="page-subtitle">Track and improve your skill journey.</p>
      </div>
    </div>
    <div className="empty-state">
      <div className="empty-icon">
        <HiOutlineSparkles />
      </div>
      <div className="empty-title">No skill progress yet.</div>
      <div className="empty-text">Complete a lesson to unlock skill insights.</div>
    </div>
  </motion.div>
);

export default SkillGrowth;
