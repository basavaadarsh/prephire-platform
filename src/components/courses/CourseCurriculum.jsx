import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDownSharp } from "react-icons/io5";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { LuClock3 } from "react-icons/lu";

/**
 * CourseCurriculum — Animated accordion showing course modules & lessons.
 * Props:
 *   curriculum  – array of { moduleId, moduleTitle, lessons[] }
 */
const CourseCurriculum = ({ curriculum = [] }) => {
  // First module is expanded by default
  const [openModules, setOpenModules] = useState([curriculum[0]?.moduleId]);

  const toggleModule = (moduleId) => {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  // Totals for the summary bar
  const totalLessons = curriculum.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalModules = curriculum.length;

  return (
    <div className="cd-curriculum">
      <h2 className="cd-section-title">Course Curriculum</h2>

      <div className="cd-curriculum-summary">
        <span>{totalModules} Modules</span>
        <span className="cd-dot">•</span>
        <span>{totalLessons} Lessons</span>
      </div>

      <div className="cd-accordion">
        {curriculum.map((mod) => {
          const isOpen = openModules.includes(mod.moduleId);

          return (
            <div
              className={`cd-accordion-item ${isOpen ? "open" : ""}`}
              key={mod.moduleId}
            >
              {/* Module header */}
              <button
                className="cd-accordion-header"
                onClick={() => toggleModule(mod.moduleId)}
                aria-expanded={isOpen}
              >
                <div className="cd-accordion-header-left">
                  <motion.span
                    className="cd-accordion-chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <IoChevronDownSharp />
                  </motion.span>
                  <span className="cd-accordion-module-title">
                    {mod.moduleTitle}
                  </span>
                </div>
                <span className="cd-accordion-lesson-count">
                  {mod.lessons.length} lessons
                </span>
              </button>

              {/* Lessons list */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="cd-accordion-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ul className="cd-lesson-list">
                      {mod.lessons.map((lesson) => (
                        <li className="cd-lesson-item" key={lesson.id}>
                          <div className="cd-lesson-info">
                            <HiOutlinePlayCircle className="cd-lesson-icon" />
                            <span>{lesson.title}</span>
                          </div>
                          <span className="cd-lesson-duration">
                            <LuClock3 />
                            {lesson.duration}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCurriculum;
