import React from 'react';
import { motion } from 'framer-motion';
import { dashboardData } from '../../data/dashboardData';

const StarRating = ({ rating }) => {
  const rounded = Math.round(rating);
  return (
    <div className="mentor-stars">
      {[...Array(5)].map((_, index) => (
        <i
          key={`star-${index}`}
          className={`bi ${index < rounded ? 'bi-star-fill' : 'bi-star'}`}
        />
      ))}
    </div>
  );
};

const Mentors = () => (
  <motion.div
    className="dashboard-page mentors-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="page-header">
      <div>
        <h1 className="page-title">Find a Mentor</h1>
        <p className="page-subtitle">Get guidance from industry experts</p>
      </div>
    </div>

    <div className="mentors-grid">
      {dashboardData.mentors.map((mentor) => (
        <div key={mentor.name} className="mentor-card">
          <div className="mentor-header">
            <img src={mentor.avatar} alt={mentor.name} className="mentor-avatar" />
            <div className="mentor-meta">
              <h3>{mentor.name}</h3>
              <p>{mentor.role} at {mentor.company}</p>
              <div className="mentor-rating">
                <StarRating rating={mentor.rating} />
                <span>{mentor.rating.toFixed(1)} ({mentor.reviewCount} reviews)</span>
              </div>
            </div>
          </div>

          <div className="mentor-specialties">
            <p className="mentor-label">Specialties</p>
            <div className="mentor-tags">
              {mentor.specialties.map((specialty) => (
                <span key={specialty} className="mentor-tag">{specialty}</span>
              ))}
            </div>
          </div>

          <div className="mentor-availability">
            <div className="mentor-availability-row">
              <i className="bi bi-calendar3" />
              <span>{mentor.availability}</span>
            </div>
            <div className="mentor-rate">${mentor.hourlyRate}/hour</div>
          </div>

          <div className="mentor-actions">
            <button type="button" className="btn btn-outline-secondary">
              <i className="bi bi-chat" />
              Message
            </button>
            <button type="button" className="btn btn-primary">
              <i className="bi bi-calendar-plus" />
              Book Session
            </button>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Mentors;
