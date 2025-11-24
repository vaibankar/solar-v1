const projects = [
  {
    id: 1,
    name: 'Phoenix Corporate Park',
    size: '820 kW',
    location: 'Hyderabad',
    impact: '62% grid offset',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Suryagram Township',
    size: '410 kW',
    location: 'Ahmedabad',
    impact: 'Net-zero clubhouse',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'GreenFields Agro',
    size: '250 kW + solar pumps',
    location: 'Mysuru',
    impact: '63% diesel reduction',
    image: 'https://images.unsplash.com/photo-1509391350648-4c44d4e07d5a?auto=format&fit=crop&w=800&q=80'
  }
];

const ProjectGallery = () => (
  <section className="grid md:grid-cols-3 gap-6">
    {projects.map((project) => (
      <article key={project.id} className="card p-0 overflow-hidden">
        <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-white/60 text-sm">{project.location}</p>
          <p className="text-solarYellow font-semibold">{project.size}</p>
          <p className="text-white/70 text-sm">{project.impact}</p>
        </div>
      </article>
    ))}
  </section>
);

export default ProjectGallery;

