import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";
import { IoChevronDownSharp } from "react-icons/io5";
import CourseCard from "../components/CourseCard";
import { coursesData, categories } from "../data/coursesData";
import "../styles/Courses.css";

const Courses = () => {
    const [filter, setFilter] = useState("All");
    const [cart, setCart] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCourses = useMemo(() => {
        if (filter === "All") return coursesData;
        return coursesData.filter(c => c.category === filter);
    }, [filter]);

    const handleAddToCart = (id) => {
        setCart(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            return [...prev, id];
        });
    };

    return (
        <div>

            {/* ================= HERO ================= */}
            <motion.div
                className="courses-hero"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="courses-header-row">
                        <div>
                            <h1>Our Courses</h1>
                            <p>Choose from our comprehensive collection of interview prep courses</p>
                        </div>
                        <motion.button
                            className="cart-btn"
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiShoppingCart /> Cart ({cart.length})
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* ================= FILTER ================= */}
            <div className="filter-bar">
                <div className="container d-flex align-items-center gap-2">
                    <HiOutlineFilter />
                    <span>Filter by:</span>
                    <div className="filter-dropdown" ref={dropdownRef}>
                        <div
                            className={`filter-toggle ${filter !== "All" ? "active" : ""} ${dropdownOpen ? "open" : ""}`}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {filter}
                            <IoChevronDownSharp />
                        </div>
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    className="filter-menu"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {categories.map(cat => (
                                        <div
                                            key={cat}
                                            className={`filter-option ${filter === cat ? "selected" : ""}`}
                                            onClick={() => { setFilter(cat); setDropdownOpen(false); }}
                                        >
                                            {cat}
                                            {filter === cat && <FiCheck className="check-icon" />}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* ================= COURSE CARDS ================= */}
            <div className="courses-grid">
                <div className="container">
                    <div className="row g-4">
                        <AnimatePresence mode="wait">
                            {filteredCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    layout
                                >
                                    <CourseCard
                                        course={course}
                                        onAddToCart={handleAddToCart}
                                        isInCart={cart.includes(course.id)}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;
