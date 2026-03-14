import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock, FiEye, FiEyeOff, FiUser, FiPhone } from 'react-icons/fi';

const GOOGLE_LOGO = 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg';
const FACEBOOK_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png';

// Returns 'weak', 'medium', or 'strong' based on the password value
const getPasswordStrength = (pwd) => {
  if (!pwd) return '';
  let score = 0;
  if (pwd.length >= 6) score++;
  if (pwd.length >= 10) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 2) return 'weak';
  if (score <= 3) return 'medium';
  return 'strong';
};

const Signup = ({ onSwitchToLogin }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const passwordStrength = getPasswordStrength(form.password);

  // Update a single form field and clear its error on change
  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Live check: show mismatch error as user types in confirm field
  const handleConfirmChange = (value) => {
    handleChange('confirmPassword', value);
    if (form.password && value && form.password !== value) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
    } else {
      setErrors(prev => ({ ...prev, confirmPassword: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!form.agreeTerms) {
      newErrors.terms = 'You must accept the terms to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // TODO: Replace with real API call — POST /api/register
    const payload = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };
    console.log('Signup payload:', payload);

    setTimeout(() => {
      setLoading(false);
      // TODO: handle response — redirect or show success message
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
      <h2>Sign Up</h2>

      <form onSubmit={handleSignup} noValidate>

        {/* Full name */}
        <div className="auth-input-group">
          <FiUser className="input-icon" />
          <input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className={errors.fullName ? 'is-invalid' : ''}
            autoComplete="name"
          />
        </div>
        {errors.fullName && <p className="auth-error-text">{errors.fullName}</p>}

        {/* Email */}
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

        {/* Phone */}
        <div className="auth-input-group">
          <FiPhone className="input-icon" />
          <input
            type="tel"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={errors.phone ? 'is-invalid' : ''}
            autoComplete="tel"
          />
        </div>
        {errors.phone && <p className="auth-error-text">{errors.phone}</p>}

        {/* Password */}
        <div className="auth-input-group">
          <FiLock className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={errors.password ? 'is-invalid' : ''}
            autoComplete="new-password"
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

        {/* Password strength indicator */}
        {form.password && (
          <div style={{ marginBottom: '0.5rem' }}>
            <div className="password-strength-bar">
              <div className={`password-strength-fill ${passwordStrength}`} />
            </div>
            <p className={`password-strength-text ${passwordStrength}`}>
              Strength: {passwordStrength}
            </p>
          </div>
        )}

        {/* Confirm password */}
        <div className="auth-input-group">
          <FiLock className="input-icon" />
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) => handleConfirmChange(e.target.value)}
            className={errors.confirmPassword ? 'is-invalid' : ''}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowConfirm(prev => !prev)}
            aria-label={showConfirm ? 'Hide password' : 'Show password'}
          >
            {showConfirm ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        {errors.confirmPassword && <p className="auth-error-text">{errors.confirmPassword}</p>}

        {/* Terms and conditions */}
        <div className="auth-terms">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={form.agreeTerms}
            onChange={(e) => handleChange('agreeTerms', e.target.checked)}
          />
          <label htmlFor="agreeTerms">
            I agree to the <a href="/terms-of-service">Terms of Service</a> and{' '}
            <a href="/privacy-policy">Privacy Policy</a>
          </label>
        </div>
        {errors.terms && <p className="auth-error-text">{errors.terms}</p>}

        <button type="submit" className="auth-submit-btn" disabled={loading}>
          {loading ? <span className="auth-spinner" /> : 'Create Account'}
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
        Already have an account?{' '}
        <a role="button" onClick={onSwitchToLogin}>Sign In</a>
      </div>
    </div>
  );
};

export default Signup;
