import { useState, useEffect } from 'react';
import { projects } from '../data/resumeData';
import useInView from '../hooks/useInView';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setAnimateIn(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      setAnimateIn(false);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url) => {
    if (!url || url === '#') return null;
    
    // Handle youtu.be format: https://youtu.be/VIDEO_ID
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtube.com format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtube.com/embed format (already embed)
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    return null;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  if (!embedUrl) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-opacity duration-300 ${
        animateIn ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 ${
          animateIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title="Project Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { ref, isVisible } = useInView();

  const handleDemoClick = (e, demoUrl) => {
    e.preventDefault();
    if (demoUrl && demoUrl !== '#') {
      setSelectedVideo(demoUrl);
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={`scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/90 backdrop-blur-sm transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="h-1 w-24 mb-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/80 rounded-xl p-6 border border-gray-700/80 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:border-blue-500/60"
              >
                <div className="h-0.5 w-16 mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
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
                  {project.githubRestricted ? (
                    <button
                      disabled
                      className="px-4 py-2 bg-gray-700 text-gray-500 rounded text-sm cursor-not-allowed"
                      title="NDA Protected - Source code not available"
                    >
                      GitHub
                    </button>
                  ) : project.github && project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors"
                    >
                      GitHub
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-gray-700 text-gray-500 rounded text-sm cursor-not-allowed"
                    >
                      GitHub
                    </button>
                  )}
                  {project.demoRestricted ? (
                    <button
                      disabled
                      className="px-4 py-2 bg-blue-600 text-blue-300 rounded text-sm cursor-not-allowed"
                      title={project.demoPending ? "Demo pending approval" : "NDA Protected - Demo not available"}
                    >
                      {project.demoPending ? "Demo (Pending)" : "Demo"}
                    </button>
                  ) : project.demo && project.demo !== '#' ? (
                    <button
                      onClick={(e) => handleDemoClick(e, project.demo)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                    >
                      Demo
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-4 py-2 bg-blue-600 text-blue-300 rounded text-sm cursor-not-allowed"
                    >
                      Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={handleCloseModal}
        videoUrl={selectedVideo}
      />
    </>
  );
};

export default Projects;

