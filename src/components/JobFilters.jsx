import React, { useState, useEffect, useRef } from 'react';
import { FILTER_CONFIG } from '../config/jobFilterConfig';

const FilterDropdown = ({ filterKey, options, value, onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', flex: 1 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          padding: '0 14px',
          fontSize: '14px',
          color: '#374151',
          backgroundColor: '#ffffff',
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          boxShadow: 'none',
        }}
      >
        <span>{value}</span>
        <svg
          width="14" height="14" fill="none" stroke="#6b7280" strokeWidth="2" viewBox="0 0 24 24"
          style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: '#ffffff',
            border: '1px solid #E5E7EB',
            borderRadius: '10px',
            padding: '6px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
            minWidth: '160px',
          }}
        >
          {options.map((opt) => {
            const isActive = opt === value;
            return (
              <button
                key={opt}
                onClick={() => { onFilterChange(filterKey, opt); setOpen(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  backgroundColor: isActive ? '#22C55E' : 'transparent',
                  color: isActive ? '#ffffff' : '#374151',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = '#F3F4F6'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <span>{opt}</span>
                {isActive && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const JobFilters = ({ filters, onFilterChange }) => (
  <div className="d-flex gap-2 h-100">
    {FILTER_CONFIG.map(({ key, options }) => (
      <FilterDropdown
        key={key}
        filterKey={key}
        options={options}
        value={filters[key]}
        onFilterChange={onFilterChange}
      />
    ))}
  </div>
);

export default JobFilters;
