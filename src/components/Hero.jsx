import { personalInfo } from '../data/resumeData';
import resumePdf from '../assets/EphraimFloresResume.pdf';
import useInView from '../hooks/useInView';

const Hero = () => {
  const { ref, isVisible } = useInView();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'EphraimFloresResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      ref={ref}
      className={`scroll-mt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-black px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-4 font-light">
          {personalInfo.title}
        </h2>
        <div className="h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.summary}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View Projects
          </button>
          <button
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Download Resume
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

