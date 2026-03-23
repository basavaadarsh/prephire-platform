import React, { useEffect, useState } from 'react';
import { dashboardData } from '../../data/dashboardData';

const STORAGE_KEY = 'userProfile';

const getStoredProfile = (profile) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return profile;
  try {
    return JSON.parse(stored);
  } catch (error) {
    return profile;
  }
};

const ProfileForm = ({ profile, isEditable, onSave, onCancel, onError }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    skills: '',
    linkedIn: '',
    portfolio: '',
    profilePhoto: '',
  });
  const [errors, setErrors] = useState({});
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    const initial = getStoredProfile(profile);
    setFormData({
      name: initial.name,
      email: initial.email,
      phone: initial.phone,
      location: initial.location,
      bio: initial.bio,
      skills: initial.skills || '',
      linkedIn: initial.linkedIn || '',
      portfolio: initial.portfolio || '',
      profilePhoto: initial.profilePhoto || '',
    });
    setErrors({});
  }, [profile]);
  const handleImageUpload = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, profilePhoto: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setFormData((prev) => ({ ...prev, profilePhoto: '' }));
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const nameValue = formData.name.trim();
    if (!nameValue) {
      nextErrors.name = dashboardData.ui.validation.nameRequired;
    } else if (nameValue.length < 2) {
      nextErrors.name = dashboardData.ui.validation.nameMin;
    }
    if (!formData.email.trim()) {
      nextErrors.email = dashboardData.ui.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = dashboardData.ui.validation.emailInvalid;
    }
    const phoneValue = formData.phone.replace(/\D/g, '');
    if (!phoneValue) {
      nextErrors.phone = dashboardData.ui.validation.phoneRequired;
    } else if (!/^\d{10}$/.test(phoneValue)) {
      nextErrors.phone = dashboardData.ui.validation.phoneInvalid;
    }
    if (!formData.location.trim()) nextErrors.location = dashboardData.ui.validation.locationRequired;
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      if (onError) onError();
      return;
    }

    const phoneValue = formData.phone.replace(/\D/g, '');
    const updatedData = {
      ...formData,
      phone: phoneValue,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    window.dispatchEvent(new Event('userProfileUpdated'));
    setSavedMessage(dashboardData.ui.saveSuccess);
    setTimeout(() => setSavedMessage(''), 2500);
    if (onSave) onSave(updatedData);
  };

  const handleReset = () => {
    const initial = getStoredProfile(profile);
    setFormData({
      name: initial.name,
      email: initial.email,
      phone: initial.phone,
      location: initial.location,
      bio: initial.bio,
      skills: initial.skills || '',
      linkedIn: initial.linkedIn || '',
      portfolio: initial.portfolio || '',
      profilePhoto: initial.profilePhoto || '',
    });
    setErrors({});
    setSavedMessage('');
    if (onCancel) onCancel();
  };

  return (
    <form className={`profile-card ${isEditable ? 'is-editing' : 'view-mode'}`} onSubmit={handleSubmit}>
      <div className="section-header">
        <div>
          <h2 className="section-title">{dashboardData.ui.profileFormTitle}</h2>
          <div className="section-subtitle">{dashboardData.ui.profileFormSubtitle}</div>
        </div>
        {isEditable && (
          <div className="profile-actions">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleReset}
            >
              {dashboardData.ui.cancel}
            </button>
            <button type="submit" className="btn btn-primary">
              {dashboardData.ui.save}
            </button>
          </div>
        )}
      </div>

      <div className="profile-photo-row">
        <div className="profile-photo-preview">
          {formData.profilePhoto ? (
            <img src={formData.profilePhoto} alt={formData.name} />
          ) : (
            <div className="avatar-fallback">
              {(formData.name || 'User')
                .split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map((part) => part[0])
                .join('')
                .toUpperCase()}
            </div>
          )}
        </div>
        {isEditable && (
          <div className="profile-photo-actions">
            <label className="btn btn-outline-primary upload-button" htmlFor="profilePhotoInput">
              Upload Photo
            </label>
            <input
              id="profilePhotoInput"
              className="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {formData.profilePhoto && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleRemovePhoto}
              >
                Remove Photo
              </button>
            )}
          </div>
        )}
      </div>

      <div className="profile-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="name">{dashboardData.ui.profileLabels.fullName}</label>
          <input
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            disabled={!isEditable}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">{dashboardData.ui.profileLabels.email}</label>
          <input
            id="email"
            name="email"
            className="form-control"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditable}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="phone">{dashboardData.ui.profileLabels.phone}</label>
          <input
            id="phone"
            name="phone"
            className="form-control"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditable}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="location">{dashboardData.ui.profileLabels.location}</label>
          <input
            id="location"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            disabled={!isEditable}
          />
          {errors.location && <span className="field-error">{errors.location}</span>}
        </div>
        <div className="form-field form-field-full">
          <label className="form-label" htmlFor="bio">{dashboardData.ui.profileLabels.bio}</label>
          <textarea
            id="bio"
            name="bio"
            className="form-control"
            rows="3"
            value={formData.bio}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-field form-field-full">
          <label className="form-label" htmlFor="skills">{dashboardData.ui.profileLabels.skills}</label>
          <input
            id="skills"
            name="skills"
            className="form-control"
            value={formData.skills}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-field form-field-full">
          <label className="form-label" htmlFor="linkedIn">{dashboardData.ui.profileLabels.linkedIn}</label>
          <input
            id="linkedIn"
            name="linkedIn"
            className="form-control"
            value={formData.linkedIn}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>
        <div className="form-field form-field-full">
          <label className="form-label" htmlFor="portfolio">{dashboardData.ui.profileLabels.portfolio}</label>
          <input
            id="portfolio"
            name="portfolio"
            className="form-control"
            value={formData.portfolio}
            onChange={handleChange}
            disabled={!isEditable}
          />
        </div>
      </div>

      {savedMessage && <div className="save-message">{savedMessage}</div>}
    </form>
  );
};

export default ProfileForm;
