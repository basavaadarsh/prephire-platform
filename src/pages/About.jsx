import React from 'react';

const About = () => {
    return (
        <div className="bg-white">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-dark">
                        About PrepHire
                    </h1>
                    <p className="mt-4 fs-5 text-secondary mx-auto" style={{ maxWidth: '650px' }}>
                        Empowering the next generation of professionals to bridge the gap between preparation and performance.
                    </p>
                </div>

                <div className="row g-5 align-items-center mb-5">
                    <div className="col-12 col-md-6">
                        <h2 className="h2 fw-bold text-dark mb-4">Our Mission</h2>
                        <p className="fs-5 text-muted lh-base mb-4">
                            At PrepHire, our mission is to democratize career readiness. We believe that everyone deserves access to high-quality preparation tools, regardless of their background. By providing expert guidance, realistic mock interviews, and tailored resume reviews, we help candidates build the confidence they need to succeed.
                        </p>
                        <p className="fs-5 text-muted lh-base">
                            We are not just a preparation platform; we are a career partner. From the first steps of skill assessment to the final handshake of a job offer, PrepHire is there every step of the way.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="bg-light rounded-4 p-5 d-flex align-items-center justify-content-center text-center">
                            <div>
                                <div style={{ backgroundColor: '#2563eb', width: '80px', height: '80px' }} className="rounded-4 d-flex align-items-center justify-content-center mx-auto mb-4 shadow-lg">
                                    <span className="text-white h1 m-0 fw-bold">P</span>
                                </div>
                                <h3 className="h3 fw-bold text-dark">Prepare. Perform. Get Hired.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light rounded-5 p-5">
                    <h2 className="h2 fw-bold text-dark text-center mb-5">Why Choose PrepHire?</h2>
                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
                                <h3 className="h5 fw-bold mb-3" style={{ color: '#2563eb' }}>Expert Guidance</h3>
                                <p className="text-muted m-0">Access insights from industry veterans who know exactly what recruiters are looking for.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
                                <h3 className="h5 fw-bold mb-3" style={{ color: '#2563eb' }}>Realistic Simulations</h3>
                                <p className="text-muted m-0">Our mock interviews mirror real-world scenarios to help you overcome anxiety and perform your best.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-white p-4 rounded-4 shadow-sm border h-100">
                                <h3 className="h5 fw-bold mb-3" style={{ color: '#2563eb' }}>Community Support</h3>
                                <p className="text-muted m-0">Join a network of ambitious professionals and grow together through shared experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
