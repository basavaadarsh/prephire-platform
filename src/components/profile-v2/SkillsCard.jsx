import React, { useMemo, useState } from 'react';

const SkillsCard = ({ skills, suggestions, isEditing, onAddSkill, onRemoveSkill }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return suggestions
      .filter((skill) => skill.toLowerCase().includes(normalized))
      .filter((skill) => !skills.includes(skill))
      .slice(0, 6);
  }, [query, skills, suggestions]);

  const handleAdd = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onAddSkill(trimmed);
    setQuery('');
  };

  return (
    <section className="profile-card v2-card">
      <div className="card-title">
        <i className="bi bi-lightning-charge" /> Skills
      </div>

      <div className="skills-tags">
        {skills.length === 0 ? (
          <span className="empty-hint">No skills added yet.</span>
        ) : (
          skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
              {isEditing ? (
                <button type="button" onClick={() => onRemoveSkill(skill)}>
                  <i className="bi bi-x" />
                </button>
              ) : null}
            </span>
          ))
        )}
      </div>

      {isEditing ? (
        <div className="skills-input">
          <input
            type="text"
            className="form-control"
            placeholder="Add a skill"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleAdd(query);
              }
            }}
          />
          <button type="button" className="btn btn-outline-primary" onClick={() => handleAdd(query)}>
            Add
          </button>
          {filtered.length > 0 ? (
            <div className="skills-suggestions">
              {filtered.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleAdd(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
};

export default SkillsCard;
