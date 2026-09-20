import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Subtle radial glow that trails the pointer. Disabled on touch devices and
 * when the user prefers reduced motion. Decoration only.
 */
export function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduceMotion) return
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 3
    let targetX = x
    let targetY = y

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const tick = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`
      raf = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = window.requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.cancelAnimationFrame(raf)
    }
  }, [reduceMotion])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full opacity-[0.07] mix-blend-screen hidden xl:block"
      style={{
        background:
          'radial-gradient(circle at center, rgba(52,211,153,0.55) 0%, rgba(34,211,238,0.18) 38%, transparent 68%)',
      }}
      aria-hidden="true"
    />
  )
}