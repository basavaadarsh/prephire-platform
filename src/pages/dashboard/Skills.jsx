import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Plus, ThumbsUp } from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const levelClassMap = {
  Expert: 'text-blue-600',
  Advanced: 'text-green-600',
  Intermediate: 'text-orange-600',
};

const getLevelClass = (level) => levelClassMap[level] || 'text-slate-500';

const Skills = () => (
  <motion.div
    className="dashboard-page"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="page-header">
      <div>
        <h1 className="page-title text-slate-900 text-2xl font-semibold">Skills</h1>
        <p className="page-subtitle text-slate-500">Showcase your expertise and track growth</p>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        <Plus size={16} />
        Add Skill
      </button>
    </div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {dashboardData.skillCards.map((skill) => (
        <div
          key={skill.name}
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
              <p className={`text-sm font-semibold ${getLevelClass(skill.level)}`}>{skill.level}</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-500">
              <Medal size={18} />
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Proficiency Level</span>
              <span className="text-sm font-semibold text-blue-600">{skill.percentage}%</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-600">
            <ThumbsUp size={16} className="text-blue-500" />
            <span>{skill.endorsements} endorsements</span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
