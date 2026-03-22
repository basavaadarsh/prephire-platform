import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ServiceFeatures = ({ service }) => {
  return (
    <section className="py-5 service-features-section">
      <div className="container">
        <div className="section-head text-center mb-5">
          <span className="section-kicker">Service Highlights</span>
          <h2 className="section-title">Features built for real outcomes</h2>
          <p className="section-subtitle">
            Explore the capabilities that make this service practical, guided,
            and result-focused.
          </p>
        </div>

        <div className="row g-4">
          {service.features?.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="feature-premium-card h-100"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="feature-icon-box">
                    {FeatureIcon ? (
                      <FeatureIcon size={20} />
                    ) : (
                      <FaArrowRight size={18} />
                    )}
                  </div>

                  <h4 className="feature-title mt-4">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>

                  <div className="feature-line"></div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
