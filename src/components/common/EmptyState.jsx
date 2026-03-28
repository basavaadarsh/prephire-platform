import React from "react";
import { motion } from "framer-motion";

const EmptyState = ({
  title = "No Data Found",
  subtitle = "Try adjusting your filters or search",
  actionText,
  onAction,
}) => {
  return (
    <motion.div
      className="empty-state text-center py-5 w-100"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {/* ICON */}
      <div className="empty-icon mb-3">📭</div>

      {/* TITLE */}
      <h4 className="fw-bold">{title}</h4>

      {/* SUBTITLE */}
      <p className="text-muted">{subtitle}</p>

      {/* OPTIONAL BUTTON */}
      {actionText && (
        <button className="btn btn-primary mt-2" onClick={onAction}>
          {actionText}
        </button>
      )}
    </motion.div>
  );
};

export default EmptyState;
