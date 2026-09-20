import { useCallback, useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { t } from '../../i18n/en'

interface CopyButtonProps {
  value: string
  label: string
  className?: string
}

export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      if (timer.current) window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }, [value])

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors ${className ?? ''}`}
      aria-label={`${t.a11y.socialLink(label)} — ${t.contact.copiedPrompt}`}
    >
      {copied ? (
        <Check size={13} className="text-mint" aria-hidden="true" />
      ) : (
        <Copy size={13} aria-hidden="true" />
      )}
      <span className={copied ? 'text-mint' : ''}>{copied ? t.contact.copied : label}</span>
    </button>
  )
}