import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import StatCard from '../../components/dashboard/StatCard';
import AnalyticsCharts from '../../components/dashboard/charts/AnalyticsCharts';
import { dashboardData } from '../../data/dashboardData';

const iconMap = {
  courses: <i className="bi bi-journal-bookmark" />,
  applications: <i className="bi bi-buildings" />,
  interviews: <i className="bi bi-alarm" />,
  certificates: <i className="bi bi-award" />,
  skills: <i className="bi bi-bullseye" />,
  profile: <i className="bi bi-graph-up" />,
};

const quickActionIcons = {
  book: <i className="bi bi-book" />,
  briefcase: <i className="bi bi-briefcase" />,
  clock: <i className="bi bi-clock" />,
  target: <i className="bi bi-bullseye" />,
};

const DashboardHome = () => {
  const { user } = useOutletContext();
  return (
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="hero-banner">
        <div className="hero-content">
          <h1>
            {dashboardData.ui.heroTitlePrefix} {user?.name || 'User'}{dashboardData.ui.heroTitleSuffix}{' '}
            <span className="hero-emoji" role="img" aria-label="celebrate">
              🎉
            </span>
          </h1>
          <p>{dashboardData.ui.heroSubtitle}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary">{dashboardData.ui.heroPrimary}</button>
            <button type="button" className="btn btn-outline-light">{dashboardData.ui.heroSecondary}</button>
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-header">
          <h2 className="section-title">{dashboardData.ui.progressTitle}</h2>
        </div>
        <div className="row g-3">
          {dashboardData.statistics.map((stat) => (
            <div key={stat.id} className="col-12 col-md-6 col-xl-4">
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

      <section className="analytics-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">{dashboardData.ui.analyticsTitle}</h2>
            {dashboardData.ui.analyticsSubtitle ? (
              <p className="section-subtitle">{dashboardData.ui.analyticsSubtitle}</p>
            ) : null}
          </div>
        </div>
        <AnalyticsCharts />
      </section>

      <section className="quick-actions">
        <div className="section-header">
          <div>
            <h2 className="section-title">{dashboardData.ui.quickActionsTitle}</h2>
            <p className="section-subtitle">{dashboardData.ui.quickActionsSubtitle}</p>
          </div>
        </div>
        <div className="quick-actions-grid">
          {dashboardData.ui.quickActions.map((action) => (
            <motion.button
              key={action.title}
              type="button"
              className="quick-action-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="quick-action-icon">
                {quickActionIcons[action.icon]}
              </div>
              <div>
                <div className="quick-action-title">{action.title}</div>
                <div className="quick-action-label">{action.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default DashboardHome;
