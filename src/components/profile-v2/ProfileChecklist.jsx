import React from 'react';

const ProfileChecklist = ({ items }) => (
  <section className="profile-checklist">
    <div className="section-header">
      <div>
        <h2 className="section-title">Profile checklist</h2>
        <p className="section-subtitle">Complete these to rank higher with recruiters</p>
      </div>
    </div>
    <div className="checklist-grid">
      {items.map((item) => (
        <div key={item.id} className={`checklist-item ${item.completed ? 'completed' : ''}`}>
          <span className="checklist-icon">
            <i className={`bi ${item.completed ? 'bi-check-circle-fill' : 'bi-circle'}`} />
          </span>
          <span className="checklist-text">{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ProfileChecklist;
