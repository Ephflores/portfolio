import { useState } from 'react'
import { skills } from '@/data/resumeData'
import { Badge } from '@/components/ui/badge'

const SkillsModal = () => {
  const [activeCategory, setActiveCategory] = useState('languages')

  const categories = [
    { key: 'languages', label: 'Languages', color: 'from-cyan-500 to-blue-500' },
    { key: 'frameworks', label: 'Frameworks', color: 'from-blue-500 to-purple-500' },
    { key: 'cloud', label: 'Cloud & DevOps', color: 'from-teal-500 to-emerald-500' },
    { key: 'tools', label: 'Tools & IDEs', color: 'from-orange-500 to-red-500' },
    { key: 'embedded', label: 'Embedded Systems', color: 'from-pink-500 to-rose-500' },
  ]

  const active = categories.find((c) => c.key === activeCategory)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActiveCategory(category.key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.key ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105` : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 min-h-[300px] overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className={`absolute -left-10 -top-20 w-72 h-72 rounded-full opacity-60 blur-3xl bg-gradient-to-br ${active.color}`} style={{ transform: 'scale(1.2)', animation: 'blobMove 14s ease-in-out infinite' }} />
          <div className={`absolute right-0 top-10 w-56 h-56 rounded-full opacity-55 blur-2xl bg-gradient-to-br ${active.color}`} style={{ transform: 'scale(1.05)', animation: 'blobMove 18s ease-in-out infinite', animationDelay: '3s' }} />
          <div className={`absolute left-24 bottom-[-20px] w-80 h-80 rounded-full opacity-50 blur-3xl bg-gradient-to-br ${active.color}`} style={{ transform: 'scale(1)', animation: 'blobMove 20s ease-in-out infinite', animationDelay: '6s' }} />
        </div>
        <style>{`
          @keyframes blobMove {
            0% { transform: translateY(0) scale(1) translateX(0); }
            25% { transform: translateY(-18px) scale(1.05) translateX(8px); }
            50% { transform: translateY(6px) scale(0.98) translateX(-6px); }
            75% { transform: translateY(-10px) scale(1.02) translateX(4px); }
            100% { transform: translateY(0) scale(1) translateX(0); }
          }
        `}</style>
        <div className="flex flex-wrap gap-3 justify-center relative z-10">
          {skills[activeCategory].map((skill, index) => (
            <Badge key={index} className="px-4 py-2 text-base bg-slate-800 text-gray-300 border-slate-600 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/50 hover:text-white transition-all duration-300 cursor-default">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsModal
