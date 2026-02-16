import { Gamepad2, ExternalLink } from 'lucide-react'
import { games } from '@/data/resumeData'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const GamesModal = () => (
  <div className="space-y-6">
    {games.map((game) => (
      <Card key={game.id} className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg text-cyan-400 shrink-0">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{game.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {game.engine.map((tech, index) => (
                  <Badge key={index} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/50">
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href={game.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} />
                Play on itch.io
              </a>
            </div>
          </div>
          <div className="bg-slate-950/50 rounded-lg overflow-hidden border border-slate-800">
            <iframe
              src={game.embedUrl}
              width="100%"
              height="167"
              frameBorder="0"
              className="w-full"
              title={game.name}
            >
              <a href={game.itchUrl}>{game.name} by Ephraim Flores</a>
            </iframe>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default GamesModal
