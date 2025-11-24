import { useState } from 'react';
import axios from 'axios';

const AuthPanel = ({ role }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', { ...form, role });
      localStorage.setItem(`solarone_token_${role}`, data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      setStatus(`Token issued: ${data.token.slice(0, 16)}...`);
    } catch (err) {
      setStatus(err.response?.data?.message ?? 'Login failed');
    }
  };

  return (
    <form className="card space-y-3" onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold">{role === 'admin' ? 'Admin Login' : 'User Login'}</h3>
      <input
        name="email"
        type="email"
        placeholder="you@email.com"
        value={form.email}
        onChange={handleChange}
        className="w-full bg-white/5 border border-white/20 rounded-lg p-3"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full bg-white/5 border border-white/20 rounded-lg p-3"
        required
      />
      <button type="submit" className="w-full bg-solarYellow text-midnight py-2 rounded-lg font-semibold">
        Login
      </button>
      {status && <p className="text-sm text-white/70">{status}</p>}
    </form>
  );
};

export default AuthPanel;

