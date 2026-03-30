import React from 'react';

const CertificationsCard = ({ items }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-award" /> Certifications
    </div>
    {items.length === 0 ? (
      <div className="empty-row">No certifications added yet.</div>
    ) : (
      <div className="cert-list">
        {items.map((item) => (
          <div key={item.title} className="cert-item">
            <div className="cert-title">{item.title}</div>
            <div className="cert-meta">{item.issuer}</div>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default CertificationsCard;
