import { useEffect } from 'react'
import { X } from 'lucide-react'

const Modal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} aria-hidden />
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-scaleIn border border-slate-800">
        <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-6 md:px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent capitalize">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-all duration-300 hover:rotate-90 group"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
