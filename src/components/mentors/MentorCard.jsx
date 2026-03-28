import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const MentorCard = ({ mentor, onViewProfile }) => {
  if (!mentor) return null;

  return (
    <motion.div
      className="mentor-card-premium h-100 d-flex flex-column"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      role="button"
      tabIndex={0}
      onClick={() => onViewProfile(mentor.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onViewProfile(mentor.id);
      }}
    >
      {/* 🔥 BADGE */}
      <div className="mentor-badge">{mentor.expertise}</div>

      {/* ===== PROFILE ===== */}
      <div className="mentor-header text-center">
        <img src={mentor.photo} alt={mentor.name} className="mentor-photo" />

        <h5 className="mentor-name mt-3">{mentor.name}</h5>

        <p className="mentor-company">{mentor.company}</p>
      </div>

      {/* ===== META ===== */}
      <div className="mentor-meta d-flex justify-content-between mt-3">
        <div className="mentor-rating d-flex align-items-center gap-1">
          <FaStar className="star-icon" />
          <span>{mentor.rating}</span>
        </div>

        <div className="mentor-experience">{mentor.experience}</div>
      </div>

      {/* ===== PRICING 🔥 NEW ===== */}
      <div className="mentor-price text-center mt-2">
        ₹{mentor.pricing?.oneToOne} / session
      </div>

      {/* ===== SKILLS (FIXED 🔥) ===== */}
      <div className="mentor-skills mt-3 d-flex flex-wrap gap-2 justify-content-center">
        {mentor.skills?.slice(0, 3).map((skill, i) => (
          <span key={i} className="skill-chip">
            {skill.name} {/* ✅ FIX */}
          </span>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-auto pt-3">
        <button
          className="mentor-btn w-100"
          onClick={(e) => {
            e.stopPropagation();
            onViewProfile(mentor.id);
          }}
        >
          View Profile →
        </button>
      </div>
    </motion.div>
  );
};

export default MentorCard;
