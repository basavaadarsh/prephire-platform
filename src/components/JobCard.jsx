import React, { useState } from 'react';

const JobCard = ({ job }) => {
  const [saved, setSaved] = useState(false);
  const [bookmarkHover, setBookmarkHover] = useState(false);

  const badges = [
    { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, text: job.location },
    { icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>, text: job.type },
    { icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>, text: job.salary },
    { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, text: job.experience },
  ];

  return (
    <div
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.03)';
      }}
      style={{
        background: '#ffffff',
        border: '1px solid #E6EAF0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '18px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '24px',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {/* â”€â”€ Left: all job info â”€â”€ */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Title + Company */}
        <h5 style={{ fontSize: '22px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>
          {job.title}
        </h5>
        <p style={{ fontSize: '15px', color: '#6b7280', marginBottom: '14px' }}>
          {job.company}
        </p>

        {/* Badges â€” pill with border */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          {badges.map(({ icon, text }) => (
            <span
              key={text}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                border: '1px solid #e5e7eb',
                borderRadius: '20px',
                padding: '4px 10px',
                fontSize: '12px',
                color: '#374151',
                background: '#f9fafb',
              }}
            >
              <svg width="12" height="12" fill="none" stroke="#6b7280" strokeWidth="2" viewBox="0 0 24 24">{icon}</svg>
              {text}
            </span>
          ))}
        </div>

        {/* Description */}
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '14px', lineHeight: '1.6' }}>
          {job.description}
        </p>

        {/* Skill tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {job.skills.map((skill) => (
            <span
              key={skill}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              style={{
                background: '#e8efff',
                color: '#2563eb',
                borderRadius: '20px',
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: 500,
                transition: 'transform 0.15s ease',
                cursor: 'default',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* â”€â”€ Right: [bookmark + Apply Now] then Posted date below â”€â”€ */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          gap: '10px',
          flexShrink: 0,
        }}
      >
        {/* Row: bookmark icon + Apply Now button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Bookmark */}
          <button
            onClick={() => setSaved(!saved)}
            onMouseEnter={() => setBookmarkHover(true)}
            onMouseLeave={() => setBookmarkHover(false)}
            title={saved ? 'Unsave' : 'Save job'}
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              background: saved || bookmarkHover ? '#22c55e' : '#ffffff',
              color: saved || bookmarkHover ? '#ffffff' : '#6b7280',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: 0,
              flexShrink: 0,
            }}
          >
            <svg width="15" height="15" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>

          {/* Apply Now */}
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              borderRadius: '10px',
              padding: '10px 18px',
              fontWeight: 500,
              fontSize: '14px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Apply Now
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>

        {/* Posted date â€” right-aligned below apply button */}
        <span style={{ fontSize: '12px', color: '#9ca3af', whiteSpace: 'nowrap' }}>
          Posted {job.postedDate}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
