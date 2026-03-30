import React from 'react';

const PersonalInfoCard = ({ profile }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-person" /> Personal Details
    </div>
    <div className="info-grid">
      <div>
        <div className="info-label">Email</div>
        <div className="info-value">{profile.email}</div>
      </div>
      <div>
        <div className="info-label">Phone</div>
        <div className="info-value">{profile.phone || 'Add phone'}</div>
      </div>
      <div>
        <div className="info-label">Location</div>
        <div className="info-value">{profile.location || 'Add location'}</div>
      </div>
    </div>
  </section>
);

export default PersonalInfoCard;
