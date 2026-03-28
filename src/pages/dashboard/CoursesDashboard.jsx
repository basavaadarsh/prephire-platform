import React, { useMemo, useState } from 'react';
import { Clock, User } from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const CoursesDashboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const courses = dashboardData.learningCourses;

  const counts = useMemo(() => ({
    all: courses.length,
    progress: courses.filter((course) => course.status === 'In Progress').length,
    completed: courses.filter((course) => course.status === 'Completed').length,
  }), [courses]);

  const visibleCourses = useMemo(() => {
    if (activeTab === 'progress') return courses.filter((course) => course.status === 'In Progress');
    if (activeTab === 'completed') return courses.filter((course) => course.status === 'Completed');
    return courses;
  }, [activeTab, courses]);

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Learning Courses</h1>
          <p className="page-subtitle">Explore and continue your learning journey</p>
        </div>
      </div>

      <div className="courses-tabs">
        <button
          type="button"
          className={`courses-tab${activeTab === 'all' ? ' active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Courses ({counts.all})
        </button>
        <button
          type="button"
          className={`courses-tab${activeTab === 'progress' ? ' active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          In Progress ({counts.progress})
        </button>
        <button
          type="button"
          className={`courses-tab${activeTab === 'completed' ? ' active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed ({counts.completed})
        </button>
      </div>

      <div className="courses-grid">
        {visibleCourses.map((course) => (
          <div key={course.id} className="learning-course-card">
            <div className={`learning-course-media theme-${course.theme}`}>
              {course.image ? (
                <img src={course.image} alt={course.title} />
              ) : null}
              <span className={`course-badge ${course.status === 'Completed' ? 'badge-completed' : 'badge-progress'}`}>
                {course.status}
              </span>
            </div>
            <div className="learning-course-body">
              <div className="learning-course-provider">{course.provider}</div>
              <div className="learning-course-title">{course.title}</div>
              <div className="learning-course-instructor">
                <User size={14} />
                <span>{course.instructor}</span>
              </div>
              <div className="learning-course-progress-row">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <progress className="learning-course-progress" value={course.progress} max="100" />
              <div className="learning-course-footer">
                <div className="learning-course-time">
                  <Clock size={14} />
                  <span>{course.hours} hours</span>
                </div>
                <button
                  type="button"
                  className={`learning-course-action ${course.status === 'Completed' ? 'secondary' : 'primary'}`}
                >
                  {course.status === 'Completed' ? 'View Certificate' : 'Continue Learning'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesDashboard;
