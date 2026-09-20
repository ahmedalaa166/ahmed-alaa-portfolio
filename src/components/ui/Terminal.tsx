import { useId } from 'react'
import { useTypewriter } from '../../hooks/useTypewriter'

interface TerminalProps {
  lines: string[]
  status: string
  prompt?: string
  title?: string
  className?: string
}

export function Terminal({ lines, status, prompt = 'ahmed@security', title = 'bash', className }: TerminalProps) {
  const { visibleLines } = useTypewriter(lines, {
    charDelay: 26,
    startDelay: 400,
  })
  const titleId = useId()

  const first = lines[0] ?? ''
  const dollar = first.indexOf('$')
  const promptPrefix = dollar >= 0 ? first.slice(0, dollar + 1) : first

  return (
    <div
      className={`rounded-xl border border-line bg-coal/80 shadow-panel overflow-hidden backdrop-blur-sm ${className ?? ''}`}
      role="img"
      aria-label="Terminal illustration"
      dir="ltr"
    >
      <div className="flex items-center gap-2 px-4 h-11 border-b border-lineSoft bg-smoke/60">
        <span className="w-3 h-3 rounded-full bg-[#5b6b66]" />
        <span className="w-3 h-3 rounded-full bg-[#7a6a42]" />
        <span className="w-3 h-3 rounded-full bg-[#2d4a40]" />
        <span className="ml-3 font-mono text-[11px] tracking-wider text-mist/70 truncate">
          {prompt} — {title}
        </span>
      </div>

      <div className="p-4 sm:p-5 font-mono text-[12.5px] sm:text-[13.5px] leading-7 min-h-[218px] sm:min-h-[236px]">
        {visibleLines.map((line, i) => {
          const isLast = i === visibleLines.length - 1
          if (i === 0) {
            const typed = line.slice(promptPrefix.length)
            return (
              <div key={`${titleId}-${i}`}>
                <span className="text-mint/85">{promptPrefix}</span>
                <span className="text-snow">{typed}</span>
                {isLast && <CursorBlink />}
              </div>
            )
          }
          return (
            <div key={`${titleId}-${i}`} className="flex gap-2">
              <span className="text-mint/70 select-none" aria-hidden="true">
                {'\u00a0'}
              </span>
              <span className="text-snow/90">{line}</span>
              {isLast && <CursorBlink />}
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 h-10 border-t border-lineSoft bg-[#070b0a]">
        <span className="flex items-center gap-2 font-mono text-[10.5px] sm:text-[11px] text-mist/80">
          <span className="w-2 h-2 rounded-full bg-mint animate-pulse-dot" />
          {status}
        </span>
        <span className="font-mono text-[10.5px] sm:text-[11px] text-mist/40">greywail</span>
      </div>
    </div>
  )
}

function CursorBlink() {
  return (
    <span
      className="inline-block w-[7px] h-[15px] mt-[5px] bg-mint/80 animate-blink"
      aria-hidden="true"
    />
  )
}