import React from 'react';

const TopNav = ({ user, onToggleSidebar }) => (
  <header className="dashboard-topnav">
    <div className="topnav-left">
      <button
        type="button"
        className="sidebar-toggle"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span />
        <span />
        <span />
      </button>
      <div>
        <div className="topnav-title">Dashboard</div>
        <div className="topnav-subtitle">Welcome back, {user.name.split(' ')[0]}</div>
      </div>
    </div>
    <div className="topnav-user">
      <img className="topnav-avatar" src={user.profilePhoto} alt={user.name} />
    </div>
  </header>
);

export default TopNav;
