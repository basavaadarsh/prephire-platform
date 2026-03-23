import React, { useState } from 'react';
import { HiOutlineInbox } from 'react-icons/hi2';
import { dashboardData } from '../../data/dashboardData';
import ApplicationModal from './ApplicationModal';

const ApplicationsTable = ({ applications }) => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApplication(null);
  };

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
                <th>{dashboardData.ui.tableHeaders.date}</th>
                <th>{dashboardData.ui.tableHeaders.status}</th>
                <th>{dashboardData.ui.tableHeaders.actions}</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.role}</td>
                  <td>{application.company}</td>
                  <td>{application.date}</td>
                  <td>
                    <span className={`status-badge ${dashboardData.statusClassMap[application.status]}`}>
                      {application.status}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="table-action"
                      onClick={() => handleOpenModal(application)}
                    >
                      {dashboardData.ui.tableHeaders.actionLabel}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={selectedApplication}
      />
    </div>
  );
};

export default ApplicationsTable;
