import React, { useState } from 'react';
import { skills } from '../data/mock';
import { Badge } from './ui/badge';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { key: 'languages', label: 'Languages', color: 'from-cyan-500 to-blue-500' },
    { key: 'frameworks', label: 'Frameworks', color: 'from-blue-500 to-purple-500' },
    { key: 'cloud', label: 'Cloud & DevOps', color: 'from-teal-500 to-emerald-500' },
    { key: 'tools', label: 'Tools & IDEs', color: 'from-orange-500 to-red-500' },
    { key: 'embedded', label: 'Embedded Systems', color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800/50 text-gray-400 border border-slate-700 hover:border-cyan-500/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 min-h-[300px]">
          <div className="flex flex-wrap gap-3 justify-center">
            {skills[activeCategory].map((skill, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Badge
                  className="px-4 py-2 text-base bg-slate-800 text-gray-300 border-slate-700 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/50 hover:text-white transition-all duration-300 cursor-default animate-fadeIn"
                >
                  {skill}
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;