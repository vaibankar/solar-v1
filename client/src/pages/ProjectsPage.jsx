import ProjectGallery from '../components/ProjectGallery.jsx';

const ProjectsPage = () => (
  <div className="space-y-8">
    <header>
      <h1 className="text-4xl font-bold mb-3">Featured Projects</h1>
      <p className="text-white/70 max-w-3xl">
        Explore deployments across commercial buildings, gated communities, farms and industrial estates. Each case study
        pairs financial returns with the environmental data tracked on our monitoring stack.
      </p>
    </header>
    <ProjectGallery />
  </div>
);

export default ProjectsPage;

