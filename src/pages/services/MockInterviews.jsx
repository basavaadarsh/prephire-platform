import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const MockInterviews = () => (
    <ServicePageLayout
        title="Mock Interviews"
        description="Choose from available mock interview slots."
    >
        <motion.div
            className="row g-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {[
                { label: 'Mon – 10:00 AM' },
                { label: 'Tue – 02:00 PM' },
                { label: 'Wed – 04:00 PM' },
            ].map((slot) => (
                <div key={slot.label} className="col-md-4">
                    <div className="border rounded-3 p-3 h-100">
                        <div className="text-secondary small">{slot.label}</div>
                        <div className="fw-semibold"></div>
                    </div>
                </div>
            ))}
        </motion.div>
    </ServicePageLayout>
);

export default MockInterviews;
