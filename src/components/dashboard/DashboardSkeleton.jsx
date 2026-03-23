import React from 'react';

const DashboardSkeleton = () => (
  <div className="dashboard-skeleton">
    <div className="skeleton-header" />
    <div className="skeleton-grid">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="skeleton-card" />
      ))}
    </div>
    <div className="skeleton-table">
      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line" />
    </div>
  </div>
);

export default DashboardSkeleton;
