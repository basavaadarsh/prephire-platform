import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Star } from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const StarRating = ({ rating }) => {
  const rounded = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const isActive = index < rounded;
        return (
          <Star
            key={`star-${index}`}
            size={16}
            className={isActive ? 'text-yellow-400' : 'text-slate-300'}
            fill={isActive ? 'currentColor' : 'none'}
          />
        );
      })}
    </div>
  );
};

const Mentors = () => (
  <motion.div
    className="dashboard-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="page-header">
      <div>
        <h1 className="page-title text-slate-900 text-2xl font-semibold">Find a Mentor</h1>
        <p className="page-subtitle text-slate-500">Get guidance from industry experts</p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {dashboardData.mentors.map((mentor) => (
        <div
          key={mentor.name}
          className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
        >
          <div className="flex items-start gap-4">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">{mentor.name}</h3>
              <p className="text-sm text-slate-500">
                {mentor.role} at {mentor.company}
              </p>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <StarRating rating={mentor.rating} />
                <span>
                  {mentor.rating.toFixed(1)} ({mentor.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Specialties</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {mentor.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar size={16} />
              <span>{mentor.availability}</span>
            </div>
            <div className="text-base font-semibold text-slate-900">
              ${mentor.hourlyRate}/hour
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <MessageSquare size={16} />
              Message
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              <Calendar size={16} />
              Book Session
            </button>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Mentors;
