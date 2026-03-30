import React from 'react';

const ProfileHeader = ({
  profile,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onPhotoUpload,
  onRemovePhoto,
  strength,
}) => (
  <section className="profile-v2-header">
    <div className="profile-v2-main">
      <div className="profile-v2-avatar">
        {profile.profilePhoto ? (
          <img src={profile.profilePhoto} alt={profile.name} />
        ) : (
          <div className="avatar-fallback">
            {(profile.name || 'User')
              .split(' ')
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join('')
              .toUpperCase()}
          </div>
        )}
      </div>
      <div className="profile-v2-info">
        <h2>{profile.name}</h2>
        <p className="profile-v2-role">{profile.role || 'Student'}</p>
        <div className="profile-v2-meta">
          <span><i className="bi bi-geo-alt" /> {profile.location || 'Location'}</span>
          <span><i className="bi bi-envelope" /> {profile.email}</span>
        </div>
      </div>
    </div>

    <div className="profile-v2-actions">
      <div className="profile-strength">
        <div className="profile-strength-label">Profile Strength</div>
        <div className="profile-strength-bar">
          <span style={{ width: `${strength}%` }} />
        </div>
        <div className="profile-strength-value">{strength}%</div>
      </div>
      <div className="profile-v2-buttons">
        {isEditing ? (
          <>
            <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={onSave}>
              <i className="bi bi-save" /> Save Profile
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-primary" onClick={onEdit}>
            <i className="bi bi-pencil-square" /> Edit Profile
          </button>
        )}
        {isEditing ? (
          <div className="profile-v2-upload">
            <label className="btn btn-outline-primary" htmlFor="profilePhotoUpload">
              <i className="bi bi-upload" /> Upload Photo
            </label>
            <input
              id="profilePhotoUpload"
              className="file-input"
              type="file"
              accept="image/*"
              onChange={onPhotoUpload}
            />
            {profile.profilePhoto ? (
              <button type="button" className="btn btn-outline-secondary" onClick={onRemovePhoto}>
                Remove Photo
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  </section>
);

export default ProfileHeader;
