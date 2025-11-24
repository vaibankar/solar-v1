import AuthPanel from '../components/AuthPanel.jsx';
import AdminDashboard from '../components/AdminDashboard.jsx';

const AdminPage = () => (
  <div className="space-y-8">
    <header>
      <h1 className="text-4xl font-bold mb-2">Admin Control Room</h1>
      <p className="text-white/70 max-w-3xl">
        Role-based dashboards for operators, service partners and site owners. Add new panels, upload logs, manage
        service tickets and view analytics.
      </p>
    </header>
    <div className="grid md:grid-cols-2 gap-6">
      <AuthPanel role="user" />
      <AuthPanel role="admin" />
    </div>
    <AdminDashboard />
  </div>
);

export default AdminPage;

