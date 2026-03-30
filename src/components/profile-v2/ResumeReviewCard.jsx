import React from 'react';

const ResumeReviewCard = ({ status }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-clipboard-check" /> Resume Review
    </div>
    <div className="resume-review">
      <div className={`resume-review-status ${status.toLowerCase()}`}>{status}</div>
      <p className="card-text">Your latest resume review status is shown here.</p>
      <button type="button" className="btn btn-outline-primary btn-sm">Request Review</button>
    </div>
  </section>
);

export default ResumeReviewCard;
