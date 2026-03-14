import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const GOOGLE_LOGO = 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg';
const FACEBOOK_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png';

const Login = ({ onSwitchToSignup }) => {
  const [form, setForm] = useState({ email: '', password: '', rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Update a single form field and clear its error on change
  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // TODO: Replace with real API call — POST /api/login
    const payload = {
      email: form.email,
      password: form.password,
      rememberMe: form.rememberMe,
    };
    console.log('Login payload:', payload);

    setTimeout(() => {
      setLoading(false);
      // TODO: handle response — redirect or show error
    }, 1500);
  };

  const handleGoogleLogin = () => {
    // TODO: integrate Google OAuth
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    // TODO: integrate Facebook OAuth
    console.log('Facebook login clicked');
  };

  return (
    <div className="auth-form-box">
      <h2>Log In</h2>

      <form onSubmit={handleLogin} noValidate>

        {/* Email field */}
        <div className="auth-input-group">
          <HiOutlineMail className="input-icon" />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={errors.email ? 'is-invalid' : ''}
            autoComplete="email"
          />
        </div>
        {errors.email && <p className="auth-error-text">{errors.email}</p>}

        {/* Password field */}
        <div className="auth-input-group">
          <FiLock className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={errors.password ? 'is-invalid' : ''}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        {errors.password && <p className="auth-error-text">{errors.password}</p>}

        {/* Remember me & forgot password */}
        <div className="auth-options">
          <label>
            <input
              type="checkbox"
              checked={form.rememberMe}
              onChange={(e) => handleChange('rememberMe', e.target.checked)}
            />
            Remember me
          </label>
          <a href="/forgot-password">Forgot password?</a>
        </div>

        <button type="submit" className="auth-submit-btn" disabled={loading}>
          {loading ? <span className="auth-spinner" /> : 'Log In'}
        </button>

      </form>

      <div className="auth-divider"><span>or</span></div>

      <div className="auth-social-btns">
        <button type="button" className="auth-social-btn" onClick={handleGoogleLogin}>
          <img src={GOOGLE_LOGO} alt="Google" />
          Google
        </button>
        <button type="button" className="auth-social-btn" onClick={handleFacebookLogin}>
          <img src={FACEBOOK_LOGO} alt="Facebook" />
          Facebook
        </button>
      </div>

      <div className="auth-switch">
        Don't have an account?{' '}
        <a role="button" onClick={onSwitchToSignup}>Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
