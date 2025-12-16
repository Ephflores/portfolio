import { technicalExperience, otherExperience } from '../data/resumeData';
import useInView from '../hooks/useInView';

const ExperienceCard = ({ exp }) => (
  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:border-blue-500/60">
    <div className="mb-4">
      <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
      <p className="text-lg text-blue-400 mb-1">{exp.company}</p>
      <p className="text-sm text-gray-400">{exp.location} • {exp.period}</p>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-300">
      {exp.responsibilities.map((responsibility, index) => (
        <li key={index} className="leading-relaxed">{responsibility}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className={`scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-black/95 backdrop-blur-sm transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
        <div className="h-1 w-24 mb-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Technical Work Experience</h3>
          <div className="space-y-8">
            {technicalExperience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Other Work Experience</h3>
          <div className="space-y-8">
            {otherExperience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

