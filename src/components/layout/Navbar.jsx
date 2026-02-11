import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-3 px-md-5 sticky-top z-3 justify-content-between">
      {/* Logo Section */}
      <div className="d-flex align-items-center gap-3">
        <div style={{ backgroundColor: '#2563eb', width: '40px', height: '40px' }} className="rounded-3 d-flex align-items-center justify-content-center">
          <span className="text-white fs-5 fw-bold">P</span>
        </div>
        <div>
          <h1 className="fs-5 fw-bold text-dark m-0 lh-1">PrepHire</h1>
          <p className="m-0 text-secondary fw-medium" style={{ fontSize: '10px' }}>Prepare. Perform. Get Hired.</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="d-none d-lg-flex align-items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-decoration-none small fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
          }
          style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-decoration-none small fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
          }
          style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-decoration-none small fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
          }
          style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
        >
          Services
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `text-decoration-none small fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
          }
          style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
        >
          Courses
        </NavLink>
        <NavLink
          to="/job-board"
          className={({ isActive }) =>
            `text-decoration-none small fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
          }
          style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
        >
          Job Board
        </NavLink>
        <NavLink
          to="/careers"
          className={({ isActive }) =>
            `text-decoration-none small fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
          }
          style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
        >
          Careers
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-decoration-none small fw-medium ${isActive ? 'text-primary fw-bold' : 'text-secondary hover-dark'}`
          }
          style={({ isActive }) => ({ color: isActive ? '#2563eb' : '' })}
        >
          Contact
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-link d-flex align-items-center gap-1 text-secondary fw-medium small text-decoration-none p-0 outline-none shadow-none"
          onClick={() => setIsLoginOpen(!isLoginOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          Login
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down transition-transform ${isLoginOpen ? 'rotate-180' : ''}`}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <button
          className="btn text-white px-4 py-2 fw-semibold small shadow-sm"
          style={{ backgroundColor: '#2563eb' }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
