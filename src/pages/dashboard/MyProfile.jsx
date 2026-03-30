import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import { dashboardData } from '../../data/dashboardData';
import { skillsData } from '../../data/skillsData';
import ProfileHeader from '../../components/profile-v2/ProfileHeader';
import ProfileChecklist from '../../components/profile-v2/ProfileChecklist';
import PersonalInfoCard from '../../components/profile-v2/PersonalInfoCard';
import AboutCard from '../../components/profile-v2/AboutCard';
import SkillsCard from '../../components/profile-v2/SkillsCard';
import ResumeCard from '../../components/profile-v2/ResumeCard';
import ResumeReviewCard from '../../components/profile-v2/ResumeReviewCard';
import ExperienceCard from '../../components/profile-v2/ExperienceCard';
import EducationCard from '../../components/profile-v2/EducationCard';
import LinksCard from '../../components/profile-v2/LinksCard';
import CertificationsCard from '../../components/profile-v2/CertificationsCard';

const STORAGE_KEY = 'userProfile';

const getStoredProfile = (fallback) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return fallback;
  try {
    return JSON.parse(stored);
  } catch (error) {
    return fallback;
  }
};

const normalizeSkills = (skills) => {
  if (Array.isArray(skills)) return skills;
  if (!skills) return [];
  return skills
    .split(',')
    .map((skill) => skill.trim())
    .filter(Boolean);
};

const normalizeProfile = (profile) => {
  const base = profile || dashboardData.user;
  const skills = normalizeSkills(base.skills || base.skillsText);
  return {
    ...dashboardData.user,
    ...base,
    skills,
    linkedIn: base.linkedIn || dashboardData.user.linkedIn,
    portfolio: base.portfolio || dashboardData.user.portfolio,
    resumeFileName: base.resumeFileName || 'Sarah_Resume_FullStack.pdf',
    resumeUpdated: base.resumeUpdated || 'Mar 15, 2026',
  };
};

const MyProfile = () => {
  const { user, setUser, showToast } = useOutletContext();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(() => normalizeProfile(getStoredProfile(user || dashboardData.user)));

  useEffect(() => {
    if (!isEditing) {
      setDraft(normalizeProfile(getStoredProfile(user || dashboardData.user)));
    }
  }, [user, isEditing]);

  const handleChange = (field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddSkill = (skill) => {
    setDraft((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills : [...prev.skills, skill],
    }));
  };

  const handleRemoveSkill = (skill) => {
    setDraft((prev) => ({
      ...prev,
      skills: prev.skills.filter((item) => item !== skill),
    }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setDraft((prev) => ({ ...prev, profilePhoto: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setDraft((prev) => ({ ...prev, profilePhoto: '' }));
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    setDraft((prev) => ({
      ...prev,
      resumeFileName: file.name,
      resumeUpdated: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
    }));
  };

  const profileStrength = useMemo(() => {
    const fields = [
      draft.name,
      draft.email,
      draft.phone,
      draft.location,
      draft.bio,
      draft.linkedIn,
      draft.portfolio,
      draft.resumeFileName,
      draft.skills.length > 0,
    ];
    const filled = fields.filter(Boolean).length;
    return Math.round((filled / fields.length) * 100);
  }, [draft]);

  const checklistItems = useMemo(() => ([
    { id: 'contact', label: 'Contact & identity', completed: Boolean(draft.name && draft.email) },
    { id: 'location', label: 'Location & headline', completed: Boolean(draft.location && draft.role) },
    { id: 'bio', label: 'Bio & links', completed: Boolean(draft.bio && (draft.linkedIn || draft.portfolio)) },
    { id: 'skills', label: 'Skills', completed: draft.skills.length > 0 },
    { id: 'resume', label: 'Resume file', completed: Boolean(draft.resumeFileName) },
  ]), [draft]);

  const handleSave = () => {
    if (!draft.name || !draft.email) {
      if (showToast) showToast({ type: 'error', message: 'Name and email are required.' });
      return;
    }
    const updated = {
      ...draft,
      skillsText: draft.skills.join(', '),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('userProfileUpdated'));
    if (setUser) setUser(updated);
    if (showToast) showToast({ type: 'success', message: dashboardData.ui.toasts.profileSaved });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(normalizeProfile(getStoredProfile(user || dashboardData.user)));
    setIsEditing(false);
  };

  return (
    <motion.div
      className="dashboard-page profile-v2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProfileHeader
        profile={draft}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        onPhotoUpload={handlePhotoUpload}
        onRemovePhoto={handleRemovePhoto}
        strength={profileStrength}
      />

      <ProfileChecklist items={checklistItems} />

      <div className="profile-v2-grid">
        <PersonalInfoCard profile={draft} />
        <AboutCard profile={draft} isEditing={isEditing} onChange={handleChange} />
        <ResumeCard
          resume={{ name: draft.resumeFileName, updated: draft.resumeUpdated }}
          isEditing={isEditing}
          onUpload={handleResumeUpload}
        />
        <ResumeReviewCard status="Uploaded" />
        <SkillsCard
          skills={draft.skills}
          suggestions={skillsData}
          isEditing={isEditing}
          onAddSkill={handleAddSkill}
          onRemoveSkill={handleRemoveSkill}
        />
        <ExperienceCard
          items={[
            {
              title: 'Full Stack Intern',
              company: 'Tech Innovators',
              date: 'Jun 2023 - Aug 2023',
              summary: 'Assisted in building responsive web applications using React and Node.js.',
            },
          ]}
        />
        <EducationCard
          items={[
            {
              degree: 'B.Tech in Computer Science',
              school: 'Vellore Institute of Technology',
              date: '2020 - 2024',
              meta: 'Grade: 9.2 CGPA',
            },
          ]}
        />
        <LinksCard profile={draft} isEditing={isEditing} onChange={handleChange} />
        <CertificationsCard items={[]} />
      </div>
    </motion.div>
  );
};

export default MyProfile;
