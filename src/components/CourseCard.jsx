import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineBookOpen } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiShoppingCart, FiCheck, FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course, onAddToCart, isInCart, index }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/courses/${course.id}`);
    };

    return (
        <motion.div
            className="course-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
        >
            <div className="course-card-thumb" onClick={handleViewDetails}>
                <HiOutlineBookOpen />
            </div>

            <div className="course-card-body">
                <span className="course-category">{course.category}</span>
                <h3 onClick={handleViewDetails} style={{ cursor: "pointer" }}>
                    {course.title}
                </h3>

                {/* Brief description (truncated to 2 lines via CSS) */}
                {course.description && (
                    <p className="course-description">{course.description}</p>
                )}

                <div className="course-meta">
                    <span><LuClock3 /> {course.duration}</span>
                    <span><RiGraduationCapLine /> {course.level}</span>
                </div>

                {/* Instructor name */}
                {course.instructor && (
                    <div className="course-instructor-name">
                        By {course.instructor.name}
                    </div>
                )}

                <ul className="course-features">
                    {course.features.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <div className="course-rating-row">
                    <div className="course-rating">
                        <FaStar />
                        <span>{course.rating}</span>
                    </div>
                    <span>{course.studentsEnrolled.toLocaleString()} students</span>
                </div>

                <div className="course-price">₹{course.price}</div>

                {/* Action buttons */}
                <div className="course-card-actions">
                    <motion.button
                        className="btn-view-details"
                        onClick={handleViewDetails}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Details <FiArrowRight />
                    </motion.button>

                    <motion.button
                        className={`btn-add-cart ${isInCart ? "added" : ""}`}
                        onClick={() => onAddToCart(course.id)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isInCart ? (
                            <>
                                <FiCheck /> Added
                            </>
                        ) : (
                            <>
                                <FiShoppingCart /> Cart
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
