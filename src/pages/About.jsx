import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard";
import AboutProfile from "../components/AboutProfile";
import teamData from "../data/teamData";

import { FaBullseye } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { GiHumanPyramid } from "react-icons/gi";
import { PiMedalLight } from "react-icons/pi";

const About = () => {

  /* ---------------- Skeleton Loader ---------------- */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  /* ---------------- Count Animation Hook ---------------- */
  const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [end, duration]);

    return count;
  };

  const students = useCountUp(10000);
  const placement = useCountUp(85);
  const companies = useCountUp(500);
  const interviews = useCountUp(50000);

  const aboutData = [
    {
      icon: FaBullseye,
      title: "Our Mission",
      description:
        "To empower students and job seekers with the skills and confidence needed to ace interviews and secure their dream jobs."
    },
    {
      icon: IoEyeOutline,
      title: "Our Vision",
      description:
        "To become India's most trusted interview preparation platform, bridging the gap between talent and opportunity."
    },
    {
      icon: GiHumanPyramid,
      title: "Our Approach",
      description:
        "Personalized mentoring, real-world mock interviews, and comprehensive skill development programs."
    },
    {
      icon: PiMedalLight,
      title: "Our Impact",
      description:
        "10,000+ students placed in top companies with an 85% success rate and counting."
    }
  ];

  /* ---------------- Skeleton UI ---------------- */
  if (loading) {
    return (
      <div className="container py-5">
        <div className="placeholder-glow">
          <span className="placeholder col-12 mb-3" style={{ height: "40px" }}></span>
          <span className="placeholder col-10 mb-3"></span>
          <span className="placeholder col-8 mb-3"></span>
          <span className="placeholder col-12 mb-3"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <motion.div
        className="text-center mb-5 bg-dark-light py-5 px-3"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="display-5 fw-semibold pt-5">About PrepHire</h1>
        <p className="fs-5 color-light mt-3 pb-4">
          Your trusted partner in career success and interview preparation
        </p>
      </motion.div>

      {/* STORY */}
      <motion.div
        className="container mb-5 py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h2 className="text-center mb-4 fs-1">Our Story</h2>
            <p className="color-light fs-5">
              PrepHire was founded in 2020 with a simple yet powerful mission:
              to help job seekers prepare better and perform confidently in interviews.
              What started as a small initiative has now grown into a comprehensive
              EdTech platform serving thousands of students across India.
            </p>
            <p className="color-light fs-5">
              We understand the challenges faced by candidates during job interviews —
              the nervousness, the uncertainty, and the fear of the unknown.
            </p>
            <p className="color-light fs-5">
              Our team of experienced interviewers from top companies like Google,
              Amazon, Microsoft, and leading Indian IT firms work tirelessly.
            </p>
          </div>
        </div>
      </motion.div>

      {/* WHY CHOOSE */}
      <div className="bg-light py-5">
        <div className="container py-4">
          <h2 className="text-center mb-5">Why Choose PrepHire?</h2>
          <div className="row justify-content-center">
            {aboutData.map((item, index) => (
              <AboutCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Team</h2>
          <p className="color-light">
            Industry experts dedicated to your success
          </p>
        </div>

        <div className="row justify-content-center">
          {teamData.map((member) => (
            <AboutProfile key={member.id} {...member} />
          ))}
        </div>
      </div>

      
      {/* STATS SECTION */}
      <div className="bg-blue text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4">
              <h2 className="fw-bold">{students.toLocaleString()}+</h2>
              <p className="">Students Trained</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h2 className="fw-bold">{placement}%</h2>
              <p className="">Placement Rate</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h2 className="fw-bold">{companies}+</h2>
              <p className="">Partner Companies</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="fw-bold">{interviews.toLocaleString()}+</h2>
              <p className="">Mock Interviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;