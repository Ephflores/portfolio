import { useState, useEffect } from 'react';
import { games } from '../data/resumeData';
import useInView from '../hooks/useInView';

const Games = () => {
  const { ref, isVisible } = useInView();
  const [activeGame, setActiveGame] = useState(null);

  const handlePlayClick = (game) => {
    setActiveGame(game);
  };

  const handleCloseGame = () => {
    setActiveGame(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeGame) {
        handleCloseGame();
      }
    };

    if (activeGame) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [activeGame]);

  return (
    <>
      <section
        id="games"
        ref={ref}
        className={`scroll-mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/90 backdrop-blur-sm transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Games</h2>
          <div className="h-1 w-24 mb-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-gray-800/80 rounded-xl p-6 border border-gray-700/80 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:border-blue-500/60"
              >
                <div className="h-0.5 w-16 mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full" />
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{game.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <span>{Array.isArray(game.engine) ? game.engine.join(' • ') : game.engine}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                  {game.description}
                </p>
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => handlePlayClick(game)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Play Now
                  </button>
                  <a
                    href={game.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    View on itch.io
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Embed Modal */}
      {activeGame && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 transition-opacity duration-300"
          onClick={handleCloseGame}
        >
          <div
            className="relative w-full max-w-6xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseGame}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-gray-800/80 rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close game"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-white mb-2">{activeGame.name}</h3>
              <div className="relative w-full bg-gray-950 rounded-lg overflow-hidden flex items-center justify-center" style={{ minHeight: '200px', padding: '2rem' }}>
                <iframe
                  className="border-0"
                  src={activeGame.embedUrl}
                  title={activeGame.name}
                  allowFullScreen
                  allow="autoplay; fullscreen; payment"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                  style={{ width: '100%', maxWidth: '552px', height: '167px' }}
                />
              </div>
              <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
                <p className="text-gray-400 text-sm">
                  Click the button above to download the game. Press ESC to close.
                </p>
                <a
                  href={activeGame.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                >
                  Open on itch.io
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Games;

