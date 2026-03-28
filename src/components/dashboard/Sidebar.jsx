import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutGrid,
  BookOpen,
  BriefcaseBusiness,
  Clock,
  Target,
  Users,
  MessagesSquare,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const getInitials = (name = '') => name
  .split(' ')
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join('')
  .toUpperCase();

const iconMap = {
  dashboard: <LayoutGrid size={18} />,
  learning: <BookOpen size={18} />,
  career: <BriefcaseBusiness size={18} />,
  interviews: <Clock size={18} />,
  skills: <Target size={18} />,
  mentors: <Users size={18} />,
  messages: <MessagesSquare size={18} />,
  settings: <Settings size={18} />,
  logout: <LogOut size={18} />,
};

const caretItems = new Set(['learning', 'career']);

const Sidebar = ({ user, onLogout }) => {
  const [openGroups, setOpenGroups] = useState({ learning: false, career: false });

  const toggleGroup = (key) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
      {dashboardData.navigation.slice(0, 1).map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/dashboard'}
          className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
        >
          <span className="sidebar-link-left">
            <span className="sidebar-link-icon">{iconMap[item.icon]}</span>
            <span>{item.label}</span>
          </span>
        </NavLink>
      ))}

      {dashboardData.navigationGroups?.map((group) => {
        const groupKey = group.icon;
        const isOpen = Boolean(openGroups[groupKey]);
        return (
          <div key={group.label} className="sidebar-group">
            <button
              type="button"
              className={`sidebar-group-header${isOpen ? ' open' : ''}`}
              onClick={() => toggleGroup(groupKey)}
              aria-expanded={isOpen}
            >
              <span className="sidebar-link-left">
                <span className="sidebar-link-icon">{iconMap[group.icon]}</span>
                <span>{group.label}</span>
              </span>
              {caretItems.has(group.icon) ? (
                <ChevronDown className={`sidebar-link-caret${isOpen ? ' open' : ''}`} size={16} />
              ) : null}
            </button>
            <div className={`sidebar-group-items${isOpen ? ' open' : ''}`}>
              {group.items.map((subItem) => (
                <NavLink
                  key={subItem.label}
                  to={subItem.path}
                  className={({ isActive }) => `sidebar-sublink${isActive ? ' active' : ''}`}
                >
                  {subItem.label}
                </NavLink>
              ))}
            </div>
          </div>
        );
      })}

      {dashboardData.navigation.slice(1).map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
        >
          <span className="sidebar-link-left">
            <span className="sidebar-link-icon">{iconMap[item.icon]}</span>
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
                <span className="sidebar-link-icon">{iconMap[item.icon]}</span>
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
                <span className="sidebar-link-icon">{iconMap[item.icon]}</span>
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
