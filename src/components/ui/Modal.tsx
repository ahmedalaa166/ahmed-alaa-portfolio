import { useEffect, useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { t } from '../../i18n/en'

interface ModalProps {
  open: boolean
  onClose: () => void
  label: string
  children: ReactNode
}

export function Modal({ open, onClose, label, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const prevFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const scrollbarWidth = window.innerWidth - root.clientWidth
    prevFocus.current = document.activeElement as HTMLElement | null
    root.style.overflow = 'hidden'
    if (document.body) document.body.style.paddingRight = `${scrollbarWidth}px`
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      root.style.overflow = ''
      if (document.body) document.body.style.paddingRight = ''
      prevFocus.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto terminal-scroll rounded-2xl border border-line bg-coal shadow-panel"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 h-14 border-b border-lineSoft glass">
          <p className="font-mono text-xs tracking-wider text-mist">{label}</p>
          <button
            ref={closeRef}
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-mist hover:text-snow hover:bg-smoke/70 transition-colors"
            aria-label={t.achievements.certificate.close}
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-5 sm:p-8">{children}</div>
      </motion.div>
    </div>
  )
}