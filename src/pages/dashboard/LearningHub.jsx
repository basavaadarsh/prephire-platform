import React from 'react';
import { motion } from 'framer-motion';
import { dashboardData } from '../../data/dashboardData';

const LearningHub = () => (
  <motion.div
    className="dashboard-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <section className="learning-hero">
      <div>
        <div className="hero-badge">{dashboardData.ui.heroBadge}</div>
        <h1>{dashboardData.ui.learning.heroTitle}</h1>
        <p>{dashboardData.ui.learning.heroSubtitle}</p>
      </div>
      <button type="button" className="btn btn-primary">
        Explore learning paths
      </button>
    </section>

    <section className="learning-grid">
      {dashboardData.ui.learning.cards.map((card) => (
        <motion.div
          key={card.title}
          className="learning-card"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="learning-card-title">{card.title}</div>
          <div className="learning-card-value">{card.value}</div>
          <div className="learning-card-caption">{card.caption}</div>
        </motion.div>
      ))}
    </section>

    <section className="learning-featured">
      <div className="section-header">
        <div>
          <h2 className="section-title">{dashboardData.ui.learning.featuredTitle}</h2>
          <p className="section-subtitle">Grow faster with guided curricula.</p>
        </div>
        <button type="button" className="btn btn-outline-secondary">View all</button>
      </div>
      <div className="learning-featured-grid">
        {dashboardData.ui.learning.featured.map((item) => (
          <motion.div
            key={item.title}
            className="learning-featured-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="learning-featured-title">{item.title}</div>
            <div className="learning-featured-meta">{item.meta}</div>
            <button type="button" className="btn btn-outline-primary">Start path</button>
          </motion.div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default LearningHub;
