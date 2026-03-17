import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

/**
 * Reusable form input with an icon, optional password toggle,
 * and inline error message.
 *
 * Props:
 *   icon        — React element rendered before the input
 *   type        — 'text' | 'email' | 'tel' | 'password'
 *   placeholder — placeholder text
 *   value       — controlled value
 *   onChange     — (newValue) => void
 *   error       — error string (falsy = no error)
 *   autoComplete — HTML autocomplete attribute
 */
const FormInput = ({
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  // When the field is a password and the user has toggled visibility,
  // switch the input type to plain text so the characters are readable.
  const resolvedType = isPassword && showPassword ? 'text' : type;

  return (
    <>
      <div className="auth-input-group">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={resolvedType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={error ? 'is-invalid' : ''}
          autoComplete={autoComplete}
        />
        {isPassword && (
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
      {error && <p className="auth-error-text">{error}</p>}
    </>
  );
};

export default FormInput;
