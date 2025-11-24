const services = [
  {
    title: 'Solar Rooftop',
    desc: 'Turn-key EPC for residential, commercial & industrial with net-metering approvals.',
    items: ['3-500 kW', 'Fire-rated mounting', 'Performance warranty']
  },
  {
    title: 'Solar Water Heater',
    desc: 'ETC + FPC systems sized for homes, hospitals and hospitality properties.',
    items: ['Smart circulation', 'Legionella safe', 'Heat exchanger ready']
  },
  {
    title: 'Solar Pump',
    desc: 'MNRE compliant pump sets and remote telemetry for agri and waterworks.',
    items: ['2-50 HP', 'Flow & pressure logging', 'VFD based']
  },
  {
    title: 'EV Charger Setup',
    desc: 'OCPP chargers + solar canopies + load balancing for fleets and workplaces.',
    items: ['AC & DC fast', 'RFID billing', 'Smart scheduling']
  }
];

const ServiceCards = () => (
  <section className="grid md:grid-cols-2 gap-6">
    {services.map((service) => (
      <article key={service.title} className="card">
        <h3 className="text-2xl font-semibold">{service.title}</h3>
        <p className="text-white/70 text-sm mb-4">{service.desc}</p>
        <ul className="text-sm space-y-2 text-white/80">
          {service.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    ))}
  </section>
);

export default ServiceCards;

