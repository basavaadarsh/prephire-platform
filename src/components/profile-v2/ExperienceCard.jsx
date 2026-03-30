import React from 'react';

const ExperienceCard = ({ items }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-briefcase" /> Professional Experience
    </div>
    <div className="experience-list">
      {items.map((item) => (
        <div key={item.title} className="experience-item">
          <div className="experience-title">
            <span>{item.title}</span>
            <span className="experience-date"><i className="bi bi-calendar3" /> {item.date}</span>
          </div>
          <div className="experience-company">{item.company}</div>
          <p className="experience-summary">{item.summary}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceCard;
