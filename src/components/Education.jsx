import { education } from '../data/resumeData';
import useInView from '../hooks/useInView';

const Education = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="education"
      ref={ref}
      className={`scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/95 backdrop-blur-sm transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
        <div className="h-1 w-24 mb-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
              <p className="text-lg text-blue-400 mb-1">{edu.institution}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span>{edu.period}</span>
                {edu.details && (
                  <>
                    <span>•</span>
                    <span>{edu.details}</span>
                  </>
                )}
              </div>
              {edu.courses && (
                <div className="mt-4 space-y-4">
                  {edu.courses.map((course, index) => (
                    <div key={index}>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">{course.title}</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-2">
                        {course.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

