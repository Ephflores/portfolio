import React, { useState } from 'react';
import { ExternalLink, Github, Lock, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../data/mock';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const ProjectsModal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400">Project {currentIndex + 1} of {projects.length}</p>
        <div className="flex gap-2">
          <button
            onClick={prevProject}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-cyan-400" />
          </button>
          <button
            onClick={nextProject}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
      </div>

      <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
        <div className={`h-48 bg-gradient-to-br ${currentProject.color} relative`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-4 right-4 flex gap-2">
            {currentProject.github && !currentProject.githubRestricted && (
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} className="text-white" />
              </a>
            )}
            {currentProject.githubRestricted && (
              <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full" title="Private Repository">
                <Lock size={20} className="text-gray-400" />
              </div>
            )}
            {currentProject.demo && !currentProject.demoRestricted && (
              <a
                href={currentProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
              >
                <ExternalLink size={20} className="text-white" />
              </a>
            )}
            {currentProject.demoPending && (
              <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full" title="Demo Coming Soon">
                <Clock size={20} className="text-gray-400" />
              </div>
            )}
          </div>
          <div className="absolute bottom-4 left-6">
            <p className="text-white/80 text-sm font-medium">{currentProject.type}</p>
            <h3 className="text-3xl font-bold text-white mt-1">{currentProject.name}</h3>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-cyan-400 font-medium">{currentProject.date}</span>
          </div>

          <p className="text-gray-300 leading-relaxed">
            {currentProject.description}
          </p>

          <div className="pt-4 border-t border-slate-700">
            <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {currentProject.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  className="text-xs bg-slate-700/50 text-gray-300 border-slate-600 hover:border-cyan-500/50 transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-cyan-400'
                : 'w-2 bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsModal;