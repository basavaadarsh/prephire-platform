import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ServicePricing = ({ service }) => {
  const handleBooking = () => {
    console.log("Booking service:", service.id);
  };

  return (
    <section className="py-5">
      <div className="container">
        <motion.div
          className="pricing-premium-card mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="section-kicker">Transparent pricing</span>
              <h2 className="section-title mt-2">
                Choose this service and start improving faster
              </h2>
              <p className="section-subtitle mb-4">
                Clear pricing, expert support, and a practical workflow designed
                for real preparation.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="pricing-benefit">
                    <FaCheckCircle />
                    <span>Expert-backed guidance</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pricing-benefit">
                    <FaCheckCircle />
                    <span>Outcome-focused sessions</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pricing-benefit">
                    <FaCheckCircle />
                    <span>Premium preparation support</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pricing-benefit">
                    <FaCheckCircle />
                    <span>Flexible scheduling flow</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="price-box">
                <p className="mini-label mb-2">Starting from</p>
                <h2 className="price-main">{service.price}</h2>
                {service.oldPrice ? (
                  <p className="price-old mb-3">{service.oldPrice}</p>
                ) : null}

                <button
                  className="btn btn-primary w-100 py-3 fw-semibold"
                  onClick={handleBooking}
                >
                  Book Now
                </button>

                <button className="btn btn-outline-primary w-100 py-3 fw-semibold mt-3">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePricing;
