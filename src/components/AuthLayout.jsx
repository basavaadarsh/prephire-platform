import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import '../styles/Auth.css';
import loginBg from '../assets/login-bg.png';
import signupBg from '../assets/signup-bg.png';

const LOGIN_QUOTE = {
  text: ['The future belongs to those who ', 'believe', ' in the ', 'beauty of their dreams.'],
  boldIndexes: [1, 3],
  author: '— Eleanor Roosevelt',
};

const SIGNUP_QUOTE = {
  text: ['The only way to ', 'do great work', ' is to ', 'love what you do.'],
  boldIndexes: [1, 3],
  author: '— Steve Jobs',
};

const QuoteOverlay = ({ quote }) => (
  <div className="auth-quote-overlay">
    <p className="quote-text">
      "
      {quote.text.map((chunk, i) =>
        quote.boldIndexes.includes(i)
          ? <span key={i} className="bold">{chunk}</span>
          : chunk
      )}
      "
    </p>
    <p className="quote-author">{quote.author}</p>
  </div>
);

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';

  return (
    <div className="auth-wrapper">
      <div className={`auth-slider ${!isLogin ? 'show-signup' : ''}`}>

        {/* Login panel: form on left, image on right */}
        <div className="auth-panel">
          <div className="col-md-6 auth-form-side">
            <Login />
          </div>
          <div className="col-md-6 auth-image-side">
            <img src={loginBg} alt="Developer workspace" />
            <QuoteOverlay quote={LOGIN_QUOTE} />
          </div>
        </div>

        {/* Signup panel: image on left, form on right */}
        <div className="auth-panel">
          <div className="col-md-6 auth-image-side">
            <img src={signupBg} alt="Creative workspace" />
            <QuoteOverlay quote={SIGNUP_QUOTE} />
          </div>
          <div className="col-md-6 auth-form-side">
            <Signup />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;
