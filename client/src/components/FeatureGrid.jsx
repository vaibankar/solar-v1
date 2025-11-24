const features = [
  { title: 'Real-time dashboards', copy: 'Live generation, irradiance and device health telemetry.', icon: '📊' },
  { title: 'Certified engineers', copy: 'MNRE, ISO and CEIG approved partners across 18 states.', icon: '🔧' },
  { title: 'Smart financing', copy: '0% EMI, leasing or RESCO models with automated billing.', icon: '💳' },
  { title: 'Weather awareness', copy: 'Predictive adjustments using OpenWeather + in-house sensors.', icon: '☁️' }
];

const FeatureGrid = () => (
  <section className="mt-12 grid md:grid-cols-4 gap-4">
    {features.map((feature) => (
      <article key={feature.title} className="card text-center">
        <div className="text-3xl mb-3">{feature.icon}</div>
        <h3 className="font-semibold mb-2">{feature.title}</h3>
        <p className="text-white/70 text-sm">{feature.copy}</p>
      </article>
    ))}
  </section>
);

export default FeatureGrid;

