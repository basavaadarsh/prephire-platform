import React, { useState } from 'react';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 py-3 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="bg-[#2563eb] w-10 h-10 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">P</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">PrepHire</h1>
          <p className="text-[10px] text-gray-500 font-medium">Prepare. Perform. Get Hired.</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-[#2563eb] font-semibold text-sm">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">About</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Services</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Courses</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Job Board</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Careers</a>
        <a href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">Contact</a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-1 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors"
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
        <button className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
