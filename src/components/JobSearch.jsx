import React, { useState } from 'react';

const JobSearch = ({ value, onChange }) => {
  const [focused, setFocused] = useState(false);

  const groupStyle = {
    height: '48px',
    borderRadius: '12px',
    border: focused ? '1px solid #9CA3AF' : '1px solid #E5E7EB',
    boxShadow: focused ? '0 0 0 3px rgba(156,163,175,0.35)' : 'none',
    transition: 'border 0.2s ease, box-shadow 0.2s ease',
    overflow: 'hidden',
    display: 'flex',
  };

  const iconSpanStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: focused ? '#ffffff' : '#f9fafb',
    border: 'none',
    borderRight: 'none',
    paddingLeft: '14px',
    paddingRight: '8px',
    transition: 'background-color 0.2s ease',
  };

  const inputStyle = {
    flex: 1,
    height: '48px',
    border: 'none',
    fontSize: '14px',
    color: '#111827',
    backgroundColor: focused ? '#ffffff' : '#f9fafb',
    boxShadow: 'none',
    outline: 'none',
    padding: '0 14px 0 0',
    transition: 'background-color 0.2s ease',
  };

  return (
    <div style={groupStyle}>
      <span style={iconSpanStyle}>
        <svg width="16" height="16" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search by job title or company..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={inputStyle}
      />
    </div>
  );
};

export default JobSearch;
