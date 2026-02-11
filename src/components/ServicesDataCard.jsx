import React from "react";
import { motion } from "framer-motion";
import { IoVideocamOutline, IoBulbOutline } from "react-icons/io5";
import { LiaCheckCircle } from "react-icons/lia";
import { LuFileSpreadsheet, LuBaggageClaim } from "react-icons/lu";
import { RiFileList3Line } from "react-icons/ri";

/* ICON MAP */
const iconMap = {
  video: IoVideocamOutline,
  resume: LuFileSpreadsheet,
  guidance: IoBulbOutline,
  placement: LuBaggageClaim,
  corporate: RiFileList3Line
};

const ServicesDataCard = ({ icon, title, subtitle, features, price }) => {
  const IconComponent = iconMap[icon] || IoVideocamOutline;

  return (
    <motion.div
      className="container-fluid border rounded-4 shadow servicesDataCard p-4 h-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      {/* ===== HEADER ===== */}
      <motion.div
        className="d-flex gap-3 align-items-start mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <IconComponent className="icon-dec fs-2 flex-shrink-0" />
        <div>
          <h5 className="m-0 fw-semibold">{title}</h5>
          <p className="m-0 color-light small">{subtitle}</p>
        </div>
      </motion.div>

      {/* ===== FEATURES ===== */}
      <ul className="list-unstyled d-flex flex-column gap-2 color-light mt-3 mb-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="d-flex align-items-start gap-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <LiaCheckCircle className="mark-icon fs-5 mt-1" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <hr />

      {/* ===== FOOTER ===== */}
      <motion.div
        className="d-flex justify-content-between align-items-center flex-wrap gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <span className="fw-semibold text-blue">{price}</span>
        <button className="btn border px-3">Get Started</button>
      </motion.div>
    </motion.div>
  );
};

export default ServicesDataCard;
