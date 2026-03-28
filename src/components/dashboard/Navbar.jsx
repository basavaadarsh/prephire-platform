import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineBell, HiOutlineChevronDown, HiOutlineUser, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { Search } from 'lucide-react';
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
      </div>
      <div className="navbar-search center">
        <div className="search-input">
          <Search size={16} />
          <input
            type="search"
            placeholder={dashboardData.ui.searchDashboard}
            aria-label={dashboardData.ui.searchDashboard}
          />
        </div>
      </div>
      <div className="navbar-user" ref={menuRef}>
        <button
          type="button"
          className="navbar-icon notification"
          aria-label={dashboardData.ui.aria.notifications}
        >
          <HiOutlineBell />
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
