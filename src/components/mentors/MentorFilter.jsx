import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLaptopCode, FaUserTie, FaBullseye } from "react-icons/fa";

const filters = [
  { label: "All", value: "All", icon: <FaUsers /> },
  { label: "Technical", value: "Technical", icon: <FaLaptopCode /> },
  { label: "HR", value: "HR", icon: <FaUserTie /> },
  { label: "Leadership", value: "Leadership", icon: <FaBullseye /> },
];

const MentorFilter = ({ selected, onChange }) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        {filters.map((f) => {
          const isActive = selected === f.value;

          return (
            <motion.button
              key={f.value}
              className={`filter-btn-premium ${isActive ? "active" : ""}`}
              onClick={() => onChange(f.value)}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              role="tab"
              aria-selected={isActive}
            >
              {/* 🔥 ICON */}
              <span className="filter-icon">{f.icon}</span>

              {/* TEXT */}
              <span className="filter-label">{f.label}</span>

              {/* 🔥 ACTIVE BG ANIMATION */}
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="filter-active-bg"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default MentorFilter;
