import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const MentorReviews = ({ reviews = [] }) => {
  // 🔥 FORMAT DATE
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // 🔥 EMPTY STATE
  if (!reviews.length) {
    return (
      <div className="empty-state text-center py-4">
        <h6 className="fw-semibold">No reviews yet</h6>
        <p className="text-muted small">
          Be the first to book and share your experience 🚀
        </p>
      </div>
    );
  }

  return (
    <div className="reviews-section">
      <h4 className="fw-bold mb-3">Reviews</h4>

      {reviews.map((r, i) => (
        <motion.div
          key={i}
          className="review-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center">
            <strong>{r.user || "Anonymous"}</strong>

            {/* 🔥 STAR RATING */}
            <div className="d-flex align-items-center gap-1">
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  className={
                    idx < Math.round(r.rating) ? "star-icon" : "star-disabled"
                  }
                />
              ))}
              <span className="ms-1 small">{r.rating}</span>
            </div>
          </div>

          {/* COMMENT */}
          <p className="mt-2 mb-1">{r.comment}</p>

          {/* DATE */}
          {r.date && <small className="text-muted">{formatDate(r.date)}</small>}
        </motion.div>
      ))}
    </div>
  );
};

export default MentorReviews;
