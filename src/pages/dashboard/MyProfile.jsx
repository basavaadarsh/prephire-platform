import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import ProfileForm from '../../components/dashboard/ProfileForm';
import { dashboardData } from '../../data/dashboardData';

const MyProfile = () => {
  const { user, setUser, showToast } = useOutletContext();
  const [isEditing, setIsEditing] = useState(false);
  const [saveNotice, setSaveNotice] = useState('');

  const profileData = useMemo(() => {
    const baseUser = user || dashboardData.user;
    return {
      ...baseUser,
      skills: baseUser.skills || dashboardData.skills.join(', '),
      linkedIn: baseUser.linkedIn || dashboardData.user.linkedIn,
      portfolio: baseUser.portfolio || dashboardData.user.portfolio,
    };
  }, [user]);

  const handleSave = (updatedData) => {
    if (setUser) setUser(updatedData);
    setSaveNotice(dashboardData.ui.saveSuccess);
    if (showToast) {
      showToast({ type: 'success', message: dashboardData.ui.toasts.profileSaved });
    }
    setIsEditing(false);
    setTimeout(() => setSaveNotice(''), 2500);
  };

  const handleError = () => {
    if (showToast) {
      showToast({ type: 'error', message: dashboardData.ui.toasts.profileError });
    }
  };

  return (
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="page-header">
        <div>
          <h1 className="page-title">{dashboardData.ui.profileTitle}</h1>
          <p className="page-subtitle">{dashboardData.ui.profileSubtitle}</p>
        </div>
        {!isEditing && (
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setIsEditing(true)}
          >
            {dashboardData.ui.editProfile}
          </button>
        )}
      </div>

      {saveNotice && <div className="save-message">{saveNotice}</div>}

      <ProfileForm
        profile={profileData}
        isEditable={isEditing}
        onSave={handleSave}
        onError={handleError}
        onCancel={() => setIsEditing(false)}
      />
    </motion.div>
  );
};

export default MyProfile;
