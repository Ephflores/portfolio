import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { technicalExperience, otherExperience } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Experience = () => {
  const [showOtherExperience, setShowOtherExperience] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const ExperienceCard = ({ experience, type }) => {
    const isExpanded = expandedCards[`${type}-${experience.id}`];

    return (
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                {experience.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-2">{experience.company}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {experience.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {experience.period}
                </span>
              </div>

              <button
                onClick={() => toggleCard(`${type}-${experience.id}`)}
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 text-sm font-medium mb-3"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp size={16} />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    Show Details
                  </>
                )}
              </button>

              {isExpanded && (
                <ul className="space-y-2 mt-4 border-l-2 border-cyan-500/30 pl-4">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-400 leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
            Technical Experience
          </h3>
          <div className="space-y-6">
            {technicalExperience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} type="tech" />
            ))}
          </div>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={() => setShowOtherExperience(!showOtherExperience)}
            className="px-8 py-3 bg-slate-800/50 text-cyan-400 rounded-full font-semibold border border-cyan-500/30 hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            {showOtherExperience ? 'Hide' : 'Show'} Other Experience
            {showOtherExperience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {showOtherExperience && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
              Other Professional Experience
            </h3>
            <div className="space-y-6">
              {otherExperience.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} type="other" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;