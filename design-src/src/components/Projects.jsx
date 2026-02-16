import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ExternalLink, Github, Lock, Clock } from 'lucide-react';
import { projects } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  const swiperRef = useRef(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg">Swipe or drag to explore my work</p>
        </div>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="projects-swiper pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} style={{ width: '600px', maxWidth: '90vw' }}>
                <Card className="bg-slate-900/70 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 h-full group">
                  <CardContent className="p-0">
                    <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {project.github && !project.githubRestricted && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                          >
                            <Github size={20} className="text-white" />
                          </a>
                        )}
                        {project.githubRestricted && (
                          <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full" title="Private Repository">
                            <Lock size={20} className="text-gray-400" />
                          </div>
                        )}
                        {project.demo && !project.demoRestricted && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                          >
                            <ExternalLink size={20} className="text-white" />
                          </a>
                        )}
                        {project.demoPending && (
                          <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full" title="Demo Coming Soon">
                            <Clock size={20} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-6">
                        <p className="text-white/80 text-sm font-medium">{project.type}</p>
                        <h3 className="text-2xl font-bold text-white mt-1">{project.name}</h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-400 font-medium">{project.date}</span>
                      </div>

                      <p className="text-gray-400 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>

                      <div className="pt-4 border-t border-slate-800">
                        <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs bg-slate-800/50 text-gray-300 border-slate-700 hover:border-cyan-500/50 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;