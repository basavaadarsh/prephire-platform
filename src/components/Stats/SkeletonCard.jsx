import React from "react";
import "./stats.css";

const SkeletonCard = React.memo(() => (
  <div className="skeleton-card">
    <div className="skeleton-block skeleton-icon" />
    <div className="skeleton-block skeleton-value" />
    <div className="skeleton-block skeleton-title" />
  </div>
));

export default SkeletonCard;
