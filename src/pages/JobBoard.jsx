import React, { useState, useMemo } from "react";
import JobBoardCard from "../components/JobBoardCard";
import jobsData from "../data/jobsData";
import "../styles/JobBoard.css";
import { BsBookmark } from "react-icons/bs";

const JobBoard = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [savedJobs, setSavedJobs] = useState([]);

  // ✅ Proper state toggle (safe way)
  const handleSave = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id)
        ? prev.filter((jobId) => jobId !== id)
        : [...prev, id]
    );
  };

  // ✅ Memoized filtering (performance optimized)
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      return (
        (job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())) &&
        (location === "All Locations" || job.location === location) &&
        (type === "All Types" || job.type === type)
      );
    });
  }, [search, location, type]);

  return (
    <div className="container-fluid p-0 m-0 jobboard-wrapper">
      
      {/* HERO SECTION */}
      <div className="jobboard-hero py-5 px-3">
        <div className="container">
          <h1 className="fw-semibold">Job Board</h1>
          <p className="text-muted">
            Find your dream job from our partner companies
          </p>

          {/* Filters - Fully Responsive */}
          <div className="row g-3 mt-3">

            <div className="col-12 col-md-6 col-lg-7">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Search by job title or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-3 col-lg-2">
              <select
                className="form-select shadow-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>All Locations</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Gurgaon</option>
              </select>
            </div>

            <div className="col-12 col-md-3 col-lg-2">
              <select
                className="form-select shadow-sm"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>All Types</option>
                <option>Full-time</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      {/* Jobs Header */}
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 gap-3">
        <p className="fw-semibold m-0">
          Jobs Found: {filteredJobs.length}
        </p>

        <div className="saved-jobs px-3 py-2 rounded d-flex align-items-center gap-2">
          <BsBookmark />
          Saved Jobs: {savedJobs.length}
        </div>
      </div>

      {/* Job Cards */}
      <div className="container mt-4">
        {filteredJobs.map((job) => (
          <JobBoardCard
            key={job.id}
            {...job}
            isSaved={savedJobs.includes(job.id)}
            onSave={handleSave}
          />
        ))}
      </div>

    </div>
  );
};

export default JobBoard;