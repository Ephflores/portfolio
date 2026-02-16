import React, { useEffect, useState } from 'react';
import { ChevronDown, MapPin, Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = [
    'Embedded Systems Engineer',
    'Cloud Developer',
    'Full-Stack Engineer',
    'Backend Specialist'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, currentTitleIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-block">
            <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
              <p className="text-cyan-400 text-sm font-medium flex items-center justify-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                {personalInfo.location}
              </p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-slate-800/50 text-white rounded-full font-semibold border border-cyan-500/30 hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer hover:text-cyan-300 transition-colors duration-300"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;