import MonitoringDashboard from '../components/MonitoringDashboard.jsx';

const DashboardPage = () => (
  <div className="space-y-6">
    <header>
      <h1 className="text-4xl font-bold mb-2">Live Monitoring</h1>
      <p className="text-white/70">
        Track assets in real time, export CSV/PDF and receive instant alerts for low generation or offline devices.
      </p>
    </header>
    <MonitoringDashboard />
  </div>
);

export default DashboardPage;

