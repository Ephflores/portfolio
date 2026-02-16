import { MapPin, Mail, Phone, Linkedin, Code2, Cloud, Cpu } from 'lucide-react'
import { personalInfo, about } from '@/data/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import HighlightedText from '@/components/HighlightedText'

const AboutModal = () => {
  const highlights = [
    { icon: <Cpu className="w-8 h-8" />, title: 'Embedded Systems', description: 'Production-grade automotive software at Denso Techno' },
    { icon: <Cloud className="w-8 h-8" />, title: 'Cloud & Backend', description: 'AWS, serverless architecture, and scalable APIs' },
    { icon: <Code2 className="w-8 h-8" />, title: 'Full-Stack Development', description: 'Modern web apps with React, Node.js, and Python' },
  ]

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-cyan-400 transition-colors">{personalInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Linkedin className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn Profile</a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              <HighlightedText text={personalInfo.summary} />
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-gray-300 leading-relaxed">
            <HighlightedText text={about.story} />
          </p>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg text-cyan-400 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AboutModal
