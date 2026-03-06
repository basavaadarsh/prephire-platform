import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBookOpen } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course, onAddToCart, isInCart, index }) => {
    return (
        <motion.div
            className="course-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
        >
            <div className="course-card-thumb">
                <HiOutlineBookOpen />
            </div>

            <div className="course-card-body">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>

                <div className="course-meta">
                    <span><LuClock3 /> {course.duration}</span>
                    <span><RiGraduationCapLine /> {course.level}</span>
                </div>

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
                    <span>{course.students.toLocaleString()} students</span>
                </div>

                <div className="course-price">₹{course.price}</div>

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
                            <FiShoppingCart /> Add to Cart
                        </>
                    )}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default CourseCard;
