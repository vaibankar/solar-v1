import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <p className="uppercase text-ecoGreen tracking-[0.3em] text-sm mb-4">Clean Energy Future</p>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Harvest the sun. <span className="text-solarYellow">Power everything.</span>
      </h1>
      <p className="text-white/70 mb-6">
        SolarOne integrates rooftop PV, smart storage and live monitoring to cut bills up to 70%, backed by certified
        installers and 24/7 analytics.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="px-6 py-3 rounded-full bg-solarYellow text-midnight font-semibold shadow-lg shadow-solarYellow/30"
        >
          Get a Proposal
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10"
        >
          See Live Dashboard
        </Link>
      </div>
    </div>
    <div className="card">
      <h3 className="text-xl font-semibold mb-4 text-solarYellow">Savings Snapshot</h3>
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-white/60">Avg Monthly Bill</p>
          <p className="text-2xl font-bold">₹7,800</p>
        </div>
        <div>
          <p className="text-white/60">Post Solar Bill</p>
          <p className="text-2xl font-bold text-ecoGreen">₹1,950</p>
        </div>
        <div>
          <p className="text-white/60">CO₂ Saved / year</p>
          <p className="text-2xl font-bold">3.2 t</p>
        </div>
        <div>
          <p className="text-white/60">Payback</p>
          <p className="text-2xl font-bold">4.1 yrs</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

