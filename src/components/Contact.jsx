import { personalInfo } from '../data/resumeData';
import useInView from '../hooks/useInView';

const Contact = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-black/95 backdrop-blur-sm transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        <div className="h-1 w-24 mx-auto mb-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 mb-2">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="relative inline-block text-blue-400 hover:text-blue-300 text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {personalInfo.email}
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">LinkedIn</p>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-blue-400 hover:text-blue-300 text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {personalInfo.linkedin}
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Phone</p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-gray-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
              >
                {personalInfo.phone}
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Location</p>
              <p className="text-gray-300 text-lg">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

