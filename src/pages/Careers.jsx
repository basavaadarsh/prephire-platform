import React from "react";
import { motion } from "framer-motion";
import { GoChevronRight } from "react-icons/go";
import CareerCard from "../components/CareerCard";
import "../styles/Career.css";

/* ===== BENEFITS DATA ===== */
const benefits = [
    "Competitive salary and performance bonuses",
    "Flexible work hours and remote options",
    "Learning and development opportunities",
    "Health insurance and wellness programs",
    "Collaborative and innovative work culture",
    "Make a real impact on students' careers"
];

/* ===== OPEN POSITIONS DATA ===== */
const openPositions = [
    {
        id: 1,
        title: "Interview Mentor (Technical)",
        description: "Conduct technical mock interviews and provide detailed feedback to students",
        type: "Full-time",
        location: "Bangalore / Remote",
        experience: "5+ years",
        requirements: [
            "5+ years in software development",
            "Interview experience at top companies",
            "Good communication skills"
        ]
    },
    {
        id: 2,
        title: "Interview Mentor (HR)",
        description: "Guide students through HR and behavioral interview preparation",
        type: "Part-time",
        location: "Remote",
        experience: "3+ years",
        requirements: [
            "HR experience in recruitment",
            "Strong interpersonal skills",
            "Flexible schedule"
        ]
    },
    {
        id: 3,
        title: "Content Developer",
        description: "Create engaging course content, mock tests, and study materials",
        type: "Full-time",
        location: "Bangalore",
        experience: "2+ years",
        requirements: [
            "EdTech content experience",
            "Subject matter expertise",
            "Creative writing skills"
        ]
    },
    {
        id: 4,
        title: "Business Development Executive",
        description: "Expand our corporate training partnerships and student outreach",
        type: "Full-time",
        location: "Bangalore",
        experience: "3+ years",
        requirements: [
            "B2B sales experience",
            "EdTech or HR industry background",
            "Strong networking ability"
        ]
    }
];

/* ===== INTERNSHIPS DATA ===== */
const internships = [
    {
        id: 1,
        title: "Marketing Intern",
        description: "Assist with social media, content creation, and digital marketing campaigns",
        duration: "3-6 months",
        stipend: "₹10,000/month"
    },
    {
        id: 2,
        title: "Operations Intern",
        description: "Support daily operations, student coordination, and process improvement",
        duration: "3-6 months",
        stipend: "₹8,000/month"
    },
    {
        id: 3,
        title: "Tech Intern (Full Stack)",
        description: "Work on platform features, bug fixes, and new integrations",
        duration: "6 months",
        stipend: "₹15,000/month"
    }
];

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
                    <button className="btn-view-positions">View Open Positions</button>
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
                <p className="subtitle">Be part of a mission-driven team making education accessible</p>

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
                    <p className="subtitle">Find the perfect role that matches your skills</p>
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
                        <p className="subtitle">Start your career journey with hands-on experience</p>
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
                                    <button className="btn-apply-intern">Apply Now</button>
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
                <p>Share your expertise and help students succeed. Flexible hours, rewarding work.</p>
                <button className="btn-mentor-apply">Apply as Mentor</button>
            </motion.div>

        </div>
    );
};

export default Careers;
