import React from 'react';
import { CheckCircle2, Clock, Play, TrendingUp } from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const difficultyClasses = {
  Hard: 'hard',
  Medium: 'medium',
  Easy: 'easy',
};

const Interviews = () => {
  const upcoming = dashboardData.interviews.find((item) => item.status === 'upcoming');
  const completed = dashboardData.interviews.filter((item) => item.status === 'completed');

  return (
    <div className="dashboard-page space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Mock Interviews</h1>
          <p className="text-sm text-slate-500">Practice and master your interview skills</p>
        </div>
        <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02]">
          <Play size={16} />
          Start Interview
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Upcoming Interviews</h2>
        {upcoming ? (
          <div className="w-full max-w-2xl rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-base font-semibold text-slate-900">{upcoming.title}</div>
                <div className="text-sm text-slate-500">{upcoming.company}</div>
              </div>
              <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
                {upcoming.difficulty}
              </span>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600">
              <Clock size={16} />
              <span>{upcoming.date}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {upcoming.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-orange-200 bg-white/70 px-3 py-1 text-xs text-orange-700">
                  {tag}
                </span>
              ))}
            </div>
            <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02]">
              <Play size={16} />
              Start Interview
            </button>
          </div>
        ) : (
          <div className="text-sm text-slate-500">No upcoming interviews.</div>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Completed Interviews</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {completed.map((item) => (
            <div key={item.id} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base font-semibold text-slate-900">{item.title}</div>
                  <div className="text-sm text-slate-500">{item.company}</div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-500 px-3 py-1 text-sm font-semibold text-white">
                  <CheckCircle2 size={14} />
                  Completed
                </span>
              </div>
              <div className={`mt-3 inline-flex items-center gap-2 text-sm font-semibold ${item.score > 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                <TrendingUp size={16} />
                <span>Score: {item.score}%</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              <button type="button" className="mt-4 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:scale-[1.02] hover:border-blue-300 hover:text-blue-600">
                View Feedback
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interviews;
