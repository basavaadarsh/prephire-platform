import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiCheck, FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { HiOutlineUsers, HiOutlineGlobeAlt } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import CourseCurriculum from "../../components/courses/CourseCurriculum";
import CourseInstructor from "../../components/courses/CourseInstructor";
import { coursesData } from "../../data/coursesData";
import "../../styles/CourseDetail.css";

const STORAGE_KEY = "enrolledCourses";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Find the course from centralized data
  const course = useMemo(
    () => coursesData.find((c) => c.id === courseId),
    [courseId]
  );

  // Enrollment state — check localStorage on mount
  const [enrolled, setEnrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      if (stored.some((e) => e.courseId === courseId)) {
        setEnrolled(true);
      }
    } catch {
      // ignore parsing errors
    }
  }, [courseId]);

  // Handle enrollment
  const handleEnroll = () => {
    if (enrolled) return;

    const enrollmentRecord = {
      courseId: course.id,
      courseTitle: course.title,
      enrolledDate: new Date().toISOString().split("T")[0],
      progress: 0,
    };

    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      stored.push(enrollmentRecord);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([enrollmentRecord]));
    }

    setEnrolled(true);
    setShowModal(true);
  };

  // ─── Course not found ────────────────────────────────────────
  if (!course) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container" style={{ maxWidth: "900px", padding: "60px 1rem" }}>
          <div className="cd-not-found">
            <h2>Course Not Found</h2>
            <p>The course you're looking for doesn't exist or may have been removed.</p>
            <button className="cd-not-found-btn" onClick={() => navigate("/courses")}>
              <FiArrowLeft /> Back to Courses
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Calculate discount percentage
  const discount = course.originalPrice
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container" style={{ maxWidth: "1100px", padding: "40px 1rem 60px" }}>

        {/* ════════ BACK LINK ════════ */}
        <button className="cd-back" onClick={() => navigate("/courses")}>
          <FiArrowLeft /> Back to Courses
        </button>

        {/* ════════ HERO SECTION ════════ */}
        <motion.div
          className="cd-hero"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="cd-hero-inner">
            {/* Left column */}
            <div className="cd-hero-left">
              <span className="cd-badge">{course.category}</span>
              <h1 className="cd-title">{course.title}</h1>
              <p className="cd-subtitle">{course.subtitle}</p>

              <div className="cd-meta-row">
                <span className="cd-meta-item">
                  <LuClock3 /> {course.duration}
                </span>
                <span className="cd-meta-item">
                  <RiGraduationCapLine /> {course.level}
                </span>
                <span className="cd-meta-item">
                  <HiOutlineUsers /> {course.studentsEnrolled.toLocaleString()} students
                </span>
                <span className="cd-meta-item">
                  <HiOutlineGlobeAlt /> {course.language}
                </span>
              </div>

              <div className="cd-meta-row">
                <span className="cd-rating">
                  <FaStar />
                  <span className="cd-rating-value">{course.rating}</span>
                  <span className="cd-rating-count">
                    ({course.studentsEnrolled.toLocaleString()} ratings)
                  </span>
                </span>
              </div>

              <div className="cd-instructor-link">
                <BsPerson />
                {course.instructor.name} — {course.instructor.title}
              </div>
            </div>

            {/* Right column — Price card */}
            <div className="cd-hero-right">
              <div className="cd-price-card">
                <div className="cd-price-row">
                  <span className="cd-price">₹{course.price}</span>
                  {course.originalPrice && (
                    <span className="cd-price-original">₹{course.originalPrice}</span>
                  )}
                  {discount > 0 && (
                    <span className="cd-price-discount">{discount}% off</span>
                  )}
                </div>
                <p className="cd-price-note">One-time payment · Lifetime access</p>

                <motion.button
                  className={`cd-buy-btn ${enrolled ? "enrolled" : ""}`}
                  onClick={handleEnroll}
                  whileTap={enrolled ? {} : { scale: 0.97 }}
                  disabled={enrolled}
                >
                  {enrolled ? (
                    <>
                      <FiCheck /> Enrolled
                    </>
                  ) : (
                    <>
                      <FiShoppingCart /> Buy Course
                    </>
                  )}
                </motion.button>

                {/* What's included */}
                {course.includes && course.includes.length > 0 && (
                  <div className="cd-includes">
                    <h4>What's Included</h4>
                    <ul className="cd-includes-list">
                      {course.includes.map((item, i) => (
                        <li key={i}>
                          <FiCheck /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ════════ DESCRIPTION ════════ */}
        <div className="cd-description">
          <h2 className="cd-section-title">About This Course</h2>
          <p>{course.description}</p>
        </div>

        {/* ════════ CURRICULUM ════════ */}
        {course.curriculum && course.curriculum.length > 0 && (
          <CourseCurriculum curriculum={course.curriculum} />
        )}

        {/* ════════ INSTRUCTOR ════════ */}
        {course.instructor && (
          <CourseInstructor instructor={course.instructor} />
        )}
      </div>

      {/* ════════ ENROLLMENT SUCCESS MODAL ════════ */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="cd-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="cd-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cd-modal-check">
                <FiCheck />
              </div>
              <h3>Enrollment Successful!</h3>
              <p>You're now enrolled in:</p>
              <p className="cd-modal-course-name">"{course.title}"</p>

              <div className="cd-modal-actions">
                <button
                  className="cd-modal-btn-primary"
                  onClick={() => navigate("/")}
                >
                  Go to Dashboard
                </button>
                <button
                  className="cd-modal-btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Continue Exploring
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CourseDetails;
