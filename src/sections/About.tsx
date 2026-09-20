import { motion } from 'framer-motion'
import { ShieldHalf, Code2, ChevronRight, TerminalSquare } from 'lucide-react'
import { t } from '../i18n/en'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PortraitCard } from '../components/ui/PortraitCard'

export function About() {
  
  const side = (tag: string, title: string, items: string[], icon: 'break' | 'build') => (
    <div className="card-surface overflow-hidden group hover:border-mint/25 transition-colors duration-300">
      <div className="flex items-center justify-between px-5 h-12 border-b border-lineSoft bg-smoke/40">
        <span className="font-mono text-[11px] tracking-[0.3em] text-mint/80" dir="ltr">
          {tag}
        </span>
        {icon === 'break' ? (
          <ShieldHalf size={15} className="text-mint/70" />
        ) : (
          <Code2 size={15} className="text-aqua/70" />
        )}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display font-semibold text-lg mb-4">{title}</h3>
        <ul className="space-y-2.5">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2.5 text-sm text-mist">
              <ChevronRight
                size={14}
                className="text-mint/60 shrink-0"
              />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <section id="about" className="relative section-pad scroll-mt-20">
      <div className="container-px">
        <SectionHeading kicker={t.about.kicker} title={t.about.title} />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-sm text-mint/90 mb-5 flex items-center gap-2" dir="ltr">
                <TerminalSquare size={15} />
                {t.about.lead}
              </p>
              <div className="space-y-4 text-mist text-[15px] sm:text-base leading-[1.85] max-w-xl">
                <p>{t.about.par1}</p>
                <p>{t.about.par2}</p>
                <p>{t.about.par3}</p>
                <p className="text-snow/90 bg-smoke/40 border border-lineSoft rounded-lg px-4 py-3 text-sm">
                  {t.about.par4}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2" dir="ltr">
                {['kali', 'burp-suite', 'portswigger-web-academy'].map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-line text-mist/70"
                  >
                    # {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>

          <div className="space-y-4 sm:space-y-5">
            <Reveal delay={0.05}>
              <PortraitCard />
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <Reveal delay={0.05}>
                {side(
                  t.about.breakTag,
                  t.about.breakTitle,
                  t.about.breakItems,
                  'break',
                )}
              </Reveal>
              <Reveal delay={0.15}>
                {side(t.about.buildTag, t.about.buildTitle, t.about.buildItems, 'build')}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}