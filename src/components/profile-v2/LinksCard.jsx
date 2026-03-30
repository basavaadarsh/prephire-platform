import React from 'react';

const LinksCard = ({ profile, isEditing, onChange }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-link-45deg" /> Professional Links
    </div>
    <div className="links-list">
      <div>
        <label className="form-label">LinkedIn</label>
        {isEditing ? (
          <input
            className="form-control"
            value={profile.linkedIn || ''}
            onChange={(event) => onChange('linkedIn', event.target.value)}
          />
        ) : (
          <div className="info-value">{profile.linkedIn || 'Add LinkedIn URL'}</div>
        )}
      </div>
      <div>
        <label className="form-label">Portfolio</label>
        {isEditing ? (
          <input
            className="form-control"
            value={profile.portfolio || ''}
            onChange={(event) => onChange('portfolio', event.target.value)}
          />
        ) : (
          <div className="info-value">{profile.portfolio || 'Add portfolio URL'}</div>
        )}
      </div>
    </div>
  </section>
);

export default LinksCard;
