import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const companies = ['Google', 'Amazon', 'Microsoft', 'Accenture', 'Infosys'];

const PlacementSupport = () => (
    <ServicePageLayout
        title="Placement Support"
        description="Connect with opportunities at leading companies."
    >
        <motion.div
            className="row g-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {companies.map((company) => (
                <div key={company} className="col-md-6">
                    <div className="border rounded-3 p-3 h-100">
                        <div className="fw-medium">{company}</div>
                    </div>
                </div>
            ))}
        </motion.div>
    </ServicePageLayout>
);

export default PlacementSupport;
