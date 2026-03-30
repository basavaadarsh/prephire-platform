import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import SocialLoginGroup from '../components/SocialLoginGroup';
import { dashboardData } from '../data/dashboardData';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', rememberMe: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update a single form field and clear its error on change
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
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
      const stored = localStorage.getItem('userProfile');
      if (!stored) {
        const nextProfile = {
          ...dashboardData.user,
          email: form.email,
        };
        localStorage.setItem('userProfile', JSON.stringify(nextProfile));
        window.dispatchEvent(new Event('userProfileUpdated'));
      }
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="auth-form-box">
      <h2>Log In</h2>

      <form onSubmit={handleLogin} noValidate>
        <FormInput
          icon={<i className="bi bi-envelope" aria-hidden="true" />}
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(val) => handleChange('email', val)}
          error={errors.email}
          autoComplete="email"
        />

        <FormInput
          icon={<i className="bi bi-lock" aria-hidden="true" />}
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(val) => handleChange('password', val)}
          error={errors.password}
          autoComplete="current-password"
        />

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

      <SocialLoginGroup />

      <div className="auth-switch">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
