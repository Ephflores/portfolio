import { Heart, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/data/resumeData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Engineer passionate about building reliable, scalable software across embedded systems, cloud, and full-stack domains.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-slate-900 rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} {personalInfo.name}. Built with
            <Heart size={16} className="text-cyan-400 inline animate-pulse" />
            and React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
