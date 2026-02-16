import { GraduationCap, Calendar, Award } from 'lucide-react'
import { education } from '@/data/resumeData'
import { Card, CardContent } from '@/components/ui/card'

const EducationModal = () => (
  <div className="space-y-6">
    {education.map((edu) => (
      <Card key={edu.id} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg text-cyan-400 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {edu.period}
                </span>
                {edu.details && (
                  <span className="flex items-center gap-1">
                    <Award size={16} />
                    {edu.details}
                  </span>
                )}
              </div>
              {edu.courses && (
                <div className="mt-4 space-y-4">
                  {edu.courses.map((course, index) => (
                    <div key={index} className="border-l-2 border-cyan-500/30 pl-4">
                      <h4 className="font-semibold text-white mb-2">{course.title}</h4>
                      <ul className="space-y-1">
                        {course.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="text-gray-400 text-sm">{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default EducationModal
