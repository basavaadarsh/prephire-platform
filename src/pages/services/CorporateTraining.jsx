import React from 'react';
import { motion } from 'framer-motion';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const CorporateTraining = () => (
    <ServicePageLayout
        title="Corporate Training"
        description="Share your training requirements with us."
    >
        <motion.form
            className="d-flex flex-column gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div>
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div>
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" />
            </div>
            <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
            </div>
            <div>
                <label className="form-label">Requirement Description</label>
                <textarea rows="4" className="form-control"></textarea>
            </div>
            <div>
                <button type="button" className="btn btn-outline-secondary">
                    Submit
                </button>
            </div>
        </motion.form>
    </ServicePageLayout>
);

export default CorporateTraining;
