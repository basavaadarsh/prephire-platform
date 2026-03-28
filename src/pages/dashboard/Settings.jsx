import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Eye, EyeOff, Lock, Save } from 'lucide-react';
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
          <h1 className="page-title text-slate-900 text-2xl font-semibold">Settings</h1>
          <p className="page-subtitle text-slate-500">Manage your account and preferences</p>
        </div>
      </div>

      <div className="space-y-6">
        <section className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Account Settings</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-900" htmlFor="settings-name">Full Name</label>
              <input
                id="settings-name"
                type="text"
                value={formData.fullName}
                onChange={updateForm('fullName')}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-900" htmlFor="settings-email">Email Address</label>
              <input
                id="settings-email"
                type="email"
                value={formData.email}
                onChange={updateForm('email')}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-900" htmlFor="settings-title">Job Title</label>
              <input
                id="settings-title"
                type="text"
                value={formData.jobTitle}
                onChange={updateForm('jobTitle')}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Job title"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-900" htmlFor="settings-location">Location</label>
              <input
                id="settings-location"
                type="text"
                value={formData.location}
                onChange={updateForm('location')}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="City, Country"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <Save size={16} />
            Save Changes
          </button>
        </section>

        <section className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
              <Lock size={18} />
            </span>
            <h2 className="text-xl font-semibold text-slate-900">Password &amp; Security</h2>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-900" htmlFor="settings-current">Current Password</label>
              <div className="relative mt-2">
                <input
                  id="settings-current"
                  type={showCurrent ? 'text' : 'password'}
                  value={passwordData.current}
                  onChange={updatePassword('current')}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-10 text-sm text-slate-700 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-900" htmlFor="settings-new">New Password</label>
              <input
                id="settings-new"
                type="password"
                value={passwordData.next}
                onChange={updatePassword('next')}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your new password"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-900" htmlFor="settings-confirm">Confirm New Password</label>
              <input
                id="settings-confirm"
                type="password"
                value={passwordData.confirm}
                onChange={updatePassword('confirm')}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your new password"
              />
              {passwordError ? (
                <p className="mt-2 text-xs font-medium text-red-500">{passwordError}</p>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            onClick={handlePasswordSubmit}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
          >
            <Lock size={16} />
            Update Password
          </button>
        </section>

        <section className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Bell size={18} />
            </span>
            <h2 className="text-xl font-semibold text-slate-900">Notification Preferences</h2>
          </div>
          <div className="mt-6 space-y-3">
            {notificationOptions.map((option) => (
              <label
                key={option.id}
                htmlFor={`notify-${option.id}`}
                className="flex items-start gap-4 rounded-xl bg-slate-50/50 px-4 py-3"
              >
                <input
                  id={`notify-${option.id}`}
                  type="checkbox"
                  checked={activeNotifications.includes(option.id)}
                  onChange={() => toggleNotification(option.id)}
                  className="mt-1 h-4 w-4 accent-red-600"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{option.title}</p>
                  <p className="text-xs text-slate-500">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <Save size={16} />
            Save Preferences
          </button>
        </section>

        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h3 className="text-lg font-semibold text-slate-900">About PrepHire CareerForge</h3>
          <p className="mt-3 text-sm text-slate-600">
            PrepHire CareerForge is your comprehensive career development platform. We help
            professionals master skills, discover opportunities, and achieve their career goals.
          </p>
          <div className="mt-4 space-y-1 text-sm font-semibold text-blue-600">
            <p>Version: 1.0.0</p>
            <p>Last Updated: March 2024</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Settings;
