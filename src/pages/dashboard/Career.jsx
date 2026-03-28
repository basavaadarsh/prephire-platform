import React, { useMemo, useState } from 'react';
import { ExternalLink, MapPin, Briefcase, DollarSign } from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const filterOptions = ['All', 'Full-time', 'Part-time', 'Contract', 'Remote'];

const Career = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const jobs = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return dashboardData.jobDiscovery.filter((job) => {
      const matchesFilter = activeFilter === 'All' || job.type === activeFilter;
      const matchesQuery = !normalized
        || job.title.toLowerCase().includes(normalized)
        || job.company.toLowerCase().includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Job Discovery</h1>
          <p className="page-subtitle">Find your next opportunity</p>
        </div>
      </div>

      <div className="job-discovery-panel">
        <div className="job-search">
          <input
            type="search"
            placeholder="Search by job title or company..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="job-filters">
          <span className="job-filter-label">Job Type:</span>
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`job-filter${activeFilter === option ? ' active' : ''}`}
              onClick={() => setActiveFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {jobs.length === 0 ? (
        <div className="job-empty">
          No jobs found matching your criteria.
        </div>
      ) : (
        <div className="job-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-header">
                <div className={`job-avatar ${job.accent}`}>{job.initial}</div>
                <div className="job-title-block">
                  <div className="job-title">{job.title}</div>
                  <div className="job-company">{job.company}</div>
                </div>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-meta">
                <div><MapPin size={14} /> {job.location}</div>
                <div><DollarSign size={14} /> {job.salary}</div>
                <div><Briefcase size={14} /> {job.experience}</div>
              </div>
              <div className="job-skills">
                {job.skills.map((skill) => (
                  <span key={skill} className="job-skill">{skill}</span>
                ))}
              </div>
              <div className="job-actions">
                <button type="button" className="job-btn outline">Save</button>
                <button type="button" className="job-btn primary">
                  <ExternalLink size={16} />
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Career;
