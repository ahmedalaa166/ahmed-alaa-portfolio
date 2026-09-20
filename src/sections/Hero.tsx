import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, ShieldHalf, TerminalSquare } from 'lucide-react'
import { t } from '../i18n/en'
import { Terminal } from '../components/ui/Terminal'

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const paths = ['/ahmed-alaa', '/security', '/web', '/ai']

export function Hero() {
    const terminalLines = [
    t.hero.terminal.line1,
    t.hero.terminal.line2,
    t.hero.terminal.line3,
    t.hero.terminal.line4,
    t.hero.terminal.line5,
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center overflow-hidden pt-[68px]"
      aria-label={t.hero.name}
    >
      {/* background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(52,211,153,0.10) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute -top-32 end-[-15%] w-[520px] h-[520px] rounded-full opacity-30 blur-[120px]"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.32) 0%, transparent 65%)',
        }}
      />

      <div className="container-px relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center py-20 lg:py-28">
        {/* Left column */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.32em] text-mint/85 inline-flex items-center gap-2"
            dir="ltr"
          >
            <TerminalSquare size={14} className="text-mint/70" />
            {t.hero.kicker}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display font-bold tracking-tight text-[44px] leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{t.hero.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-2 font-mono text-xs text-mist/60 tracking-wider"
            dir="ltr"
          >
            <span className="text-mist/40">// </span>
            {t.hero.alias}
          </motion.p>

          <motion.div variants={item} className="mt-6 space-y-1.5">
            {t.hero.roles.map((role, i) => (
              <p
                key={i}
                className="text-xl sm:text-2xl font-display font-medium text-snow/90"
              >
                <span className="text-mint/70 font-mono text-sm me-2" dir="ltr">
                  {'>'}
                </span>
                {role}
              </p>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-mist text-[15px] sm:text-base leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('projects')
              }}
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-mint text-ink text-[15px] font-semibold hover:brightness-110 transition-all shadow-mint/20 active:scale-[0.98]"
            >
              {t.hero.ctaWork}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('about')
              }}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-line text-snow text-[15px] font-medium hover:border-mint/40 hover:bg-smoke/40 transition-all"
            >
              {t.hero.ctaAbout}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
              className="inline-flex items-center gap-2 h-12 px-5 rounded-xl text-mist text-[15px] hover:text-mint transition-colors"
            >
              {t.hero.ctaContact}
              <ShieldHalf size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2"
            dir="ltr"
          >
            {paths.map((p, i) => (
              <span key={p} className="font-mono text-xs text-mist/50">
                {i > 0 && <span className="me-1 text-mist/25">+</span>}
                {p}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          className="relative max-w-lg mx-auto w-full lg:max-w-none"
        >
          <div
            className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(52,211,153,0.16) 0%, transparent 70%)',
            }}
          />
          <Terminal lines={terminalLines} status={t.hero.status} className="relative" />

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-mist/60 flex items-center gap-2" dir="ltr">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-dot" />
              {t.hero.terminal.active}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <button
        type="button"
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist/50 hover:text-mint transition-colors"
        aria-label={t.hero.scroll}
      >
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase">{t.hero.scroll}</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}