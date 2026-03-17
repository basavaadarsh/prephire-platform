import React from 'react';

const GOOGLE_LOGO =
  'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg';
const FACEBOOK_LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png';

/**
 * Shared "or" divider + Google / Facebook sign-in buttons.
 *
 * Props:
 *   onGoogleLogin   — callback fired when Google button is clicked
 *   onFacebookLogin — callback fired when Facebook button is clicked
 */
const SocialLoginGroup = ({ onGoogleLogin, onFacebookLogin }) => {
  const handleGoogle = () => {
    // TODO: integrate Google OAuth
    if (onGoogleLogin) {
      onGoogleLogin();
    } else {
      console.log('Google login clicked');
    }
  };

  const handleFacebook = () => {
    // TODO: integrate Facebook OAuth
    if (onFacebookLogin) {
      onFacebookLogin();
    } else {
      console.log('Facebook login clicked');
    }
  };

  return (
    <>
      <div className="auth-divider">
        <span>or</span>
      </div>

      <div className="auth-social-btns">
        <button type="button" className="auth-social-btn" onClick={handleGoogle}>
          <img src={GOOGLE_LOGO} alt="Google" />
          Google
        </button>
        <button type="button" className="auth-social-btn" onClick={handleFacebook}>
          <img src={FACEBOOK_LOGO} alt="Facebook" />
          Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLoginGroup;
