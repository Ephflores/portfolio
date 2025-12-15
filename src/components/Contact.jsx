import { personalInfo } from '../data/resumeData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Contact</h2>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 mb-2">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-400 hover:text-blue-300 text-lg transition-colors"
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
                className="text-blue-400 hover:text-blue-300 text-lg transition-colors"
              >
                {personalInfo.linkedin}
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Phone</p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-gray-300 text-lg"
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

