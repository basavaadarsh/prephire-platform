import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FiUsers, FiBookOpen, FiAward } from "react-icons/fi";

/**
 * CourseInstructor — Professional instructor profile card.
 * Properties :
 *   instructor – { name, title, company, photo, bio, stats }
 */
const CourseInstructor = ({ instructor }) => {
  if (!instructor) return null;

  // Generate initials for the avatar fallback
  const initials = instructor.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      className="cd-instructor"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="cd-section-title">Meet Your Instructor</h2>

      <div className="cd-instructor-card">
        <div className="cd-instructor-top">
          {/* Avatar */}
          <div className="cd-instructor-avatar">
            {instructor.photo ? (
              <img src={instructor.photo} alt={instructor.name} />
            ) : (
              <span className="cd-instructor-initials">{initials}</span>
            )}
          </div>

          {/* Name & title */}
          <div className="cd-instructor-identity">
            <h3 className="cd-instructor-name">{instructor.name}</h3>
            <p className="cd-instructor-role">
              <HiOutlineBriefcase />
              {instructor.title} @ {instructor.company}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="cd-instructor-bio">{instructor.bio}</p>

        {/* Stats */}
        {instructor.stats && (
          <div className="cd-instructor-stats">
            <div className="cd-stat-item">
              <FiAward className="cd-stat-icon" />
              <div>
                <span className="cd-stat-value">{instructor.stats.experience}</span>
                <span className="cd-stat-label">Experience</span>
              </div>
            </div>
            <div className="cd-stat-item">
              <FiUsers className="cd-stat-icon" />
              <div>
                <span className="cd-stat-value">{instructor.stats.students}</span>
                <span className="cd-stat-label">Students</span>
              </div>
            </div>
            <div className="cd-stat-item">
              <FiBookOpen className="cd-stat-icon" />
              <div>
                <span className="cd-stat-value">{instructor.stats.courses}</span>
                <span className="cd-stat-label">Courses</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CourseInstructor;
