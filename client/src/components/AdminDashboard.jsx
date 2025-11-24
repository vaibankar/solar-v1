import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [panels, setPanels] = useState([]);
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({ name: '', capacity: 10, location: '' });
  const [message, setMessage] = useState('');

  const getAuthConfig = () => {
    const token = localStorage.getItem('solarone_token_admin');
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  };

  const fetchData = async () => {
    const config = getAuthConfig();
    const [panelRes, userRes, reqRes] = await Promise.all([
      axios.get('/api/admin/panels', config),
      axios.get('/api/admin/users', config),
      axios.get('/api/admin/requests', config)
    ]);
    setPanels(panelRes.data);
    setUsers(userRes.data);
    setRequests(reqRes.data);
  };

  useEffect(() => {
    fetchData().catch(() => setMessage('Failed to load admin data'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/panels', form, getAuthConfig());
      setForm({ name: '', capacity: 10, location: '' });
      setMessage('Panel added');
      fetchData();
    } catch (err) {
      setMessage(err.response?.data?.message ?? 'Panel creation failed');
    }
  };

  return (
    <section className="space-y-8">
      <form className="card grid md:grid-cols-4 gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm">Panel name</label>
          <input
            name="name"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full mt-1 bg-white/5 border border-white/20 rounded-lg p-3"
            required
          />
        </div>
        <div>
          <label className="text-sm">Capacity (kW)</label>
          <input
            type="number"
            name="capacity"
            value={form.capacity}
            onChange={(e) => setForm((prev) => ({ ...prev, capacity: Number(e.target.value) }))}
            className="w-full mt-1 bg-white/5 border border-white/20 rounded-lg p-3"
            required
          />
        </div>
        <div>
          <label className="text-sm">Location</label>
          <input
            name="location"
            value={form.location}
            onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
            className="w-full mt-1 bg-white/5 border border-white/20 rounded-lg p-3"
            required
          />
        </div>
        <button type="submit" className="bg-solarYellow text-midnight font-semibold rounded-lg mt-6 py-3">
          Add panel
        </button>
        {message && <p className="text-sm col-span-full text-ecoGreen">{message}</p>}
      </form>

      <section className="grid md:grid-cols-3 gap-6">
        <article className="card">
          <h3 className="font-semibold mb-2">Panels ({panels.length})</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {panels.map((panel) => (
              <li key={panel.id}>
                <span className="text-white">{panel.name}</span> · {panel.capacity} kW · {panel.location}
              </li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h3 className="font-semibold mb-2">Users ({users.length})</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {users.map((user) => (
              <li key={user.id}>
                {user.name} — <span className="uppercase">{user.role}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h3 className="font-semibold mb-2">Service requests ({requests.length})</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {requests.map((req) => (
              <li key={req.id}>
                {req.customer} — {req.issue}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
};

export default AdminDashboard;

