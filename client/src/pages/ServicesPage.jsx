import ServiceCards from '../components/ServiceCards.jsx';

const ServicesPage = () => (
  <div className="space-y-8">
    <header>
      <h1 className="text-4xl font-bold mb-3">Services</h1>
      <p className="text-white/70 max-w-3xl">
        From design to asset management we cover the full lifecycle. Every service tier includes remote monitoring,
        proactive alerts and quarterly reporting.
      </p>
    </header>
    <ServiceCards />
  </div>
);

export default ServicesPage;

