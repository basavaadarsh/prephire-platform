import React from 'react';
import { dashboardData } from '../../data/dashboardData';

const Interviews = () => {
  const upcoming = dashboardData.interviews.find((item) => item.status === 'upcoming');
  const completed = dashboardData.interviews.filter((item) => item.status === 'completed');

  return (
    <div className="dashboard-page interviews-page">
      <div className="interviews-header">
        <div>
          <h1 className="page-title">Mock Interviews</h1>
          <p className="page-subtitle">Practice and master your interview skills</p>
        </div>
        <button type="button" className="btn btn-primary interviews-primary-btn">
          <i className="bi bi-play-circle" />
          Start Interview
        </button>
      </div>

      <div className="interviews-section">
        <h2 className="section-title">Upcoming Interviews</h2>
        {upcoming ? (
          <div className="interview-card upcoming">
            <div className="interview-card-top">
              <div>
                <div className="interview-title">{upcoming.title}</div>
                <div className="interview-company">{upcoming.company}</div>
              </div>
              <span className="interview-badge">{upcoming.difficulty}</span>
            </div>
            <div className="interview-date">
              <i className="bi bi-clock" />
              <span>{upcoming.date}</span>
            </div>
            <div className="interview-tags">
              {upcoming.tags.map((tag) => (
                <span key={tag} className="interview-tag">{tag}</span>
              ))}
            </div>
            <button type="button" className="btn btn-warning interviews-start-btn">
              <i className="bi bi-play-fill" />
              Start Interview
            </button>
          </div>
        ) : (
          <div className="empty-row">No upcoming interviews.</div>
        )}
      </div>

      <div className="interviews-section">
        <h2 className="section-title">Completed Interviews</h2>
        <div className="interviews-grid">
          {completed.map((item) => (
            <div key={item.id} className="interview-card completed">
              <div className="interview-card-top">
                <div>
                  <div className="interview-title">{item.title}</div>
                  <div className="interview-company">{item.company}</div>
                </div>
                <span className="interview-status">
                  <i className="bi bi-check-circle" />
                  Completed
                </span>
              </div>
              <div className={`interview-score ${item.score > 80 ? 'good' : 'fair'}`}>
                <i className="bi bi-graph-up" />
                <span>Score: {item.score}%</span>
              </div>
              <div className="interview-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="interview-tag neutral">{tag}</span>
                ))}
              </div>
              <button type="button" className="btn btn-outline-secondary interviews-feedback-btn">
                View Feedback
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interviews;
