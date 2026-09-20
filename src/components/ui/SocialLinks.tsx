import { Github, Linkedin, Facebook, Mail, Phone, type LucideIcon } from 'lucide-react'
import { t } from '../../i18n/en'
import { site } from '../../data'

interface SocialLinkDef {
  key: string
  name: string
  href: string
  icon: LucideIcon
  external?: boolean
}

const ICON_SIZE = 18

interface SocialLinksProps {
  className?: string
  size?: number
  exclude?: string[]
  as?: 'icons' | 'list'
}

export function SocialLinks({ className, size = ICON_SIZE, exclude = [], as = 'icons' }: SocialLinksProps) {
  const links: SocialLinkDef[] = [
    { key: 'github', name: 'GitHub', href: site.github, icon: Github, external: true },
    { key: 'linkedin', name: 'LinkedIn', href: site.linkedin, icon: Linkedin, external: true },
    { key: 'facebook', name: 'Facebook', href: site.facebook, icon: Facebook, external: true },
    { key: 'email', name: 'Email', href: `mailto:${site.email}`, icon: Mail },
    { key: 'phone', name: 'Phone', href: `tel:${site.phoneRaw}`, icon: Phone },
  ]

  const visible = links.filter((l) => !exclude.includes(l.key))

  if (as === 'list') {
    return (
      <ul className={className}>
        {visible.map((l) => {
          const Icon = l.icon
          return (
            <li key={l.key}>
              <a
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                aria-label={t.a11y.socialLink(l.name)}
                className="flex items-center gap-3 py-2.5 px-4 rounded-lg border border-transparent hover:border-line hover:bg-smoke/50 transition-colors group"
              >
                <Icon size={16} className="text-mint/80 group-hover:text-mint transition-colors" />
                <span className="text-sm">{l.name}</span>
                <span className="text-xs text-mist/60 font-mono truncate hidden sm:block">
                  {l.href.replace(/^(mailto:|tel:)/, '')}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      {visible.map((l) => {
        const Icon = l.icon
        return (
          <a
            key={l.key}
            href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener noreferrer' : undefined}
            aria-label={t.a11y.socialLink(l.name)}
            className="w-10 h-10 rounded-lg border border-line bg-coal/60 flex items-center justify-center text-mist hover:text-snow hover:border-mint/40 hover:bg-smoke/70 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}