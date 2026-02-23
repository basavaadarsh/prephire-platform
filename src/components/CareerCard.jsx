import React from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";

const CareerCard = ({ title, description, type, location, experience, requirements, index }) => {
  return (
    <motion.div
      className="career-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="career-card-header">
        <div>
          <h3>{title}</h3>
          <p className="career-card-desc">{description}</p>
          <div className="career-tags">
            <span className="career-tag">
              <HiOutlineBriefcase /> {type}
            </span>
            <span className="career-tag">
              <MdOutlineLocationOn /> {location}
            </span>
            <span className="career-tag">
              <LuClock3 /> {experience}
            </span>
          </div>
        </div>
        <button className="btn-apply">Apply Now</button>
      </div>

      <div className="career-requirements">
        <h4>Requirements:</h4>
        <ul>
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CareerCard;
