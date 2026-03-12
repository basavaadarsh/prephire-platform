/**
 * FILTER_CONFIG — single source of truth for all job filters.
 *
 * To add a new filter (e.g. Experience Level, Salary Range):
 *   1. Add the field to each job object in jobsData.js
 *   2. Add a new entry here with { key, label, defaultValue, options }
 *   3. Optionally provide a custom `matcher` for non-exact matching logic.
 *
 * No changes needed in JobBoard.jsx or JobFilters.jsx.
 */

export const FILTER_CONFIG = [
  {
    key: 'location',
    label: 'Location',
    defaultValue: 'All Locations',
    options: [
      'All Locations',
      'Bangalore',
      'Mumbai',
      'Hyderabad',
      'Chennai',
      'Pune',
      'Gurgaon',
      'Remote',
    ],
    // Default exact match on job.location — no custom matcher needed.
  },
  {
    key: 'type',
    label: 'Job Type',
    defaultValue: 'All Types',
    options: ['All Types', 'Full-time', 'Part-time', 'Remote'],
    // Default exact match on job.type — no custom matcher needed.
  },

  // ── Future filters — uncomment and fill in options to activate ──────────────

  // {
  //   key: 'experienceLevel',
  //   label: 'Experience',
  //   defaultValue: 'All Levels',
  //   options: ['All Levels', 'Fresher (0-1 yr)', 'Junior (1-3 yrs)', 'Mid (3-5 yrs)', 'Senior (5+ yrs)'],
  //   matcher: (job, value) => job.experienceLevel === value,
  // },

  // {
  //   key: 'salaryRange',
  //   label: 'Salary Range',
  //   defaultValue: 'All Salaries',
  //   options: ['All Salaries', 'Under ₹5 LPA', '₹5-10 LPA', '₹10-20 LPA', '₹20+ LPA'],
  //   matcher: (job, value) => job.salaryBucket === value,
  // },
];

/**
 * Build the default filters state from FILTER_CONFIG.
 * Used to initialise useState and to reset all filters.
 */
export const DEFAULT_FILTERS = FILTER_CONFIG.reduce((acc, { key, defaultValue }) => {
  acc[key] = defaultValue;
  return acc;
}, {});

/**
 * Generic filter matcher.
 * Iterates over FILTER_CONFIG and returns true only if the job passes every
 * active filter. Uses each filter's custom `matcher` when provided, otherwise
 * falls back to a strict equality check on `job[key]`.
 *
 * @param {object} job     - A job object from jobsData.js
 * @param {object} filters - Current filter state { [key]: selectedValue }
 * @returns {boolean}
 */
export const matchesFilters = (job, filters) =>
  FILTER_CONFIG.every(({ key, defaultValue, matcher }) => {
    const value = filters[key];
    if (value === defaultValue) return true;
    return matcher ? matcher(job, value) : job[key] === value;
  });
