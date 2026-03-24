import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import jobs from "../data/jobsData";
import { openPositions } from "../data/CareerData";
import "../styles/JobDetails.css";

// combine both data sources so any job id can be looked up
const allJobs = [...jobs, ...openPositions];

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [applied, setApplied] = useState(false);

    // jobsData ids are numbers, CareerData ids are strings — compare as strings
    const job = useMemo(() => {
        return allJobs.find((j) => String(j.id) === id);
    }, [id]);

    // if job not found, show fallback
    if (!job) {
        return (
            <motion.div
                className="job-details-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="container" style={{ maxWidth: "860px", paddingTop: "60px" }}>
                    <div className="job-not-found">
                        <h2>Job Not Found</h2>
                        <p>The position you're looking for doesn't exist or may have been removed.</p>
                        <button className="job-not-found-btn" onClick={() => navigate("/job-board")}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 12H5m7-7-7 7 7 7" />
                            </svg>
                            Back to Job Board
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }

    // only show badges that exist on this job
    const badges = [
        job.location && {
            label: job.location,
            icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
        },
        job.type && {
            label: job.type,
            icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
        },
        job.salary && {
            label: job.salary,
            icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
        },
        job.experience && {
            label: job.experience,
            icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
        },
    ].filter(Boolean);

    const handleApply = () => setApplied(true);

    return (
        <motion.div
            className="job-details-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
        >
            <div className="container" style={{ maxWidth: "860px", paddingTop: "40px", paddingBottom: "60px" }}>

                {/* ================= BACK LINK ================= */}
                <button className="job-details-back" onClick={() => navigate(-1)}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 12H5m7-7-7 7 7 7" />
                    </svg>
                    Back to Job Board
                </button>

                {/* ================= MAIN CARD ================= */}
                <motion.div
                    className="job-details-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="job-details-header">
                        <div>
                            <h1 className="job-details-title">{job.title}</h1>
                            <p className="job-details-company">
                                {job.company || "Company"}
                                {job.postedDate ? ` · Posted ${job.postedDate}` : ""}
                            </p>

                            <div className="job-details-badges">
                                {badges.map(({ label, icon }) => (
                                    <span key={label} className="job-details-badge">
                                        <svg width="14" height="14" fill="none" stroke="#6b7280" strokeWidth="2" viewBox="0 0 24 24">
                                            {icon}
                                        </svg>
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="job-details-divider" />

                    {/* ================= ABOUT ================= */}
                    <div className="job-details-section">
                        <h3 className="job-details-section-title">About This Role</h3>
                        <p className="job-details-desc">{job.description}</p>
                    </div>

                    {/* ================= RESPONSIBILITIES ================= */}
                    {job.responsibilities && job.responsibilities.length > 0 && (
                        <div className="job-details-section">
                            <h3 className="job-details-section-title">Responsibilities</h3>
                            <ul className="job-details-list">
                                {job.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* ================= REQUIREMENTS ================= */}
                    {job.requirements && job.requirements.length > 0 && (
                        <div className="job-details-section">
                            <h3 className="job-details-section-title">Requirements</h3>
                            <ul className="job-details-list">
                                {job.requirements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* ================= SKILLS ================= */}
                    {job.skills && job.skills.length > 0 && (
                        <div className="job-details-section">
                            <h3 className="job-details-section-title">Skills</h3>
                            <div className="job-details-skills">
                                {job.skills.map((skill) => (
                                    <span key={skill} className="job-details-skill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    <hr className="job-details-divider" />

                    {/* ================= APPLY BUTTON ================= */}
                    <button
                        className="job-details-apply-btn"
                        onClick={handleApply}
                        disabled={applied}
                    >
                        {applied ? (
                            <>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                                Applied
                            </>
                        ) : (
                            <>
                                Apply Now
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </>
                        )}
                    </button>

                    {/* ================= SUCCESS MESSAGE ================= */}
                    <AnimatePresence>
                        {applied && (
                            <motion.div
                                className="job-details-success"
                                initial={{ opacity: 0, y: 10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <div className="job-details-success-icon">
                                    <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="job-details-success-text">Application Sent Successfully!</p>
                                    <p className="job-details-success-sub">We'll get back to you within 3-5 business days.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            </div>
        </motion.div>
    );
};

export default JobDetails;
