import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServiceHero = ({ service }) => {
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <section className="service-hero-wrap position-relative overflow-hidden">
      {/* 🔥 BACKGROUND GLOW EFFECTS */}
      <div className="service-hero-blur hero-blur-one"></div>
      <div className="service-hero-blur hero-blur-two"></div>

      <div className="container py-5 position-relative">
        <div className="row align-items-center g-4 min-vh-50">
          {/* ================= LEFT CONTENT ================= */}
          <div className="col-lg-7">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {/* BADGE */}
              <motion.span className="service-badge" variants={fadeUp}>
                {service.badge || "Premium Service"}
              </motion.span>

              {/* TITLE */}
              <motion.h1 className="service-hero-title mt-3" variants={fadeUp}>
                {service.title}
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                className="service-hero-subtitle mt-3"
                variants={fadeUp}
              >
                {service.subtitle}
              </motion.p>

              {/* HIGHLIGHTS */}
              <motion.div
                className="d-flex flex-wrap gap-2 mt-4"
                variants={fadeUp}
              >
                {service.highlights?.map((item, index) => (
                  <span key={index} className="hero-chip">
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                className="d-flex flex-wrap gap-3 mt-4 align-items-center"
                variants={fadeUp}
              >
                <button
                  className="btn btn-primary btn-lg px-4 hero-btn-primary"
                  onClick={() => console.log("Book:", service.id)}
                >
                  Book Now →
                </button>

                <button
                  className="btn btn-outline-primary btn-lg px-4 hero-btn-secondary"
                  onClick={() => navigate("/services")}
                >
                  Explore More
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="col-lg-5">
            <motion.div
              className="hero-preview-card"
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* ICON */}
              <div className="hero-icon-wrap">
                {Icon ? <Icon size={28} /> : <FaStar size={28} />}
              </div>

              {/* PRICE */}
              <div className="hero-price-row">
                <div>
                  <p className="mini-label mb-1">Starting Price</p>
                  <h3 className="mb-0 fw-bold">{service.price}</h3>
                </div>

                {service.oldPrice && (
                  <span className="old-price">{service.oldPrice}</span>
                )}
              </div>

              {/* STATS */}
              <div className="row g-3 mt-3">
                {service.stats?.map((stat, index) => (
                  <motion.div
                    className="col-4"
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="hero-stat-card">
                      <h5>{stat.value}</h5>
                      <p>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 🔥 ANIMATION VARIANT */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default ServiceHero;
