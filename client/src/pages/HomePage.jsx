import Hero from '../components/Hero.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Calculator from '../components/Calculator.jsx';
import ServiceCards from '../components/ServiceCards.jsx';

const pillars = [
  { title: 'Mission', copy: 'Democratise clean energy with transparent pricing, proactive monitoring and circular asset reuse.' },
  { title: 'Certifications', copy: 'MNRE Channel Partner · ISO 9001 · CEIG · Google Nest Pro · TUV audited supply chain.' },
  { title: 'Team', copy: '45 engineers, 12 data scientists and on-ground partners across 38 cities with 24/7 NOC.' }
];

const HomePage = () => (
  <div className="space-y-12">
    <Hero />
    <FeatureGrid />
    <section className="grid md:grid-cols-3 gap-6">
      {pillars.map((pillar) => (
        <article key={pillar.title} className="card">
          <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
          <p className="text-white/70 text-sm">{pillar.copy}</p>
        </article>
      ))}
    </section>
    <ServiceCards />
    <Testimonials />
    <Calculator />
  </div>
);

export default HomePage;

