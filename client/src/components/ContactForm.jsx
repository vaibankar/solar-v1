import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', form);
      setStatus('Thanks! Our engineers will reach you within 24 hours.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus(err.response?.data?.message ?? 'Unable to submit request.');
    }
  };

  return (
    <form className="card space-y-4" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-semibold">Tell us about your site</h3>
      {['name', 'email', 'phone'].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          placeholder={field === 'phone' ? '+91-XXXXXXXXXX' : field === 'email' ? 'you@email.com' : 'Full name'}
          onChange={handleChange}
          required
          className="w-full bg-white/5 border border-white/20 rounded-lg p-3"
        />
      ))}
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="4"
        placeholder="Roof type, bill amount, timeline..."
        className="w-full bg-white/5 border border-white/20 rounded-lg p-3"
        required
      />
      <button type="submit" className="bg-ecoGreen text-white py-3 rounded-lg font-semibold">
        Request callback
      </button>
      {status && <p className="text-sm text-white/70">{status}</p>}
    </form>
  );
};

export default ContactForm;

