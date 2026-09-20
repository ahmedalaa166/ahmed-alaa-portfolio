import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypewriterOptions {
  /** Speed per character in ms */
  charDelay?: number
  /** Delay before starting */
  startDelay?: number
  /** Pause after the final line finishes callbacks fire */
  /** Whether to start typing automatically */
}

interface TypewriterResult {
  /** Line index currently being typed */
  visibleLines: string[]
}

/**
 * Progressive one-shot typewriter: types each line after the previous one
 * completes. Respects prefers-reduced-motion (renders everything instantly).
 */
export function useTypewriter(
  lines: string[],
  opts: TypewriterOptions = {},
): TypewriterResult {
  const { charDelay = 20, startDelay = 500 } = opts
  const reduceMotion = useReducedMotion()

  const [charCount, setCharCount] = useState(0)
  const [lineCount, setLineCount] = useState(0)
  const [started, setStarted] = useState(false)

  const linesRef = useRef(lines)
  linesRef.current = lines

  useEffect(() => {
    setCharCount(0)
    setLineCount(0)
    const timer = window.setTimeout(() => setStarted(true), reduceMotion ? 0 : startDelay)
    return () => window.clearTimeout(timer)
  }, [lines, startDelay, reduceMotion])

  useEffect(() => {
    if (!started) return
    if (reduceMotion) {
      const span = linesRef.current.join('\n').length
      setCharCount(span)
      setLineCount(linesRef.current.length)
      return
    }
    if (lineCount >= linesRef.current.length) return

    const current = linesRef.current[lineCount]
    if (charCount < current.length) {
      const t = window.setTimeout(
        () => setCharCount((c) => c + 1),
        charDelay + (current[charCount] === ' ' ? 12 : 0),
      )
      return () => window.clearTimeout(t)
    }
    const t = window.setTimeout(() => {
      setLineCount((l) => l + 1)
      setCharCount(0)
    }, charDelay * 6)
    return () => window.clearTimeout(t)
  }, [started, lineCount, charCount, charDelay, reduceMotion])

  const visibleLines = linesRef.current
    .slice(0, lineCount)
    .concat(lineCount < linesRef.current.length ? [linesRef.current[lineCount].slice(0, charCount)] : [])

  return { visibleLines }
}