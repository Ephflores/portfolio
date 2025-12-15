import { projects } from '../data/resumeData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <span>{project.type}</span>
                  <span>•</span>
                  <span>{project.date}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

