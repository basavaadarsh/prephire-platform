import React, { useEffect, useMemo, useState } from "react";
import { fetchStats } from "../../api/statsApi";
import StatCard from "./StatCard";
import SkeletonCard from "./SkeletonCard";
import "./stats.css";

const StatsSection = React.memo(() => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const skeletons = useMemo(() => Array.from({ length: 4 }), []);

  const load = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await fetchStats();
      setStats(data);
    } catch (e) {
      setError("Failed to load statistics.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="stats-section">
      {error && (
        <div className="stats-error">
          <span>{error}</span>
          <button onClick={load} type="button">Retry</button>
        </div>
      )}

      <div className="stats-grid">
        {loading
          ? skeletons.map((_, i) => <SkeletonCard key={i} />)
          : stats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                suffix={stat.suffix}
                icon={stat.icon}
              />
            ))}
      </div>
    </section>
  );
});

export default StatsSection;
