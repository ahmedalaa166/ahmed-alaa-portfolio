import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Menu, X, ArrowUpRight } from 'lucide-react'
import { t } from '../../i18n/en'
import { useActiveSection, sectionIds } from '../../hooks/useActiveSection'
import { site } from '../../data'

export function Navbar() {
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const ids = sectionIds()
  const labels = [t.nav.home, t.nav.about, t.nav.skills, t.nav.projects, t.nav.experience, t.nav.achievements, t.nav.services, t.nav.contact]

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-px h-[68px] flex items-center justify-between gap-4" aria-label="Main">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
          className="flex items-center gap-3 group"
        >
          <span className="w-9 h-9 rounded-lg border border-mint/30 bg-coal flex items-center justify-center font-display font-bold text-mint text-sm shadow-mint/10">
            AA
          </span>
          <span className="leading-tight">
            <span className="block font-display font-semibold tracking-tight text-[15px]">
              Ahmed Alaa
            </span>
            <span className="block font-mono text-[10px] text-mist/60 tracking-widest" dir="ltr">
              greywail / freelance
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {ids.map((id, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(id)
                }}
                className={`relative px-3 py-2 text-[13.5px] rounded-md transition-colors ${
                  active === id ? 'text-snow' : 'text-mist hover:text-snow'
                }`}
                aria-current={active === id ? 'true' : undefined}
              >
                {labels[i]}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-[1px] h-px bg-mint/70"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.a11y.socialLink('GitHub')}
            className="hidden sm:flex w-9 h-9 rounded-lg border border-line bg-coal/60 items-center justify-center text-mist hover:text-snow hover:border-mint/40 transition-colors"
          >
            <Github size={17} />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('contact')
            }}
            className="hidden md:inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-mint/10 border border-mint/30 text-mint text-[13px] font-medium hover:bg-mint/20 transition-colors"
          >
            {t.nav.contact}
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-9 h-9 rounded-lg border border-line bg-coal/60 flex items-center justify-center text-snow"
            aria-expanded={open}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[48] bg-black/55 lg:hidden"
            aria-hidden="true"
          />
        )}
        {open && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 32 }}
            className="lg:hidden fixed top-[68px] right-0 bottom-0 z-[49] w-[78%] max-w-[320px] overflow-y-auto bg-coal border-l border-line will-change-transform"
            role="dialog"
            aria-label={t.a11y.openMenu}
          >
            <ul className="px-4 py-4 space-y-1">
              {ids.map((id, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(id)
                    }}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg text-[15px] transition-colors ${
                      active === id
                        ? 'bg-smoke/70 text-snow font-medium'
                        : 'text-mist hover:text-snow hover:bg-smoke/40'
                    }`}
                  >
                    {labels[i]}
                    <span className="font-mono text-[10px] text-mist/40" dir="ltr">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-6 pt-1 flex items-center gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-lg border border-line flex items-center gap-2 text-sm text-mist hover:text-snow"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('contact')
                }}
                className="h-10 px-4 rounded-lg bg-mint/10 border border-mint/30 text-mint text-sm font-medium flex items-center gap-2"
              >
                {t.nav.contact}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}