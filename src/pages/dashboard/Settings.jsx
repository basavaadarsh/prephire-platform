import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { dashboardData } from '../../data/dashboardData';

const notificationOptions = [
  {
    id: 'email',
    title: 'Email Notifications',
    description: 'Receive email notifications',
  },
  {
    id: 'job-alerts',
    title: 'Job Alerts',
    description: 'Get notified about new job opportunities',
  },
  {
    id: 'course-updates',
    title: 'Course Updates',
    description: 'Receive course and learning updates',
  },
  {
    id: 'interview-reminders',
    title: 'Interview Reminders',
    description: 'Get interview reminders and tips',
  },
  {
    id: 'weekly-digest',
    title: 'Weekly Digest',
    description: 'Receive weekly digest of your progress',
  },
];

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: dashboardData.user.name,
    email: dashboardData.user.email,
    jobTitle: dashboardData.user.role,
    location: 'San Francisco, CA',
  });
  const [passwordData, setPasswordData] = useState({
    current: '',
    next: '',
    confirm: '',
  });
  const [showCurrent, setShowCurrent] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [activeNotifications, setActiveNotifications] = useState([
    'email',
    'job-alerts',
    'course-updates',
    'interview-reminders',
    'weekly-digest',
  ]);

  const updateForm = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const updatePassword = (field) => (event) => {
    setPasswordData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const toggleNotification = (id) => {
    setActiveNotifications((prev) => (
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    ));
  };

  const handlePasswordSubmit = () => {
    if (passwordData.next && passwordData.next !== passwordData.confirm) {
      setPasswordError('Passwords do not match.');
      return;
    }
    setPasswordError('');
  };

  return (
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your account and preferences</p>
        </div>
      </div>

      <div className="settings-stack">
        <section className="settings-section">
          <h2 className="settings-title">Account Settings</h2>
          <div className="settings-grid">
            <div>
              <label className="form-label" htmlFor="settings-name">Full Name</label>
              <input
                id="settings-name"
                type="text"
                value={formData.fullName}
                onChange={updateForm('fullName')}
                className="form-control"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="settings-email">Email Address</label>
              <input
                id="settings-email"
                type="email"
                value={formData.email}
                onChange={updateForm('email')}
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="settings-title">Job Title</label>
              <input
                id="settings-title"
                type="text"
                value={formData.jobTitle}
                onChange={updateForm('jobTitle')}
                className="form-control"
                placeholder="Job title"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="settings-location">Location</label>
              <input
                id="settings-location"
                type="text"
                value={formData.location}
                onChange={updateForm('location')}
                className="form-control"
                placeholder="City, Country"
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary settings-action"
          >
            <i className="bi bi-save" />
            Save Changes
          </button>
        </section>

        <section className="settings-section">
          <div className="settings-section-header">
            <span className="settings-icon danger">
              <i className="bi bi-lock" />
            </span>
            <h2 className="settings-title">Password &amp; Security</h2>
          </div>
          <div className="settings-grid">
            <div>
              <label className="form-label" htmlFor="settings-current">Current Password</label>
              <div className="settings-input-wrap">
                <input
                  id="settings-current"
                  type={showCurrent ? 'text' : 'password'}
                  value={passwordData.current}
                  onChange={updatePassword('current')}
                  className="form-control"
                  placeholder="Enter your current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent((prev) => !prev)}
                  className="settings-eye"
                >
                  <i className={`bi ${showCurrent ? 'bi-eye-slash' : 'bi-eye'}`} />
                </button>
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="settings-new">New Password</label>
              <input
                id="settings-new"
                type="password"
                value={passwordData.next}
                onChange={updatePassword('next')}
                className="form-control"
                placeholder="Enter your new password"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="settings-confirm">Confirm New Password</label>
              <input
                id="settings-confirm"
                type="password"
                value={passwordData.confirm}
                onChange={updatePassword('confirm')}
                className="form-control"
                placeholder="Confirm your new password"
              />
              {passwordError ? (
                <p className="settings-error">{passwordError}</p>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            onClick={handlePasswordSubmit}
            className="btn btn-danger settings-action"
          >
            <i className="bi bi-lock" />
            Update Password
          </button>
        </section>

        <section className="settings-section">
          <div className="settings-section-header">
            <span className="settings-icon">
              <i className="bi bi-bell" />
            </span>
            <h2 className="settings-title">Notification Preferences</h2>
          </div>
          <div className="settings-checklist">
            {notificationOptions.map((option) => (
              <label
                key={option.id}
                htmlFor={`notify-${option.id}`}
                className="settings-check-item"
              >
                <input
                  id={`notify-${option.id}`}
                  type="checkbox"
                  checked={activeNotifications.includes(option.id)}
                  onChange={() => toggleNotification(option.id)}
                  className="settings-checkbox"
                />
                <div>
                  <p className="settings-check-title">{option.title}</p>
                  <p className="settings-check-text">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-primary settings-action"
          >
            <i className="bi bi-save" />
            Save Preferences
          </button>
        </section>

        <section className="settings-about">
          <h3>About PrepHire CareerForge</h3>
          <p>
            PrepHire CareerForge is your comprehensive career development platform. We help
            professionals master skills, discover opportunities, and achieve their career goals.
          </p>
          <div className="settings-meta">
            <span>Version: 1.0.0</span>
            <span>Last Updated: March 2024</span>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Settings;
