import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (!message) return undefined;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 2200);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`toast-notification toast-${type}`} role="status">
      <span>{message}</span>
      <button type="button" className="toast-close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
};

export default Toast;
