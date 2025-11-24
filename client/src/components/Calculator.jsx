import { useState } from 'react';
import axios from 'axios';

const initialState = {
  bill: 6000,
  state: 'Maharashtra',
  roofSize: 600,
  systemType: 'grid-tied'
};

const Calculator = () => {
  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post('/api/calculator', form);
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.message ?? 'Calculator unavailable');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'bill' || name === 'roofSize' ? Number(value) : value }));
  };

  return (
    <section className="mt-12 grid md:grid-cols-2 gap-8">
      <form className="card space-y-4" onSubmit={handleSubmit}>
        <header>
          <p className="text-sm text-white/60 uppercase tracking-[0.3em] mb-2">Savings calculator</p>
          <h3 className="text-2xl font-semibold">Projection in seconds</h3>
        </header>
        <label className="block text-sm">
          Monthly electricity bill (₹)
          <input
            type="number"
            name="bill"
            value={form.bill}
            onChange={handleChange}
            className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg p-3"
          />
        </label>
        <label className="block text-sm">
          State
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg p-3"
          >
            {['Maharashtra', 'Karnataka', 'Gujarat', 'Telangana', 'Delhi NCR'].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          Roof size (sqft)
          <input
            type="number"
            name="roofSize"
            value={form.roofSize}
            onChange={handleChange}
            className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg p-3"
          />
        </label>
        <label className="block text-sm">
          System type
          <select
            name="systemType"
            value={form.systemType}
            onChange={handleChange}
            className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg p-3"
          >
            <option value="grid-tied">Grid-tied</option>
            <option value="hybrid">Hybrid</option>
            <option value="off-grid">Off-grid</option>
          </select>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-ecoGreen text-white py-3 rounded-lg font-semibold hover:bg-ecoGreen/80 transition disabled:opacity-60"
        >
          {loading ? 'Calculating...' : 'Calculate Savings'}
        </button>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </form>
      <div className="card">
        {result ? (
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-white/60 uppercase tracking-wide">Required solar capacity</dt>
              <dd className="text-3xl font-bold">{result.capacityKw} kW</dd>
            </div>
            <div>
              <dt className="text-white/60 uppercase tracking-wide">Estimated cost</dt>
              <dd className="text-3xl font-bold">₹{result.estimatedCost.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-white/60 uppercase tracking-wide">Payback period</dt>
              <dd className="text-3xl font-bold">{result.paybackYears} years</dd>
            </div>
            <div>
              <dt className="text-white/60 uppercase tracking-wide">Monthly savings</dt>
              <dd className="text-3xl font-bold text-ecoGreen">₹{result.monthlySavings.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-white/60 uppercase tracking-wide">CO₂ saved annually</dt>
              <dd className="text-3xl font-bold">{result.co2SavedTons} tons</dd>
            </div>
          </dl>
        ) : (
          <div className="text-white/60">
            <p className="text-lg font-semibold mb-2">Fill the form to see:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Optimal PV size based on your roof</li>
              <li>State incentives & cost break-up</li>
              <li>Bill reduction timeline</li>
              <li>CO₂ offsets validated via CERC baseline</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calculator;

