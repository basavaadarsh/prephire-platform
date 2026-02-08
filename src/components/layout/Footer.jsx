import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Column 1: Logo and Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#2563eb] w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">PrepHire</h1>
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium">Prepare. Perform. Get Hired.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-[#2563eb] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="hover:text-[#2563eb] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
            <a href="#" className="hover:text-[#2563eb] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="hover:text-[#2563eb] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-gray-900 font-bold mb-6 text-sm">Quick Links</h3>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Courses</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Job Board</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-gray-900 font-bold mb-6 text-sm">Services</h3>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Mock Interviews</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Resume Review</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Interview Guidance</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Placement Support</a></li>
            <li><a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Corporate Training</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-gray-900 font-bold mb-6 text-sm">Contact Us</h3>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <span className="text-gray-500 text-sm">contact@prephire.in</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <span className="text-gray-500 text-sm">+44 7721554962</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="text-gray-500 text-sm leading-relaxed">
                Chilakaluripet, AndhraPradesh, India, 522616
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-center gap-2 text-center">
        <p className="text-gray-500 text-xs md:text-sm font-medium">
          © 2024 PrepHire. All rights reserved.
        </p>
        <div className="hidden md:block h-3 w-[1px] bg-gray-300 mx-2"></div>
        <div className="flex items-center gap-2">
          <a href="#" className="text-gray-500 text-xs md:text-sm hover:text-[#2563eb] transition-colors font-medium">Privacy Policy</a>
          <div className="h-3 w-[1px] bg-gray-300 mx-1"></div>
          <a href="#" className="text-gray-500 text-xs md:text-sm hover:text-[#2563eb] transition-colors font-medium">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
