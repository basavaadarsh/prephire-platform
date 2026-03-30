import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { myServicesData } from '../../data/myServicesData';

const statusClassMap = {
  Pending: 'status-pending',
  Active: 'status-active',
  Completed: 'status-completed',
  Interested: 'status-interested',
};

const MyServices = () => {
  const { user } = useOutletContext();
  const selectedInterest = user?.selectedServiceInterest;

  return (
    <div className="dashboard-page my-services-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">My Services</h1>
          <p className="page-subtitle">Track your service requests and active engagements.</p>
        </div>
      </div>

      {selectedInterest ? (
        <div className="services-alert">
          <div className="services-alert-icon">
            <i className="bi bi-lightning-charge" />
          </div>
          <div>
            <div className="services-alert-title">Service interest noted</div>
            <div className="services-alert-text">
              You're currently interested in {selectedInterest.replace(/-/g, ' ')}.
            </div>
          </div>
        </div>
      ) : null}

      <div className="services-grid">
        {myServicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card-header">
              <div>
                <div className="service-name">{service.name}</div>
                <div className="service-description">{service.description}</div>
              </div>
              <span className={`service-status ${statusClassMap[service.status] || ''}`}>
                {service.status}
              </span>
            </div>
            <div className="service-footer">
              {service.tag ? <span className="service-tag">{service.tag}</span> : null}
              <button type="button" className="btn btn-outline-primary btn-sm">
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
