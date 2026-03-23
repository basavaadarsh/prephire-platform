import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import Toast from '../components/dashboard/Toast';
import ConfirmModal from '../components/dashboard/ConfirmModal';
import DashboardSkeleton from '../components/dashboard/DashboardSkeleton';
import { dashboardData } from '../data/dashboardData';
import '../styles/Dashboard.css';

const STORAGE_KEY = 'userProfile';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
        return;
      } catch (error) {
        setUser(dashboardData.user);
        return;
      }
    }
    setUser(dashboardData.user);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setUser(JSON.parse(stored));
          return;
        } catch (error) {
          setUser(dashboardData.user);
          return;
        }
      }
      setUser(dashboardData.user);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userProfileUpdated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userProfileUpdated', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const activeUser = user || dashboardData.user;

  const showToast = (nextToast) => {
    setToast(nextToast);
  };

  const handleRequestLogout = () => {
    setConfirmOpen(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setConfirmOpen(false);
    navigate('/', { replace: true });
  };

  return (
    <div className={`dashboard-shell${sidebarOpen ? ' sidebar-open' : ''}`}>
      <Sidebar user={activeUser} onLogout={handleRequestLogout} />
      <div className="dashboard-main">
        <Navbar
          onToggleSidebar={handleToggleSidebar}
          user={activeUser}
          onLogout={handleRequestLogout}
        />
        <main className="dashboard-content">
          {isLoading ? (
            <DashboardSkeleton />
          ) : (
            <Outlet context={{ user: activeUser, setUser, showToast }} />
          )}
        </main>
      </div>
      {toast ? (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      ) : null}
      <ConfirmModal
        isOpen={confirmOpen}
        title="Confirm logout"
        message="Are you sure you want to log out?"
        confirmLabel="Log out"
        cancelLabel="Cancel"
        onConfirm={handleConfirmLogout}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
};

export default DashboardLayout;
