import React, { useState } from "react";
import { motion } from "framer-motion";
import JobBoardCard from "../components/JobBoardCard";
import jobsData from "../data/jobsData";
import "../styles/JobBoard.css";
import { BsBookmark } from "react-icons/bs";

const JobBoard = () => {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [savedJobs, setSavedJobs] = useState([]);

  const handleSave = (id) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter(job => job !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  };

  const filteredJobs = jobsData.filter(job => {
    return (
      (job.title.toLowerCase().includes(search.toLowerCase()) ||
       job.company.toLowerCase().includes(search.toLowerCase())) &&
      (location === "All Locations" || job.location === location) &&
      (type === "All Types" || job.type === type)
    );
  });

  return (
    <div className="container-fluid p-0 m-0 jobboard-wrapper">

      <div className="jobboard-hero p-5">
        <div className="container">
          <h1 className="display-5 fw-semibold">Job Board</h1>
          <p className="fs-5 text-muted">
            Find your dream job from our partner companies
          </p>

          <div className="row g-3 mt-4">

            <div className="col-12 col-md-6 col-lg-7">
              <input
                type="text"
                className="form-control p-3 shadow-sm"
                placeholder="Search by job title or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <select className="form-select p-3 shadow-sm"
                onChange={(e) => setLocation(e.target.value)}>
                <option>All Locations</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Gurgaon</option>
              </select>
            </div>

            <div className="col-6 col-md-3 col-lg-2">
              <select className="form-select p-3 shadow-sm"
                onChange={(e) => setType(e.target.value)}>
                <option>All Types</option>
                <option>Full-time</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-between mt-4">
        <p className="fw-semibold">Jobs Found: {filteredJobs.length}</p>
        <p className="saved-jobs px-3 py-2 rounded">
          <BsBookmark /> Saved Jobs: {savedJobs.length}
        </p>
      </div>

      <div className="container mt-4">
        {filteredJobs.map(job => (
          <JobBoardCard
            key={job.id}
            {...job}
            onSave={handleSave}
          />
        ))}
      </div>

    </div>
  );
};

export default JobBoard;