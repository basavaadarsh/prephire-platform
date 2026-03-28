import React from 'react';
import { HiOutlineInbox } from 'react-icons/hi2';
import { Calendar, MapPin } from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const ApplicationsTable = ({ applications }) => {
  return (
    <div className="applications-card">
      <div className="applications-header">
        <div>
          <div className="section-title">{dashboardData.ui.applicationsSectionTitle}</div>
          <div className="section-subtitle">{dashboardData.ui.applicationsSectionSubtitle}</div>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <HiOutlineInbox />
          </div>
          <div className="empty-title">{dashboardData.ui.emptyApplicationsTitle}</div>
          <div className="empty-text">{dashboardData.ui.noApplications}</div>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="applications-table">
            <thead>
              <tr>
                <th>{dashboardData.ui.tableHeaders.role}</th>
                <th>{dashboardData.ui.tableHeaders.company}</th>
                <th>{dashboardData.ui.tableHeaders.location}</th>
                <th>{dashboardData.ui.tableHeaders.status}</th>
                <th>{dashboardData.ui.tableHeaders.date}</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.role}</td>
                  <td>{application.company}</td>
                  <td>
                    <span className="table-meta">
                      <MapPin size={14} />
                      {application.location}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${dashboardData.statusClassMap[application.status]}`}>
                      {application.status}
                    </span>
                  </td>
                  <td>
                    <span className="table-meta">
                      <Calendar size={14} />
                      {application.date}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationsTable;
