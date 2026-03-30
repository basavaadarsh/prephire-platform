import React from 'react';

const ResumeCard = ({ resume, isEditing, onUpload }) => (
  <section className="profile-card v2-card">
    <div className="card-title">
      <i className="bi bi-file-earmark-text" /> Resume
    </div>
    <div className="resume-card">
      <div className="resume-meta">
        <div className="resume-name">{resume.name || 'No resume uploaded'}</div>
        <div className="resume-updated">
          {resume.updated ? `Last updated: ${resume.updated}` : 'Upload your latest resume.'}
        </div>
      </div>
      <div className="resume-actions">
        {isEditing ? (
          <label className="btn btn-outline-primary" htmlFor="resumeUpload">
            <i className="bi bi-upload" /> Update
          </label>
        ) : (
          <button type="button" className="btn btn-outline-primary" disabled>
            <i className="bi bi-upload" /> Update
          </button>
        )}
        <button type="button" className="btn btn-outline-secondary" disabled={!resume.name}>
          <i className="bi bi-download" /> Download
        </button>
        <input
          id="resumeUpload"
          className="file-input"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={onUpload}
        />
      </div>
      <p className="resume-hint">Keep your resume current to improve recruiter responses.</p>
    </div>
  </section>
);

export default ResumeCard;
