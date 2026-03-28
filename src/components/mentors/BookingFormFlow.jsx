import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingSuccessModal from "./BookingSuccessModal";

const BookingFormFlow = ({ mentor, onClose }) => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    date: "",
    time: "",
    notes: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  // 🔥 DERIVED DATA
  const selectedSlots = useMemo(() => {
    return mentor?.availability.find((a) => a.day === form.date)?.slots || [];
  }, [form.date, mentor]);

  // 🔥 VALIDATION
  const validateStep = () => {
    if (step === 1 && !form.date) return "Please select a date";
    if (step === 2 && !form.time) return "Please select a time";
    return "";
  };

  const handleNext = () => {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setStep((prev) => prev + 1);
  };

  const handleConfirm = () => {
    setSuccess({
      mentor: mentor.name,
      date: form.date,
      time: form.time,
      notes: form.notes,
    });
  };

  return (
    <>
      {/* 🔥 MODAL */}
      <div className="booking-modal-overlay">
        <motion.div
          className="booking-modal glass-card"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold m-0">Book Session</h4>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <p className="text-muted small">
            Booking with <strong>{mentor.name}</strong>
          </p>

          {/* 🔥 STEP PROGRESS BAR */}
          <div className="progress mb-3" style={{ height: "6px" }}>
            <div
              className="progress-bar bg-primary"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* 🔥 ERROR */}
          {error && (
            <motion.div
              className="alert alert-danger py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          {/* 🔥 STEP CONTENT */}
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" {...fadeAnim}>
                <h6 className="fw-semibold">Select Date</h6>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {mentor.availability.map((a, i) => (
                    <button
                      key={i}
                      className={`btn rounded-pill px-3 ${
                        form.date === a.day
                          ? "btn-primary"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() =>
                        setForm({ ...form, date: a.day, time: "" })
                      }
                    >
                      {a.day}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" {...fadeAnim}>
                <h6 className="fw-semibold">Select Time</h6>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {selectedSlots.map((slot, i) => (
                    <button
                      key={i}
                      disabled={slot.booked}
                      className={`btn rounded-pill px-3 
                        ${
                          form.time === slot.time
                            ? "btn-primary"
                            : "btn-outline-secondary"
                        }
                        ${slot.booked ? "disabled opacity-50" : ""}
                      `}
                      onClick={() => setForm({ ...form, time: slot.time })}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key="step3" {...fadeAnim}>
                <h6 className="fw-semibold">Add Notes</h6>

                <textarea
                  className="form-control mt-2"
                  rows={4}
                  placeholder="What would you like to discuss?"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 🔥 BUTTONS */}
          <div className="modal-buttons mt-4 d-flex justify-content-between align-items-center">
            {step > 1 && (
              <button
                className="btn btn-outline-secondary"
                onClick={() => setStep((prev) => prev - 1)}
              >
                ← Back
              </button>
            )}

            {step < 3 ? (
              <button className="btn btn-primary ms-auto" onClick={handleNext}>
                Next →
              </button>
            ) : (
              <button
                className="btn btn-success ms-auto"
                onClick={handleConfirm}
              >
                Confirm Booking
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* 🔥 SUCCESS MODAL */}
      <BookingSuccessModal data={success} onClose={onClose} />
    </>
  );
};

/* 🔥 ANIMATION */
const fadeAnim = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.3 },
};

export default BookingFormFlow;
