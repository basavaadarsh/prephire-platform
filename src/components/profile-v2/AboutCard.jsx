import React from 'react';

const AboutCard = ({ profile, isEditing, onChange }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-file-text" /> About
    </div>
    {isEditing ? (
      <textarea
        className="form-control"
        rows="3"
        value={profile.bio || ''}
        onChange={(event) => onChange('bio', event.target.value)}
      />
    ) : (
      <p className="card-text">{profile.bio || 'Add a short professional summary.'}</p>
    )}
  </section>
);

export default AboutCard;
