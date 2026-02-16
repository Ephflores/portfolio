import { Code2, Briefcase, GraduationCap, Mail, Gamepad2, Lightbulb, Sparkles, Download } from 'lucide-react'
import { personalInfo } from '@/data/resumeData'
import resumeUrl from '../assets/EphraimFloresResume.pdf';

// const resumeUrl = '/portfolio/EphraimFloresResume.pdf'

const BentoGrid = ({ openModal }) => {
  const tiles = [
    {
      id: 'hero',
      title: personalInfo.name,
      subtitle: 'Software Engineer',
      description: 'Embedded Systems • Cloud • Full-Stack',
      size: 'large',
      gradient: 'from-cyan-500 via-blue-500 to-purple-600',
      icon: <Sparkles className="w-12 h-12" />,
      action: null,
    },
    {
      id: 'contact',
      title: 'Get In Touch',
      description: "Let's connect and collaborate",
      size: 'small',
      gradient: 'from-green-500 to-teal-600',
      icon: <Mail className="w-6 h-6" />,
      action: (e) => openModal('contact', { gradient: 'from-green-500 to-teal-600', rect: e.currentTarget.getBoundingClientRect() }),
    },
    {
      id: 'about',
      title: 'About Me',
      description: 'My journey from embedded systems to full-stack development',
      size: 'medium',
      gradient: 'from-indigo-500 to-blue-600',
      icon: <Lightbulb className="w-8 h-8" />,
      action: (e) => openModal('about', { gradient: 'from-indigo-500 to-blue-600', rect: e.currentTarget.getBoundingClientRect() }),
    },
    {
      id: 'projects',
      title: 'Experience',
      description: 'Technical & professional journey',
      size: 'large',
      gradient: 'from-violet-500 to-purple-600',
      icon: <Briefcase className="w-8 h-8" />,
      action: (e) => openModal('experience', { gradient: 'from-violet-500 to-purple-600', rect: e.currentTarget.getBoundingClientRect() }),
    },
    {
      id: 'skills',
      title: 'Tech Stack',
      description: '40+ technologies across 5 domains',
      size: 'small',
      gradient: 'from-pink-500 to-rose-600',
      icon: <Code2 className="w-6 h-6" />,
      action: (e) => openModal('skills', { gradient: 'from-pink-500 to-rose-600', rect: e.currentTarget.getBoundingClientRect() }),
    },
    {
      id: 'experience',
      title: 'Projects',
      description: '8 innovative projects across mobile, web & cloud',
      size: 'medium',
      gradient: 'from-orange-500 to-red-600',
      icon: <Code2 className="w-8 h-8" />,
      action: (e) => openModal('projects', { gradient: 'from-orange-500 to-red-600', rect: e.currentTarget.getBoundingClientRect() }),
    },
    {
      id: 'games',
      title: 'Games',
      description: 'Unreal Engine 5 development',
      size: 'small',
      gradient: 'from-teal-500 to-emerald-600',
      icon: <Gamepad2 className="w-6 h-6" />,
      action: (e) => openModal('games', { gradient: 'from-teal-500 to-emerald-600', rect: e.currentTarget.getBoundingClientRect() }),
    },
    {
      id: 'education',
      title: 'Education',
      description: 'BCIT • University • Certifications',
      size: 'small',
      gradient: 'from-amber-500 to-orange-600',
      icon: <GraduationCap className="w-6 h-6" />,
      action: (e) => openModal('education', { gradient: 'from-amber-500 to-orange-600', rect: e.currentTarget.getBoundingClientRect() }),
    },
  ]

  const getSizeClass = (size, id) => {
    switch (size) {
      case 'large':
        if (id === 'projects') return 'col-span-12 md:col-span-6 lg:col-span-4 row-span-2 min-h-[280px] sm:min-h-0'
        return 'col-span-12 md:col-span-6 lg:col-span-6 row-span-2 min-h-[280px] sm:min-h-0'
      case 'medium':
        return 'col-span-12 md:col-span-6 lg:col-span-4 row-span-1 min-h-[180px] sm:min-h-0'
      case 'small':
        return 'col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 row-span-1 min-h-[160px] sm:min-h-0'
      default:
        return 'col-span-12 md:col-span-4'
    }
  }

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-[200px]">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              onClick={tile.action}
              onKeyDown={(e) => tile.action && (e.key === 'Enter' || e.key === ' ') && tile.action(e)}
              role={tile.action ? 'button' : null}
              tabIndex={tile.action ? 0 : null}
              className={`
                ${getSizeClass(tile.size, tile.id)}
                bg-gradient-to-br ${tile.gradient}
                rounded-2xl p-6 md:p-8
                flex flex-col justify-between
                transition-all duration-500 ease-out
                ${tile.action ? 'cursor-pointer hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20' : ''}
                group relative overflow-hidden
              `}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" aria-hidden />
              <div className="relative z-10">
                <div className="text-white/90 mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {tile.icon}
                </div>
                <h2 className={`font-bold text-white mb-2 ${tile.size === 'large' ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
                  {tile.title}
                </h2>
                {tile.subtitle && (
                  <p className="text-white/90 text-lg md:text-xl font-medium mb-2">{tile.subtitle}</p>
                )}
              </div>
              <div className="relative z-10">
                {tile.id === 'hero' && (
                  <a
                    href={resumeUrl}
                    download="EphraimFloresResume.pdf"
                    className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl text-white font-bold mb-3 bg-gradient-to-br ${tile.gradient} shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105`}
                    aria-label="Download Resume"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>
                )}
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{tile.description}</p>
              </div>
              {tile.action && (
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden>
                  <span className="text-white text-xl">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BentoGrid
