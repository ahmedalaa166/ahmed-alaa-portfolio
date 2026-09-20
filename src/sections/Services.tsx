import { Globe, Sparkles, Palette, ShieldCheck, ScanSearch, FileSearch, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { t } from '../i18n/en'
import { site } from '../data'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const ICONS: LucideIcon[] = [Globe, Sparkles, Palette, ShieldCheck, ScanSearch, FileSearch]

export function Services() {
  
  return (
    <section id="services" className="relative section-pad border-t border-lineSoft scroll-mt-20">
      <div className="container-px">
        <SectionHeading kicker={t.services.kicker} title={t.services.title} short={t.services.short} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i] ?? Globe
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="card-surface p-6 h-full group hover:border-mint/30 hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-between mb-5">
                    <span className="w-11 h-11 rounded-xl bg-mint/10 border border-mint/15 flex items-center justify-center text-mint group-hover:bg-mint/15 transition-colors">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-[11px] text-mist/40" dir="ltr">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <h3 className="font-display font-semibold text-[17px]">{s.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 card-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="max-w-xl">
              <p className="font-mono text-xs text-mint/70 mb-1.5" dir="ltr">
                $ nafezly --profile
              </p>
              <p className="text-sm text-mist">{t.services.platformNote}</p>
            </div>
            <a
              href={site.nafezly}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn shrink-0 inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-mint text-ink text-[15px] font-semibold hover:brightness-110 transition-all"
            >
              {t.services.cta}
              <ArrowUpRight size={17} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}