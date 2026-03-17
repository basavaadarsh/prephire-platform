import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const ResumeReview = () => (
    <ServicePageLayout
        title="Resume Review"
        description="Upload your resume and select a review package."
    >
        <motion.div
            className="d-flex flex-column gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <button type="button" className="btn btn-outline-secondary align-self-start">
                Upload Resume
            </button>

            <div className="row g-3">
                {[
                    { label: 'Basic', price: '₹499' },
                    { label: 'Pro', price: '₹999' },
                    { label: 'Expert', price: '₹1499' },
                ].map((plan) => (
                    <div key={plan.label} className="col-md-4">
                        <div className="border rounded-3 p-3 h-100">
                            <div className="text-secondary small">{plan.label}</div>
                            <div className="fw-semibold">{plan.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    </ServicePageLayout>
);

export default ResumeReview;
