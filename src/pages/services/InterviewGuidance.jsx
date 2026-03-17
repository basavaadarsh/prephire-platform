import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const steps = [
    'Resume Preparation',
    'Technical Practice',
    'Mock Interviews',
    'Final Interview',
];

const InterviewGuidance = () => (
    <ServicePageLayout
        title="Interview Guidance"
        description="Follow these steps to prepare effectively."
    >
        <motion.div
            className="border-start ps-3 d-flex flex-column gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {steps.map((step, index) => (
                <div key={step} className="d-flex align-items-start gap-2">
                    <span
                        className="rounded-circle bg-secondary"
                        style={{ width: '8px', height: '8px', marginTop: '6px' }}
                    />
                    <div className="fw-medium">Step {index + 1} – {step}</div>
                </div>
            ))}
        </motion.div>
    </ServicePageLayout>
);

export default InterviewGuidance;
