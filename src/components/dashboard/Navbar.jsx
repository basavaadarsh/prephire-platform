import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dashboardData } from '../../data/dashboardData';

const getInitials = (name = '') => name
  .split(' ')
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join('')
  .toUpperCase();

const Navbar = ({ onToggleSidebar, user, onLogout, onNotify }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setMenuOpen(false);
    navigate('/dashboard/profile');
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (onNotify) {
      onNotify({ type: 'info', message: 'Search feature coming soon' });
    }
  };

  const handleNotificationClick = () => {
    if (onNotify) {
      onNotify({ type: 'info', message: 'No new notifications' });
    }
  };

  return (
    <header className="dashboard-navbar">
      <div className="navbar-left">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label={dashboardData.ui.aria.toggleSidebar}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="navbar-search center">
        <form className="search-input" onSubmit={handleSearchSubmit}>
          <i className="bi bi-search" aria-hidden="true" />
          <input
            type="search"
            placeholder={dashboardData.ui.searchDashboard}
            aria-label={dashboardData.ui.searchDashboard}
          />
        </form>
      </div>
      <div className="navbar-user" ref={menuRef}>
        <button
          type="button"
          className="navbar-icon notification"
          aria-label={dashboardData.ui.aria.notifications}
          onClick={handleNotificationClick}
        >
          <i className="bi bi-bell" aria-hidden="true" />
          <span className="notification-badge">{dashboardData.ui.notificationCount}</span>
        </button>
        <div className="navbar-user-info">
          <div className="navbar-name">{user.name}</div>
          <div className="navbar-meta">{user.role || 'Student'}</div>
        </div>
        <button
          type="button"
          className="navbar-menu-button"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {user.profilePhoto ? (
            <img
              className="navbar-avatar"
              src={user.profilePhoto}
              alt={user.name}
            />
          ) : (
            <div className="navbar-avatar avatar-fallback">
              {getInitials(user.name)}
            </div>
          )}
          <i className="bi bi-chevron-down navbar-caret" aria-hidden="true" />
        </button>
        {menuOpen && (
          <div className="navbar-menu" role="menu">
            <button type="button" className="navbar-menu-item" role="menuitem" onClick={handleProfileClick}>
              <i className="bi bi-person" aria-hidden="true" /> Profile
            </button>
            <button
              type="button"
              className="navbar-menu-item"
              role="menuitem"
              onClick={() => {
                setMenuOpen(false);
                if (onLogout) onLogout();
              }}
            >
              <i className="bi bi-box-arrow-right" aria-hidden="true" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
