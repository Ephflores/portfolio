import { useEffect, useState, useRef } from 'react'
import { X } from 'lucide-react'

const BLOB_EASING = 'cubic-bezier(0.34, 1.56, 0.64, 1)'

const Modal = ({ isOpen, onClose, children, title, gradient = 'from-cyan-500 to-blue-500', rect = null }) => {
  const [entered, setEntered] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const transformOriginRef = useRef({ x: '50%', y: '50%' })

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    setEntered(false)
    setIsExiting(false)
    if (rect) {
      transformOriginRef.current = {
        x: `${rect.left + rect.width / 2}px`,
        y: `${rect.top + rect.height / 2}px`,
      }
    } else {
      transformOriginRef.current = { x: '50%', y: '50%' }
    }
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntered(true))
    })
    return () => cancelAnimationFrame(id)
  }, [isOpen, rect])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      onClose()
    }, 320)
  }

  if (!isOpen) return null

  const originStyle = {
    transformOrigin: `${transformOriginRef.current.x} ${transformOriginRef.current.y}`,
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose} aria-hidden />

      <div
        style={originStyle}
        className={`relative w-full max-w-6xl max-h-[90vh] bg-slate-900/95 rounded-3xl shadow-2xl overflow-hidden border border-slate-700/80 modal-dialog ${
          isExiting ? 'modal-dialog--exiting' : entered ? 'modal-dialog--open' : 'modal-dialog--entering'
        }`}
      >
        {/* Blobs contained only in the modal – overflow-hidden clips them to modal bounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50" aria-hidden>
          <div
            className={`absolute -left-16 top-0 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br ${gradient}`}
            style={{ animation: `modal-blob 8s ${BLOB_EASING} infinite` }}
          />
          <div
            className={`absolute right-0 bottom-0 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br ${gradient}`}
            style={{ animation: `modal-blob-2 9s ${BLOB_EASING} infinite`, animationDelay: '2.4s' }}
          />
          <div
            className={`absolute left-1/2 bottom-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-br ${gradient}`}
            style={{ animation: `modal-blob-3 7s ${BLOB_EASING} infinite`, animationDelay: '1.1s' }}
          />
        </div>

        <div className="sticky top-0 z-20 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 px-6 md:px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent capitalize">
            {title}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-all duration-300 hover:rotate-90 group"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        <div className="relative z-10 overflow-y-auto max-h-[calc(90vh-80px)] p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
