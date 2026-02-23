import React from "react";
import { motion } from "framer-motion";
import { CiShare1, CiClock2 } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RiLuggageDepositLine } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";

const JobBoardCard = ({
  id,
  title,
  company,
  location,
  type,
  salary,
  experience,
  description,
  skills,
  posted,
  isSaved,
  onSave
}) => {
  return (
    <motion.div
      className="card mt-3 mb-4 p-3 p-md-4 shadow rounded-4 text-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* TOP SECTION */}
      <div className="row align-items-center gy-3">

        {/* LEFT SIDE */}
        <div className="col-12 col-md-7">
          <h5 className="fw-bold mb-1">{title}</h5>
          <p className="color-light mb-0">{company}</p>
        </div>

        {/* RIGHT SIDE - ALWAYS SIDE BY SIDE */}
        <div className="col-12 col-md-5 d-flex justify-content-md-end">
          
          <div className="d-flex align-items-center gap-3">

            {/* BOOKMARK BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onSave(id)}
              className="border-0 d-flex align-items-center justify-content-center"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                backgroundColor: isSaved ? "#f1f1f1" : "secondary",
                transition: "0.3s ease"
              }}
            >
              <IoBookmark
                size={20}
                color={isSaved ? "#2563eb" : "#6c757d"}
              />
            </motion.button>

            {/* APPLY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 border-0 rounded"
              style={{ background: "#2563eb", color: "white" }}
            >
              Apply Now <CiShare1 className="ms-1" />
            </motion.button>

          </div>
        </div>
      </div>

      {/* META DATA */}
      <div className="mt-3 d-flex flex-wrap gap-2 small">
        <span className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
          <IoLocationOutline /> {location}
        </span>

        <span className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
          <RiLuggageDepositLine /> {type}
        </span>

        <span className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
          <MdCurrencyRupee /> {salary}
        </span>

        <span className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
          <CiClock2 /> {experience}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-3 mb-2">{description}</p>

      {/* SKILLS */}
      <div className="d-flex flex-wrap gap-2 small">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border px-3 py-1 rounded data-con small"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* POSTED */}
      <p className="small text-muted mt-3 mb-0">
        Posted {posted}
      </p>
    </motion.div>
  );
};

export default JobBoardCard;