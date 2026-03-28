import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ApplicationsTable from '../../components/dashboard/ApplicationsTable';
import { dashboardData } from '../../data/dashboardData';

const MyApplications = () => {
  const allStatus = dashboardData.statusOptions[0];

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
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="page-header">
        <div>
          <h1 className="page-title">{dashboardData.ui.applicationsTitle}</h1>
          <p className="page-subtitle">{dashboardData.ui.applicationsSubtitle}</p>
        </div>
      </div>

      <ApplicationsTable applications={dashboardData.jobApplications} />

      <div className="summary-row">
        {dashboardData.statusOptions.filter((status) => status !== allStatus).map((status) => (
          <div key={status} className="summary-item">
            <div className="summary-card">
              <div className="summary-value">{summary[status]}</div>
              <div className="summary-title">{status}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyApplications;
