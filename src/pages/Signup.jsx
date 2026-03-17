import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock, FiUser, FiPhone } from 'react-icons/fi';
import FormInput from '../components/FormInput';
import SocialLoginGroup from '../components/SocialLoginGroup';

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

const Signup = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const passwordStrength = getPasswordStrength(form.password);

  // Update a single form field and clear its error on change
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  // Live check: show mismatch error as user types in confirm field
  const handleConfirmChange = (value) => {
    handleChange('confirmPassword', value);
    if (form.password && value && form.password !== value) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: '' }));
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

  return (
    <div className="auth-form-box">
      <h2>Sign Up</h2>

      <form onSubmit={handleSignup} noValidate>
        <FormInput
          icon={<FiUser />}
          type="text"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(val) => handleChange('fullName', val)}
          error={errors.fullName}
          autoComplete="name"
        />

        <FormInput
          icon={<HiOutlineMail />}
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(val) => handleChange('email', val)}
          error={errors.email}
          autoComplete="email"
        />

        <FormInput
          icon={<FiPhone />}
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={(val) => handleChange('phone', val)}
          error={errors.phone}
          autoComplete="tel"
        />

        <FormInput
          icon={<FiLock />}
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(val) => handleChange('password', val)}
          error={errors.password}
          autoComplete="new-password"
        />

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

        <FormInput
          icon={<FiLock />}
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(val) => handleConfirmChange(val)}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

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

      <SocialLoginGroup />

      <div className="auth-switch">
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;
