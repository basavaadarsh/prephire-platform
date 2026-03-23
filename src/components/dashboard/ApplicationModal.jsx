import React from 'react';

const ApplicationModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal-card">
        <div className="modal-header">
          <h3 className="modal-title">Application Details</h3>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-row">
            <span className="modal-label">Job Title</span>
            <span className="modal-value">{data.role}</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Company</span>
            <span className="modal-value">{data.company}</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Applied Date</span>
            <span className="modal-value">{data.date}</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Status</span>
            <span className="modal-value">{data.status}</span>
          </div>
          {data.salary ? (
            <div className="modal-row">
              <span className="modal-label">Salary</span>
              <span className="modal-value">{data.salary}</span>
            </div>
          ) : null}
          {data.location ? (
            <div className="modal-row">
              <span className="modal-label">Location</span>
              <span className="modal-value">{data.location}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
