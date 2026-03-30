import React from 'react';
import { dashboardData } from '../../data/dashboardData';

const CertificatesDashboard = () => (
  <div className="dashboard-page">
    <div className="page-header">
      <div>
        <h1 className="page-title">Certificates & Credentials</h1>
        <p className="page-subtitle">Showcase your professional achievements</p>
      </div>
    </div>

    <div className="certificates-grid">
      {dashboardData.certificates.map((certificate) => (
        <div key={certificate.id} className="certificate-card">
          <div className="certificate-icon">
            <i className="bi bi-trophy" />
          </div>
          <div className="certificate-title">{certificate.title}</div>
          <div className="certificate-issuer">{certificate.issuer}</div>
          <div className="certificate-dates">
            <div>
              <span>ISSUED</span>
              <strong>{certificate.issued}</strong>
            </div>
            <div>
              <span>EXPIRES</span>
              <strong>{certificate.expires}</strong>
            </div>
          </div>
          <div className="certificate-id">
            <div className="certificate-id-label">Credential ID</div>
            <div className="certificate-id-value">{certificate.credentialId}</div>
          </div>
          <div className="certificate-actions">
            <button type="button" className="certificate-button view">
              <i className="bi bi-eye" />
              View
            </button>
            <button type="button" className="certificate-button download">
              <i className="bi bi-download" />
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CertificatesDashboard;
