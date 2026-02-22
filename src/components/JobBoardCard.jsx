import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiShare1, CiClock2 } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
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
  onSave
}) => {

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    onSave(id);
  };

  return (
    <motion.div
      className="container card mt-3 mb-4 p-3 p-md-4 shadow rounded-4 text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >

      {/* TOP SECTION */}
      <div className="row align-items-center gy-3">

        {/* LEFT SIDE */}
        <div className="col-12 col-md-7">
          <h5 className="fw-bold mb-1">{title}</h5>
          <p className="color-light mb-0">{company}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-5 d-flex flex-column flex-md-row justify-content-md-end align-items-md-center gap-3">

          {/* Bookmark */}
          <motion.div
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleSave}
            style={{ alignSelf: "flex-start" }}
          >
            <BsBookmark
              className="save-icon mt-2"
              color={saved ? "red" : "black"}
              size={22}
              style={{ cursor: "pointer" }}
            />
          </motion.div>

          {/* Apply + Posted */}
          <div className="d-flex flex-column align-items-start align-items-md-center">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 border-0 rounded"
              id="applynow"
            >
              Apply Now <CiShare1 className="text-white ms-1" />
            </motion.button>

            <motion.p
              className="small text-muted mt-1 mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Posted {posted}
            </motion.p>

          </div>
        </div>
      </div>

      {/* META DATA SECTION */}
      <div className="row mt-3">
        <div className="col-12 d-flex flex-wrap gap-2 small">

          <motion.span whileHover={{ scale: 1.05 }}
            className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
            <IoLocationOutline /> {location}
          </motion.span>

          <motion.span whileHover={{ scale: 1.05 }}
            className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
            <RiLuggageDepositLine /> {type}
          </motion.span>

          <motion.span whileHover={{ scale: 1.05 }}
            className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
            <MdCurrencyRupee /> {salary}
          </motion.span>

          <motion.span whileHover={{ scale: 1.05 }}
            className="border rounded-pill px-3 py-1 d-flex align-items-center gap-1 fw-semibold">
            <CiClock2 /> {experience}
          </motion.span>

        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="row mt-3">
        <div className="col-12">
          <p className="mb-2">{description}</p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="row">
        <div className="col-12 d-flex flex-wrap gap-2 small">

          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="border px-3 py-1 rounded data-con small"
            >
              {skill}
            </motion.span>
          ))}

        </div>
      </div>

    </motion.div>
  );
};

export default JobBoardCard;