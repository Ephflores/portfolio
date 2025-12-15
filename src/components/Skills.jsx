import { skills } from '../data/resumeData';

const Skills = () => {
  const skillGroups = [
    { title: 'Languages & Frameworks', items: [...skills.languages, ...skills.frameworks] },
    { title: 'Cloud & Databases', items: skills.cloud },
    { title: 'Tools & DevOps', items: skills.tools },
    { title: 'Embedded & Systems', items: skills.embedded }
  ];

  return (
    <section id="skills" className="scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm border border-gray-700"
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

