import React from "react";
import { motion } from "framer-motion";

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
                <i className="bi bi-book" aria-hidden="true" />
            </div>

            <div className="course-card-body">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>

                <div className="course-meta">
                    <span><i className="bi bi-clock" aria-hidden="true" /> {course.duration}</span>
                    <span><i className="bi bi-mortarboard" aria-hidden="true" /> {course.level}</span>
                </div>

                <ul className="course-features">
                    {course.features.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <div className="course-rating-row">
                    <div className="course-rating">
                        <i className="bi bi-star-fill" aria-hidden="true" />
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
                            <i className="bi bi-check" aria-hidden="true" /> Added
                        </>
                    ) : (
                        <>
                            <i className="bi bi-cart3" aria-hidden="true" /> Add to Cart
                        </>
                    )}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default CourseCard;
