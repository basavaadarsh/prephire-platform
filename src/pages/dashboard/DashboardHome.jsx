import React, { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineFire,
  HiOutlineCalendar,
  HiOutlineCheckBadge,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import StatCard from '../../components/dashboard/StatCard';
import { dashboardData } from '../../data/dashboardData';

const iconMap = {
  courses: <HiOutlineAcademicCap />,
  applications: <HiOutlineBriefcase />,
  streak: <HiOutlineFire />,
  interviews: <HiOutlineCalendar />,
  completed: <HiOutlineCheckBadge />,
};

const DashboardHome = () => {
  const { user } = useOutletContext();
  const todayLabel = useMemo(
    () => new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }),
    []
  );

  return (
    <div className="dashboard-page page-fade">
      <section className="dashboard-section">
        <div className="welcome-card">
          <div>
            <div className="welcome-title">{dashboardData.ui.welcomeGreeting}, {user?.name || 'User'}</div>
            <div className="welcome-date">{todayLabel}</div>
            <p className="welcome-text">{dashboardData.ui.welcomeLine}</p>
          </div>
          <div className="welcome-actions">
            <button type="button" className="btn btn-primary">{dashboardData.ui.primaryAction}</button>
            <button type="button" className="btn btn-outline-secondary">{dashboardData.ui.secondaryAction}</button>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">{dashboardData.ui.progressTitle}</h2>
        </div>
        <div className="row g-3">
          {dashboardData.statistics.map((stat) => (
            <div key={stat.id} className="col-12 col-md-6 col-xl-3">
              <StatCard
                icon={iconMap[stat.icon]}
                title={stat.title}
                value={stat.value}
                trend={stat.trend}
                color={stat.color}
                animated
              />
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">{dashboardData.ui.enrolledCoursesTitle}</h2>
        </div>
        <div className="row g-3">
          {dashboardData.enrolledCourses.length === 0 ? (
            <div className="col-12">
              <div className="empty-state">
                <HiOutlineSparkles className="empty-icon" />
                <div className="empty-title">{dashboardData.ui.emptyCoursesTitle}</div>
                <div className="empty-text">{dashboardData.ui.emptyCoursesText}</div>
              </div>
            </div>
          ) : (
            dashboardData.enrolledCourses.map((course) => (
              <div key={course.id} className="col-12">
                <div className="course-card">
                  <div className="course-header">
                    <div>
                      <div className="course-title">{course.name}</div>
                      <div className="course-meta">
                        {course.completedLessons}/{course.totalLessons} {dashboardData.ui.lessonsCompletedLabel}
                      </div>
                    </div>
                    <div className="course-date">{dashboardData.ui.dueLabel} {course.dueDate}</div>
                  </div>
                  <progress
                    className="course-progress"
                    value={course.progressPercent}
                    max="100"
                  />
                  <div className="course-progress-label">
                    {course.progressPercent}% {dashboardData.ui.courseProgressSuffix}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
