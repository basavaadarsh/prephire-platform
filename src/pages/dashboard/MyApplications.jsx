import React, { useMemo, useState } from 'react';
import ApplicationsTable from '../../components/dashboard/ApplicationsTable';
import { dashboardData } from '../../data/dashboardData';

const MyApplications = () => {
  const allStatus = dashboardData.statusOptions[0];
  const [statusFilter, setStatusFilter] = useState(allStatus);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApplications = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return dashboardData.jobApplications.filter((application) => {
      const matchesStatus = statusFilter === allStatus || application.status === statusFilter;
      const matchesQuery = !query
        || application.role.toLowerCase().includes(query)
        || application.company.toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }, [searchQuery, statusFilter, allStatus]);

  const summary = useMemo(() => {
    const summaryMap = dashboardData.statusOptions.reduce((acc, status) => {
      if (status !== allStatus) acc[status] = 0;
      return acc;
    }, {});

    dashboardData.jobApplications.forEach((application) => {
      if (summaryMap[application.status] !== undefined) {
        summaryMap[application.status] += 1;
      }
    });

    return summaryMap;
  }, [allStatus]);

  return (
    <div className="dashboard-page page-fade">
      <div className="page-header">
        <div>
          <h1 className="page-title">{dashboardData.ui.applicationsTitle}</h1>
          <p className="page-subtitle">{dashboardData.ui.applicationsSubtitle}</p>
        </div>
        <div className="page-filters">
          <input
            type="search"
            className="form-control"
            placeholder={dashboardData.ui.searchPlaceholder}
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            aria-label={dashboardData.ui.searchPlaceholder}
          />
          <select
            className="form-select"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            aria-label={dashboardData.ui.statusFilterLabel}
          >
            {dashboardData.statusOptions.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row g-3">
        {dashboardData.statusOptions.filter((status) => status !== allStatus).map((status) => (
          <div key={status} className="col-md-3 col-6">
            <div className="summary-card">
              <div className="summary-title">{status}</div>
              <div className="summary-value">{summary[status]}</div>
            </div>
          </div>
        ))}
      </div>

      <ApplicationsTable applications={filteredApplications} />
    </div>
  );
};

export default MyApplications;
