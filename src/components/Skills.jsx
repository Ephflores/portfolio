import { skills } from '../data/resumeData';
import useInView from '../hooks/useInView';

const Skills = () => {
  const { ref, isVisible } = useInView();
  const skillGroups = [
    { title: 'Languages & Frameworks', items: [...skills.languages, ...skills.frameworks] },
    { title: 'Cloud & Databases', items: skills.cloud },
    { title: 'Tools & DevOps', items: skills.tools },
    { title: 'Embedded & Systems', items: skills.embedded }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-black/95 backdrop-blur-sm transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
        <div className="h-1 w-24 mb-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-xl p-6 border border-gray-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:border-blue-500/60"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm border border-gray-700 transition-all duration-200 hover:border-blue-500 hover:text-white hover:bg-gray-800/80 hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

