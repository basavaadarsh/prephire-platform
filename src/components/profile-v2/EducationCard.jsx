import React from 'react';

const EducationCard = ({ items }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-mortarboard" /> Education
    </div>
    <div className="education-list">
      {items.map((item) => (
        <div key={item.degree} className="education-item">
          <div className="education-title">
            <span>{item.degree}</span>
            <span className="education-date"><i className="bi bi-calendar3" /> {item.date}</span>
          </div>
          <div className="education-school">{item.school}</div>
          <div className="education-meta">{item.meta}</div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationCard;
