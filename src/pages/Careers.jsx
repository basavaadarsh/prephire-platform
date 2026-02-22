import React from "react";
import { motion } from "framer-motion";
import { GoChevronRight } from "react-icons/go";
import CareerCard from "../components/CareerCard";
import { benefits, openPositions, internships } from "../data/CareerData";
import "../styles/Career.css";

const Careers = () => {
    return (
        <div>

            {/* ================= HERO SECTION ================= */}
            <motion.div
                className="career-hero"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1>Join Our Team</h1>
                <p>Help us empower the next generation of professionals</p>
                <a href="#positions">
                    <button className="btn-view-positions">
                        View Open Positions
                    </button>
                </a>
            </motion.div>

            {/* ================= WHY JOIN SECTION ================= */}
            <motion.div
                className="benefits-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Why Join PrepHire?</h2>
                <p className="subtitle">
                    Be part of a mission-driven team making education accessible
                </p>

                <div className="container">
                    <div className="row">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={index}
                                className="col-lg-4 col-md-6 col-sm-12"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <div className="benefit-item">
                                    <GoChevronRight className="benefit-icon" />
                                    <span>{item}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ================= OPEN POSITIONS SECTION ================= */}
            <div className="positions-section container" id="positions">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Open Positions</h2>
                    <p className="subtitle">
                        Find the perfect role that matches your skills
                    </p>
                </motion.div>

                {openPositions.map((job, index) => (
                    <CareerCard
                        key={job.id}
                        title={job.title}
                        description={job.description}
                        type={job.type}
                        location={job.location}
                        experience={job.experience}
                        requirements={job.requirements}
                        index={index}
                    />
                ))}
            </div>

            {/* ================= INTERNSHIP SECTION ================= */}
            <div className="internship-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Internship Opportunities</h2>
                        <p className="subtitle">
                            Start your career journey with hands-on experience
                        </p>
                    </motion.div>

                    <div className="row g-4">
                        {internships.map((intern, index) => (
                            <motion.div
                                key={intern.id}
                                className="col-lg-4 col-md-6 col-sm-12"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                            >
                                <div className="intern-card">
                                    <h4>{intern.title}</h4>
                                    <p className="desc">{intern.description}</p>

                                    <div className="intern-detail-row">
                                        <span className="label">Duration:</span>
                                        <span className="value">{intern.duration}</span>
                                    </div>

                                    <div className="intern-detail-row">
                                        <span className="label">Stipend:</span>
                                        <span className="stipend">{intern.stipend}</span>
                                    </div>

                                    <button className="btn-apply-intern">
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= MENTOR CTA SECTION ================= */}
            <motion.div
                className="mentor-cta"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Become an Interview Mentor</h2>
                <p>
                    Share your expertise and help students succeed. Flexible hours,
                    rewarding work.
                </p>
                <button className="btn-mentor-apply">
                    Apply as Mentor
                </button>
            </motion.div>

        </div>
    );
};

export default Careers;