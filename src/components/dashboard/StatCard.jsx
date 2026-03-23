import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon, title, value, trend, color, animated }) => {
  const CardComponent = animated ? motion.div : 'div';

  return (
    <CardComponent
      className="stat-card"
      initial={animated ? { opacity: 0, y: 10 } : undefined}
      animate={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { duration: 0.3 } : undefined}
    >
      <div className={`stat-icon ${color ? `stat-icon-${color}` : ''}`}>{icon}</div>
      <div>
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        {trend ? <div className="stat-trend">{trend}</div> : null}
      </div>
    </CardComponent>
  );
};

export default StatCard;
