import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineBell, HiOutlineChevronDown, HiOutlineUser, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { dashboardData } from '../../data/dashboardData';

const getInitials = (name = '') => name
  .split(' ')
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join('')
  .toUpperCase();

const Navbar = ({ onToggleSidebar, user, onLogout }) => {
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
      <div className="navbar-search">
        <input
          type="search"
          className="form-control"
          placeholder={dashboardData.ui.searchDashboard}
          aria-label={dashboardData.ui.searchDashboard}
        />
      </div>
    </div>
    <div className="navbar-user" ref={menuRef}>
      <button
        type="button"
        className="navbar-icon"
        aria-label={dashboardData.ui.aria.notifications}
      >
        <HiOutlineBell />
      </button>
      <div className="navbar-user-info">
        <div className="navbar-name">{user.name}</div>
        <div className="navbar-meta">{dashboardData.ui.joinedLabel} {user.joinDate}</div>
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
        <HiOutlineChevronDown className="navbar-caret" />
      </button>
      {menuOpen && (
        <div className="navbar-menu" role="menu">
          <button type="button" className="navbar-menu-item" role="menuitem" onClick={handleProfileClick}>
            <HiOutlineUser /> Profile
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
            <HiOutlineArrowRightOnRectangle /> Logout
          </button>
        </div>
      )}
    </div>
  </header>
  );
};

export default Navbar;
