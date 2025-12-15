import { personalInfo } from '../data/resumeData';
import resumePdf from '../assets/EphraimFloresResume.pdf';

const Hero = () => {
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
    <section id="hero" className="scroll-mt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-light">
          {personalInfo.title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.summary}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View Projects
          </button>
          <button
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-medium rounded-lg transition-colors"
          >
            Download Resume
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-white font-medium rounded-lg transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

