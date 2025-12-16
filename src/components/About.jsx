import { about } from '../data/resumeData';
import useInView from '../hooks/useInView';

const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/95 backdrop-blur-sm transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">About</h2>
        <div className="h-1 w-24 mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
        <p className="text-lg text-gray-300 leading-relaxed">
          {about.story}
        </p>
      </div>
    </section>
  );
};

export default About;

