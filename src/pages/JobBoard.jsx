import React, { useState, useMemo, useCallback } from 'react';
import JobCard from '../components/JobCard';
import JobSearch from '../components/JobSearch';
import JobFilters from '../components/JobFilters';
import Pagination from '../components/Pagination';
import jobs from '../data/jobsData';
import { DEFAULT_FILTERS, matchesFilters } from '../config/jobFilterConfig';

const JOBS_PER_PAGE = 6;

const JobBoard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // Single filters object — adding a new filter = one line in jobFilterConfig.js only.
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [savedCount] = useState(0);

  const filteredJobs = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.skills.some((s) => s.toLowerCase().includes(query));

      return matchesSearch && matchesFilters(job, filters);
    });
  }, [searchQuery, filters]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * JOBS_PER_PAGE;
    return filteredJobs.slice(start, start + JOBS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, []);

  // Generic handler — works for any filter key from FILTER_CONFIG.
  const handleFilterChange = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setFilters(DEFAULT_FILTERS);
    setCurrentPage(1);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      {/* ── Hero section: title + subtitle + search row ── */}
      <section style={{ backgroundColor: '#F1F5F9', paddingTop: '64px', paddingBottom: '48px' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 600, lineHeight: '56px', color: '#111827', marginBottom: '16px' }}>
            Job Board
          </h1>
          <p style={{ fontSize: '18px', color: '#6B7280', fontWeight: 400, marginBottom: '28px' }}>
            Find your dream job from our partner companies
          </p>

          {/* Search + Filters row — inside hero, same container */}
          <div className="row g-3 align-items-center">
            <div className="col-12 col-lg-7">
              <JobSearch value={searchQuery} onChange={handleSearchChange} />
            </div>
            <div className="col-12 col-lg-5">
              <JobFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Jobs section: count + cards + pagination ── */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1140px', paddingTop: '28px', paddingBottom: '48px' }}>

          {/* Results meta */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p style={{ fontSize: '14px', color: '#4B5563', fontWeight: 500, marginBottom: 0 }}>
              {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
            </p>
            <button
              className="d-flex align-items-center gap-2"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#22C55E';
                e.currentTarget.style.borderColor = '#22C55E';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.color = '#374151';
              }}
              style={{ fontSize: '14px', color: '#374151', fontWeight: 500, background: 'white', border: '1px solid #E6EAF0', borderRadius: '10px', padding: '8px 16px', cursor: 'pointer', transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease' }}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              Saved Jobs ({savedCount})
            </button>
          </div>

          {/* Job listings */}
          {paginatedJobs.length > 0 ? (
            paginatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="text-center py-5">
              <p style={{ fontSize: '16px', color: '#6b7280' }}>No jobs found matching your criteria.</p>
              <button
                className="btn btn-outline-primary mt-2"
                style={{ fontSize: '14px' }}
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
};

export default JobBoard;

