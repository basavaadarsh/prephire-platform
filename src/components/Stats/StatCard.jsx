import React, { useMemo } from "react";
import { useCountUp } from "./useCountUp";
import "./stats.css";

const iconMap = {
  users: <i className="bi bi-people" aria-hidden="true" />,
  award: <i className="bi bi-trophy" aria-hidden="true" />,
  trending: <i className="bi bi-graph-up" aria-hidden="true" />,
  star: <i className="bi bi-star" aria-hidden="true" />,
};

const StatCard = React.memo(({ title, value, suffix, icon }) => {
  const { ref, displayValue } = useCountUp(value);
  const Icon = useMemo(() => iconMap[icon] || iconMap.star, [icon]);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-icon">{Icon}</div>
      <div className="stat-value">
        {displayValue}
        {suffix || ""}
      </div>
      <div className="stat-title">{title}</div>
    </div>
  );
});

export default StatCard;
