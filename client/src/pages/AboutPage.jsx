const milestones = [
  { year: '2018', detail: 'Founded with 25 kW pilot plant and open-source monitoring stack.' },
  { year: '2020', detail: 'Crossed 10 MW rooftop deployments, launched SolarOne dashboard.' },
  { year: '2023', detail: 'Expanded to EV charging + smart pumps, ISO 27001 security audit.' },
  { year: '2025', detail: '18 states, 120 MW portfolio, predictive maintenance AI.' }
];

const AboutPage = () => (
  <div className="space-y-10">
    <header>
      <h1 className="text-4xl font-bold mb-4">About SolarOne</h1>
      <p className="text-white/70 max-w-3xl">
        We blend hardware, software and operations to squeeze maximum value out of every photon. Every project is backed
        by MNRE compliance, NABL metering and bankable analytics. Sustainability for us is measurable, reported and
        verifiable.
      </p>
    </header>
    <section className="grid md:grid-cols-3 gap-6">
      {milestones.map((milestone) => (
        <article key={milestone.year} className="card">
          <p className="text-solarYellow text-sm uppercase">{milestone.year}</p>
          <p className="text-white font-semibold">{milestone.detail}</p>
        </article>
      ))}
    </section>
  </div>
);

export default AboutPage;

