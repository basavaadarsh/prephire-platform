import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";
import { IoChevronDownSharp } from "react-icons/io5";
import CourseCard from "../components/CourseCard";
import "../styles/Courses.css";

/* ===== COURSE DATA ===== */
const coursesData = [
    {
        id: 1,
        category: "Complete Package",
        title: "Full Interview Kit",
        duration: "1 Year",
        level: "All Levels",
        features: ["35 Mock Interviews", "Aptitude Course", "Company Exams", "Job Board"],
        rating: 4.8,
        students: 5420,
        price: 1999
    },
    {
        id: 2,
        category: "Mock Interviews",
        title: "Quick Mock Interviews",
        duration: "3 Months",
        level: "All Levels",
        features: ["10 Mock Interviews", "Instant Feedback", "Flexible Schedule"],
        rating: 4.7,
        students: 3210,
        price: 499
    },
    {
        id: 3,
        category: "Aptitude",
        title: "Aptitude & Reasoning Mastery",
        duration: "6 Months",
        level: "Beginner to Advanced",
        features: ["200+ Practice Questions", "Video Solutions", "Mock Tests"],
        rating: 4.6,
        students: 2890,
        price: 799
    },
    {
        id: 4,
        category: "Company Specific",
        title: "TCS NQT Preparation",
        duration: "3 Months",
        level: "Intermediate",
        features: ["Pattern-based Tests", "Previous Papers", "Expert Tips"],
        rating: 4.9,
        students: 4120,
        price: 599
    },
    {
        id: 5,
        category: "Company Specific",
        title: "Accenture Exam Prep",
        duration: "3 Months",
        level: "Intermediate",
        features: ["Coding Tests", "Aptitude Prep", "Communication"],
        rating: 4.7,
        students: 3450,
        price: 599
    },
    {
        id: 6,
        category: "Technical",
        title: "Technical Interview Mastery",
        duration: "6 Months",
        level: "Intermediate to Advanced",
        features: ["DSA Practice", "System Design", "15 Mock Interviews"],
        rating: 4.8,
        students: 2670,
        price: 1299
    },
    {
        id: 7,
        category: "HR Round",
        title: "HR & Behavioral Interview",
        duration: "2 Months",
        level: "All Levels",
        features: ["Common Questions", "Body Language", "Confidence Building"],
        rating: 4.5,
        students: 1890,
        price: 399
    },
    {
        id: 8,
        category: "Career Development",
        title: "Resume Building Workshop",
        duration: "1 Month",
        level: "All Levels",
        features: ["ATS Optimization", "Templates", "Expert Review"],
        rating: 4.6,
        students: 2340,
        price: 299
    }
];

const categories = [
    "All",
    "Complete Package",
    "Mock Interviews",
    "Aptitude",
    "Company Specific",
    "Technical",
    "HR Round",
    "Career Development"
];

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
