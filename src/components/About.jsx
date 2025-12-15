import { about } from '../data/resumeData';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">About</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          {about.story}
        </p>
      </div>
    </section>
  );
};

export default About;

