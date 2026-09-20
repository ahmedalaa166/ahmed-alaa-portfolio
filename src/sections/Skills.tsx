import { ShieldCheck, Code2, TerminalSquare, type LucideIcon } from 'lucide-react'
import { t } from '../i18n/en'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  code: Code2,
  terminal: TerminalSquare,
}

export function Skills() {
  
  return (
    <section id="skills" className="relative section-pad scroll-mt-20 border-t border-lineSoft">
      <div className="container-px">
        <SectionHeading kicker={t.skills.kicker} title={t.skills.title} short={t.skills.short} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.skills.categories.map((cat, i) => {
            const Icon = ICONS[cat.icon] ?? ShieldCheck
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <div className="card-surface p-6 h-full group hover:border-mint/30 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center text-mint">
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display font-semibold text-[17px]">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-mist group-hover:text-snow/90 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-mint/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-mono text-xs text-mist/50" dir="ltr">
            {t.skills.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}