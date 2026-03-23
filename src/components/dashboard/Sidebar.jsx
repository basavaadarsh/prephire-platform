import React from 'react';
import { NavLink } from 'react-router-dom';
import { dashboardData } from '../../data/dashboardData';

const getInitials = (name = '') => name
  .split(' ')
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join('')
  .toUpperCase();

const Sidebar = ({ user, onLogout }) => (
  <aside className="dashboard-sidebar">
    <div className="sidebar-brand">
      <div className="brand-mark">{dashboardData.ui.brandMark}</div>
      <div>
        <div className="brand-title">{dashboardData.ui.brandTitle}</div>
        <div className="brand-subtitle">{dashboardData.ui.brandSubtitle}</div>
      </div>
    </div>

    <nav className="sidebar-nav">
      {dashboardData.navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>

    <button
      type="button"
      className="sidebar-logout"
      onClick={onLogout}
      aria-label="Logout"
    >
      {dashboardData.ui.logout}
    </button>

    <div className="sidebar-profile">
      {user.profilePhoto ? (
        <img className="profile-avatar" src={user.profilePhoto} alt={user.name} />
      ) : (
        <div className="profile-avatar avatar-fallback">
          {getInitials(user.name)}
        </div>
      )}
      <div>
        <div className="profile-name">{user.name}</div>
        <div className="profile-email">{user.email}</div>
      </div>
    </div>
  </aside>
);

export default Sidebar;
