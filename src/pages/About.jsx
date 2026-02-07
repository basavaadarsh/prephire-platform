import React from 'react';

const About = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        About PrepHire
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Empowering the next generation of professionals to bridge the gap between preparation and performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At PrepHire, our mission is to democratize career readiness. We believe that everyone deserves access to high-quality preparation tools, regardless of their background. By providing expert guidance, realistic mock interviews, and tailored resume reviews, we help candidates build the confidence they need to succeed.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are not just a preparation platform; we are a career partner. From the first steps of skill assessment to the final handshake of a job offer, PrepHire is there every step of the way.
                        </p>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-8 flex items-center justify-center">
                        <div className="text-center">
                            <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <span className="text-white text-4xl font-bold">P</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Prepare. Perform. Get Hired.</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose PrepHire?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-blue-600">Expert Guidance</h3>
                            <p className="text-gray-600">Access insights from industry veterans who know exactly what recruiters are looking for.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-blue-600">Realistic Simulations</h3>
                            <p className="text-gray-600">Our mock interviews mirror real-world scenarios to help you overcome anxiety and perform your best.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-blue-600">Community Support</h3>
                            <p className="text-gray-600">Join a network of ambitious professionals and grow together through shared experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
