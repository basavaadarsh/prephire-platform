import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { mentorsData } from "../../data/mentorsData";
import MentorCard from "../../components/mentors/MentorCard";
import MentorFilter from "../../components/mentors/MentorFilter";
import EmptyState from "../../components/common/EmptyState";

import "../../styles/mentors.css";

const MentorsList = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // 🔥 FILTER + SEARCH (SAFE FIX FOR OBJECT SKILLS)
  const filteredMentors = useMemo(() => {
    return mentorsData.filter((mentor) => {
      const matchesFilter = filter === "All" || mentor.expertise === filter;

      const matchesSearch =
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.company.toLowerCase().includes(search.toLowerCase()) ||
        mentor.skills.some((s) =>
          (s.name || s).toLowerCase().includes(search.toLowerCase()),
        );

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="mentors-page">
      {/* ================= HERO ================= */}
      <motion.div
        className="container text-center py-5 mentor-header-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="fw-bold">Find Your Mentor</h1>

        <p className="text-muted mt-2">
          Connect with industry experts and accelerate your career 🚀
        </p>

        {/* 🔍 SEARCH */}
        <motion.div
          className="search-box mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search mentors, skills, companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>
      </motion.div>

      {/* ================= FILTER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <MentorFilter selected={filter} onChange={setFilter} />
      </motion.div>

      {/* ================= GRID ================= */}
      <div className="container pb-5">
        {filteredMentors.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="d-flex justify-content-center"
          >
            <EmptyState
              title="No Mentors Found"
              subtitle="Try changing filters or search keyword"
            />
          </motion.div>
        ) : (
          <div className="row g-4">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                className="col-lg-4 col-md-6 col-sm-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <MentorCard
                  mentor={mentor}
                  onViewProfile={(id) => navigate(`/mentor/${id}`)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorsList;
