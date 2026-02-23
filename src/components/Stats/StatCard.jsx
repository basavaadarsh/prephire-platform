import React, { useMemo } from "react";
import { useCountUp } from "./useCountUp";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import "./stats.css";

const iconMap = {
  users: <HiOutlineUsers size={28} />,
  award: <HiOutlineTrophy size={28} />,
  trending: <HiOutlineArrowTrendingUp size={28} />,
  star: <HiOutlineStar size={28} />,
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
