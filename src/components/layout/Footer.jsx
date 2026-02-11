import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-5 pb-3 px-3 px-md-5 border-top">
      <div className="container-fluid max-w-7xl mx-auto px-0">
        <div className="row g-5 mb-5">
          {/* Column 1: Logo and Social */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
              <div style={{ backgroundColor: '#2563eb', width: '40px', height: '40px' }} className="rounded-3 d-flex align-items-center justify-content-center">
                <span className="text-white fs-5 fw-bold">P</span>
              </div>
              <div>
                <h1 className="fs-5 fw-bold text-dark m-0">PrepHire</h1>
              </div>
            </div>
            <p className="text-secondary small fw-medium m-0">Prepare. Perform. Get Hired.</p>
            <div className="d-flex align-items-center gap-3 text-secondary">
              <a href="#" className="text-secondary hover-primary-custom transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-secondary hover-primary-custom transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="text-secondary hover-primary-custom transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="text-secondary hover-primary-custom transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="text-dark fw-bold mb-4 small text-uppercase tracking-wider">Quick Links</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li><Link to="/about" className="text-secondary small text-decoration-none hover-dark transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-secondary small text-decoration-none hover-dark transition-colors">Services</Link></li>
              <li><Link to="/courses" className="text-secondary small text-decoration-none hover-dark transition-colors">Courses</Link></li>
              <li><Link to="/job-board" className="text-secondary small text-decoration-none hover-dark transition-colors">Job Board</Link></li>
              <li><Link to="/careers" className="text-secondary small text-decoration-none hover-dark transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="text-dark fw-bold mb-4 small text-uppercase tracking-wider">Services</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li><Link to="/services" className="text-secondary small text-decoration-none hover-dark transition-colors">Mock Interviews</Link></li>
              <li><Link to="/services" className="text-secondary small text-decoration-none hover-dark transition-colors">Resume Review</Link></li>
              <li><Link to="/services" className="text-secondary small text-decoration-none hover-dark transition-colors">Interview Guidance</Link></li>
              <li><Link to="/services" className="text-secondary small text-decoration-none hover-dark transition-colors">Placement Support</Link></li>
              <li><Link to="/services" className="text-secondary small text-decoration-none hover-dark transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="text-dark fw-bold mb-4 small text-uppercase tracking-wider">Contact Us</h3>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li className="d-flex align-items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <span className="text-secondary small">contact@prephire.in</span>
              </li>
              <li className="d-flex align-items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span className="text-secondary small">+44 7721554962</span>
              </li>
              <li className="d-flex align-items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <span className="text-secondary small lh-base">
                  Chilakaluripet, AndhraPradesh, India, 522616.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-top d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 text-center">
          <p className="text-secondary small fw-medium m-0">
            © 2024 PrepHire. All rights reserved.
          </p>
          <div className="d-none d-md-block h-2/3 border-start mx-2" style={{ height: '14px', width: '1px', backgroundColor: '#dee2e6' }}></div>
          <div className="d-flex align-items-center gap-2">
            <Link to="/privacy-policy" className="text-secondary small text-decoration-none hover-primary-custom transition-colors fw-medium">Privacy Policy</Link>
            <div className="border-start mx-1" style={{ height: '14px', width: '1px', backgroundColor: '#dee2e6' }}></div>
            <Link to="/terms-of-service" className="text-secondary small text-decoration-none hover-primary-custom transition-colors fw-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
