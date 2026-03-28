import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import { dashboardData } from '../../../data/dashboardData';

const weeklyData = [
  { day: 'Mon', hours: 3 },
  { day: 'Tue', hours: 4 },
  { day: 'Wed', hours: 2 },
  { day: 'Thu', hours: 2 },
  { day: 'Fri', hours: 5 },
  { day: 'Sat', hours: 6 },
  { day: 'Sun', hours: 3 },
];

const skillGrowthData = [
  { month: 'Jan', React: 65, Node: 55, Python: 60 },
  { month: 'Feb', React: 78, Node: 72, Python: 68 },
  { month: 'Mar', React: 88, Node: 80, Python: 78 },
];

const pipelineData = [
  { stage: 'Applied', value: 12 },
  { stage: 'Under Review', value: 5 },
  { stage: 'Interview', value: 3 },
  { stage: 'Offer', value: 1 },
];

const interviewData = [
  { label: 'Technical', value: 18 },
  { label: 'Behavioral', value: 14 },
  { label: 'System Design', value: 8 },
  { label: 'HR Round', value: 12 },
];

const WeeklyTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#1e293b',
        color: '#fff',
        padding: '6px 10px',
        borderRadius: '8px',
        fontSize: '12px',
        lineHeight: 1.4,
      }}>
        <div style={{ fontWeight: 600 }}>{label}</div>
        <div>hours : {payload[0].value}</div>
      </div>
    );
  }
  return null;
};

const AnalyticsCharts = () => (
  <div className="analytics-grid">
    <div className="analytics-card">
      <h3>{dashboardData.ui.charts.weeklyActivity}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip content={<WeeklyTooltip />} />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#2563eb"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="analytics-card">
      <h3>{dashboardData.ui.charts.skillGrowth}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={skillGrowthData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="React"
            stroke="#2563eb"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="Node"
            stroke="#f59e0b"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#f59e0b', stroke: '#fff', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="Python"
            stroke="#22c55e"
            strokeWidth={2.5}
            dot={{ r: 4, fill: '#22c55e', stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="analytics-card">
      <h3>{dashboardData.ui.charts.pipeline}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={pipelineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="stage" stroke="#94a3b8" fontSize={12} />
          <YAxis stroke="#94a3b8" fontSize={12} />
          <Tooltip />
          <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="analytics-card">
      <h3>{dashboardData.ui.charts.interviewSuccess}</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={interviewData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis type="number" stroke="#94a3b8" fontSize={12} domain={[0, 20]} />
          <YAxis type="category" dataKey="label" stroke="#94a3b8" fontSize={12} width={100} />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" radius={[0, 6, 6, 0]} barSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AnalyticsCharts;
