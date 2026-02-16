import React from 'react';
import { Code2, Cloud, Cpu } from 'lucide-react';
import { about } from '../data/mock';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Embedded Systems',
      description: 'Production-grade automotive software at Denso Techno'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & Backend',
      description: 'AWS, serverless architecture, and scalable APIs'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Modern web apps with React, Node.js, and Python'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  {about.story}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;