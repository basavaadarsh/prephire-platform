import React from 'react';
import { CalendarDays, TrendingUp } from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const CareerGoals = () => (
  <div className="dashboard-page">
    <div className="page-header goals-header">
      <div>
        <h1 className="page-title">Career Goals</h1>
        <p className="page-subtitle">Track your professional development</p>
      </div>
      <button type="button" className="btn btn-primary goals-add">
        + New Goal
      </button>
    </div>

    <div className="goals-grid">
      {dashboardData.careerGoals.map((goal) => (
        <div key={goal.id} className="goal-card">
          <div className="goal-top">
            <span className="goal-category">{goal.category}</span>
            <span className={`goal-priority ${goal.priority === 'High' ? 'high' : 'medium'}`}>
              {goal.priority}
            </span>
          </div>
          <div className="goal-title">{goal.title}</div>
          <div className="goal-description">{goal.description}</div>
          <div className="goal-progress-row">
            <span>Progress</span>
            <span>{goal.progress}%</span>
          </div>
          <progress className="goal-progress" value={goal.progress} max="100" />
          <div className="goal-due">
            <CalendarDays size={16} />
            <span>Due: {goal.due}</span>
          </div>
          <button type="button" className="goal-action">
            <TrendingUp size={16} />
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default CareerGoals;
