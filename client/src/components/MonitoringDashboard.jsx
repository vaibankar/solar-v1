import { useEffect, useState } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MonitoringDashboard = () => {
  const [live, setLive] = useState(null);
  const [daily, setDaily] = useState([]);
  const [monthly, setMonthly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [liveRes, dailyRes, monthlyRes] = await Promise.all([
          axios.get('/api/monitoring/live'),
          axios.get('/api/monitoring/daily'),
          axios.get('/api/monitoring/monthly')
        ]);
        setLive(liveRes.data);
        setDaily(dailyRes.data);
        setMonthly(monthlyRes.data);
      } catch (err) {
        setError(err.response?.data?.message ?? 'Monitoring offline');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="card">Loading monitoring data…</div>;
  }

  if (error) {
    return <div className="card text-red-400">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <section className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Current Power', value: `${live.currentPower} W` },
          { label: 'Today', value: `${live.dailyGeneration} kWh` },
          { label: 'This month', value: `${live.monthlyGeneration} kWh` },
          { label: 'This year', value: `${live.yearlyGeneration} MWh` }
        ].map((stat) => (
          <article key={stat.label} className="card">
            <p className="text-white/60 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="card h-64">
        <p className="text-white/60 text-sm mb-2">Daily generation & weather correlation</p>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={daily}>
            <defs>
              <linearGradient id="solar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFB703" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFB703" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#fff" />
            <Tooltip contentStyle={{ background: '#0B1F32', border: '1px solid #264653' }} />
            <Area type="monotone" dataKey="kwh" stroke="#FFB703" fill="url(#solar)" />
          </AreaChart>
        </ResponsiveContainer>
      </section>

      <section className="card h-64">
        <p className="text-white/60 text-sm mb-2">Monthly generation</p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthly}>
            <XAxis dataKey="month" stroke="#fff" />
            <Tooltip contentStyle={{ background: '#0B1F32', border: '1px solid #264653' }} />
            <Bar dataKey="kwh" fill="#2A9D8F" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MonitoringDashboard;

