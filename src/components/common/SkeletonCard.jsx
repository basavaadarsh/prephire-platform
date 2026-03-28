import React from "react";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      {/* IMAGE */}
      <div className="skeleton skeleton-img"></div>

      {/* TEXT */}
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-subtitle"></div>

      {/* META */}
      <div className="d-flex justify-content-between mt-3">
        <div className="skeleton skeleton-small"></div>
        <div className="skeleton skeleton-small"></div>
      </div>

      {/* SKILLS */}
      <div className="d-flex gap-2 mt-3">
        <div className="skeleton skeleton-chip"></div>
        <div className="skeleton skeleton-chip"></div>
        <div className="skeleton skeleton-chip"></div>
      </div>

      {/* BUTTON */}
      <div className="skeleton skeleton-btn mt-3"></div>
    </div>
  );
};

export default SkeletonCard;
