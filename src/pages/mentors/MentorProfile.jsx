import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/mentors.css";

import { mentorsData } from "../../data/mentorsData";
import BookingFormFlow from "../../components/mentors/BookingFormFlow";
import MentorReviews from "../../components/mentors/MentorReviews";

const MentorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showBooking, setShowBooking] = useState(false);

  const mentor = mentorsData.find((m) => m.id === id);

  if (!mentor) {
    return (
      <div className="container text-center py-5">
        <h2>Mentor not found</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/mentors")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mentor-profile-page container py-5">
      <div className="row g-4">
        {/* ================= LEFT ================= */}
        <div className="col-lg-8">
          {/* PROFILE HEADER */}
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="d-flex align-items-center gap-4 flex-wrap">
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="profile-photo"
              />

              <div>
                <h2 className="fw-bold">{mentor.name}</h2>
                <p className="text-muted mb-1">{mentor.company}</p>
                <p className="text-muted">{mentor.experience}</p>
              </div>
            </div>

            <p className="mt-3">{mentor.bio}</p>
          </motion.div>

          {/* 🔥 SKILLS (FIXED) */}
          <motion.div
            className="profile-card mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4>Skills</h4>

            <div className="mt-2 d-flex flex-wrap gap-2">
              {mentor.skills.map((s, i) => (
                <span key={i} className="skill-chip">
                  {s.name} ({s.level}) {/* ✅ FIX */}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 🔥 AVAILABILITY (FIXED) */}
          <motion.div
            className="profile-card mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4>Availability</h4>

            {mentor.availability.map((a, i) => (
              <div key={i} className="availability-row mt-2">
                <strong>{a.day}</strong>

                <div className="slots mt-1 d-flex flex-wrap gap-2">
                  {a.slots.map((slot, idx) => (
                    <span
                      key={idx}
                      className={`slot-chip ${
                        slot.booked ? "booked" : "available"
                      }`}
                    >
                      {slot.time} {/* ✅ FIX */}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* 🔥 REVIEWS */}
          <motion.div
            className="profile-card mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MentorReviews reviews={mentor.reviews} />
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="col-lg-4">
          <motion.div
            className="booking-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h4 className="fw-bold">Book a Session</h4>

            <p className="text-muted">
              Get personalized guidance from {mentor.name}
            </p>

            {/* 🔥 PRICING (NEW FEATURE) */}
            <div className="pricing-box mt-3">
              <p>1:1 Session: ₹{mentor.pricing.oneToOne}</p>
              <p>Mock Interview: ₹{mentor.pricing.mockInterview}</p>
              <p>Resume Review: ₹{mentor.pricing.resumeReview}</p>
            </div>

            <button
              className="btn btn-primary w-100 mt-3"
              onClick={() => setShowBooking(true)}
            >
              Book Now →
            </button>
          </motion.div>
        </div>
      </div>

      {/* 🔥 BOOKING MODAL */}
      {showBooking && (
        <BookingFormFlow
          mentor={mentor}
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  );
};

export default MentorProfile;
