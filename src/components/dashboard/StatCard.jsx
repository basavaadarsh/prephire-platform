import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../Stats/useCountUp';

const StatCard = ({ icon, title, value, trend, color, animated }) => {
  const CardComponent = animated ? motion.div : 'div';
  const numericValue = Number(value);
  const isNumeric = Number.isFinite(numericValue);
  const { ref, displayValue } = useCountUp(isNumeric ? numericValue : 0, 1200);

  return (
    <CardComponent
      className={`stat-card ${color ? `stat-card-${color}` : ''}`}
      initial={animated ? { opacity: 0, y: 10 } : undefined}
      animate={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { duration: 0.3 } : undefined}
      ref={ref}
    >
      <div className="stat-card-content">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{isNumeric ? displayValue : value}</div>
        {trend ? <div className="stat-trend">{trend}</div> : null}
      </div>
      <div className={`stat-icon ${color ? `stat-icon-${color}` : ''}`}>{icon}</div>
    </CardComponent>
  );
};

export default StatCard;
