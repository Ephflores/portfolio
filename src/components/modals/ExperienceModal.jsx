import { useState } from 'react'
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { technicalExperience, otherExperience } from '@/data/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import HighlightedText from '@/components/HighlightedText'

const ExperienceCard = ({ exp, type, isExpanded, onToggle }) => (
  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg text-cyan-400 flex-shrink-0">
          <Briefcase className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
          <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {exp.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {exp.period}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onToggle(`${type}-${exp.id}`)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 text-sm font-medium mb-3"
          >
            {isExpanded ? <><ChevronUp size={16} />Hide Details</> : <><ChevronDown size={16} />Show Details</>}
          </button>
          {isExpanded && (
            <ul className="space-y-2 mt-4 border-l-2 border-cyan-500/30 pl-4">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="text-gray-300 leading-relaxed text-sm">
                  <HighlightedText text={resp} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)

const ExperienceModal = () => {
  const [showOther, setShowOther] = useState(false)
  const [expandedCards, setExpandedCards] = useState({})
  const toggleCard = (id) => setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" aria-hidden />
          Technical Experience
        </h3>
        <div className="space-y-4">
          {technicalExperience.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} type="tech" isExpanded={expandedCards[`tech-${exp.id}`]} onToggle={toggleCard} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={() => setShowOther(!showOther)}
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          {showOther ? 'Hide' : 'Show'} Other Experience
          {showOther ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      {showOther && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" aria-hidden />
            Other Professional Experience
          </h3>
          <div className="space-y-4">
            {otherExperience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} type="other" isExpanded={expandedCards[`other-${exp.id}`]} onToggle={toggleCard} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceModal
