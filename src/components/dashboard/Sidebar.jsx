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

const Sidebar = ({ user, onLogout }) => {
  return (
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
          end={item.path === '/dashboard'}
          className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
        >
          <span className="sidebar-link-left">
            <span className="sidebar-link-icon"><i className={`bi ${item.icon}`} /></span>
            <span>{item.label}</span>
          </span>
        </NavLink>
      ))}

      <div className="sidebar-spacer" />

      <div className="sidebar-bottom">
        {dashboardData.navigationBottom?.map((item) => (
          item.label === 'Logout' ? (
            <button
              key={item.label}
              type="button"
              className="sidebar-link sidebar-logout-link"
              onClick={onLogout}
              aria-label={item.label}
            >
              <span className="sidebar-link-left">
                <span className="sidebar-link-icon"><i className={`bi ${item.icon}`} /></span>
                <span>{item.label}</span>
              </span>
            </button>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
            >
              <span className="sidebar-link-left">
                <span className="sidebar-link-icon"><i className={`bi ${item.icon}`} /></span>
                <span>{item.label}</span>
              </span>
            </NavLink>
          )
        ))}
      </div>
    </nav>

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
};

export default Sidebar;
