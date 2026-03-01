import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
    { name: 'About', path: '/about', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg> },
    { name: 'Services', path: '/services', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></svg> },
    { name: 'Courses', path: '/courses', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5" /><path d="M6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5" /></svg> },
    { name: 'Job Board', path: '/job-board', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg> },
    { name: 'Careers', path: '/careers', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg> },
    { name: 'Contact', path: '/contact', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-2 py-md-3 px-3 px-md-5 sticky-top z-3 justify-content-between">
        {/* Logo Section */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <div style={{ backgroundColor: '#2563eb', width: '36px', height: '36px' }} className="rounded-2 rounded-md-3 d-flex align-items-center justify-content-center">
            <span className="text-white fw-bold" style={{ fontSize: '16px' }}>P</span>
          </div>
          <div>
            <h1 className="fw-bold text-dark m-0 lh-1" style={{ fontSize: '17px' }}>PrepHire</h1>
            <p className="m-0 text-secondary fw-medium d-none d-md-block" style={{ fontSize: '11px' }}>Prepare. Perform. Get Hired.</p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-decoration-none fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
              }
              style={({ isActive }) => ({ color: isActive ? '#2563eb' : '', fontSize: '14px' })}
            >
              {link.name}
            </NavLink>
          ))}

        </div>

        {/* Auth Buttons */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <button
            className="btn d-flex align-items-center gap-2 bg-white border-0 px-3 px-md-4 py-1.5 py-md-2 fw-semibold text-dark shadow-sm rounded-pill transition-all hover-light"
            style={{
              fontSize: '13px',
              color: '#374151',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)'
            }}
            onClick={() => setIsLoginOpen(!isLoginOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9ca3af' }}>
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
            Login
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9ca3af' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <button
            className="btn d-flex align-items-center gap-2 text-white border-0 px-3 px-md-4 py-1.5 py-md-2 fw-semibold shadow-sm rounded-pill transition-all"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              fontSize: '13px',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
            }}
          >
            Sign Up
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Bottom Navigation for Mobile */}
      <div className="d-lg-none fixed-bottom bg-white border-top py-2 z-3 shadow-lg">
        <div className="d-flex justify-content-around align-items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `d-flex flex-column align-items-center text-decoration-none ${isActive ? 'text-primary' : 'text-secondary'}`
              }
              style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
            >
              {link.icon}
              <span style={{ fontSize: '10px' }} className="mt-1 fw-medium">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
