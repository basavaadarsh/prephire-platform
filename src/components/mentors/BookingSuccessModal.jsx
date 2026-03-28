import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaCopy } from "react-icons/fa";

const BookingSuccessModal = ({ data, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const meetingLink = "https://zoom.us/abc123";

  // 🔥 COPY HANDLER (NO ALERT)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="booking-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="booking-success-card text-center"
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3 }}
        >
          {/* ✅ ICON */}
          <div className="success-icon">
            <FaCheckCircle />
          </div>

          {/* TITLE */}
          <h3 className="fw-bold mt-3">Booking Confirmed!</h3>

          <p className="text-muted mb-4">
            Your session has been successfully scheduled 🎉
          </p>

          {/* 🔥 DETAILS */}
          <div className="success-details text-start">
            <div className="detail-row">
              <span>Mentor</span>
              <strong>{data.mentor}</strong>
            </div>

            <div className="detail-row">
              <span>Date</span>
              <strong>{data.date}</strong>
            </div>

            <div className="detail-row">
              <span>Time</span>
              <strong>{data.time}</strong>
            </div>

            {data.notes && (
              <div className="detail-row">
                <span>Topic</span>
                <strong>{data.notes}</strong>
              </div>
            )}
          </div>

          {/* 🔥 MEETING LINK */}
          <div className="meeting-link-box mt-3 d-flex align-items-center justify-content-between">
            <span className="link-text">{meetingLink}</span>

            <button className="copy-btn" onClick={handleCopy}>
              {copied ? "✔" : <FaCopy />}
            </button>
          </div>

          {/* 🔥 ACTION */}
          <div className="mt-4">
            <button className="btn btn-primary px-4" onClick={onClose}>
              Done
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingSuccessModal;
