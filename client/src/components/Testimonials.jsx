const testimonials = [
  {
    name: 'Anita Kulkarni',
    location: 'Pune, India',
    quote:
      'SolarOne handled the rooftop, approvals and analytics. We now offset 82% of our energy with zero paperwork hassle.',
    savings: '₹86k/year'
  },
  {
    name: 'Vikas Infra',
    location: 'Bengaluru, India',
    quote:
      'Their admin dashboard surfaces device anomalies instantly. Our maintenance SLA dropped from 48h to 6h.',
    savings: '12% uptime boost'
  },
  {
    name: 'Sowmya Farms',
    location: 'Telangana, India',
    quote: 'Integrated solar pump and water heater decreased diesel costs by 63% while tracking groundwater impact.',
    savings: '₹4.1L/year'
  }
];

const Testimonials = () => (
  <section className="mt-16">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold">Customer Wins</h2>
      <p className="text-white/70 text-sm">Numbers verified via onboarded IOT meters</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <article key={t.name} className="card">
          <p className="text-white/80 mb-4">“{t.quote}”</p>
          <div className="flex items-center justify-between text-sm text-white/60">
            <div>
              <p className="font-semibold text-white">{t.name}</p>
              <p>{t.location}</p>
            </div>
            <p className="text-ecoGreen font-semibold">{t.savings}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;

