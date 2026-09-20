import { Mail, Phone, MapPin } from 'lucide-react'
import { t } from '../i18n/en'
import { site } from '../data'
import { Reveal } from '../components/ui/Reveal'
import { CopyButton } from '../components/ui/CopyButton'
import { SocialLinks } from '../components/ui/SocialLinks'

export function Contact() {
  
  return (
    <section id="contact" className="relative section-pad border-t border-lineSoft scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 110%, rgba(52,211,153,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="container-px relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-xs tracking-[0.35em] text-mint/80 uppercase mb-4">
              {t.contact.kicker}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-gradient">{t.contact.title}</span>
            </h2>
            <p className="mt-5 text-mist text-base sm:text-lg leading-relaxed">{t.contact.text}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <Reveal delay={0.05}>
            <div className="card-surface p-5 sm:p-6 hover:border-mint/30 transition-colors duration-300 h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="w-10 h-10 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center text-mint">
                  <Mail size={18} />
                </span>
                <CopyButton value={site.email} label={t.contact.copyEmail} className="text-mist/70 hover:text-mint" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mist/60">{t.contact.email}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-sm sm:text-base font-medium text-snow hover:text-mint transition-colors break-all"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface p-5 sm:p-6 hover:border-mint/30 transition-colors duration-300 h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="w-10 h-10 rounded-lg bg-aqua/10 border border-aqua/20 flex items-center justify-center text-aqua">
                  <Phone size={18} />
                </span>
                <CopyButton value={site.phoneRaw} label={t.contact.copyPhone} className="text-mist/70 hover:text-mint" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mist/60">{t.contact.phone}</p>
              <a
                href={`tel:${site.phoneRaw}`}
                className="mt-1 block text-sm sm:text-base font-medium text-snow hover:text-mint transition-colors font-mono"
                dir="ltr"
              >
                {site.phoneDisplay}
              </a>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-mist/55">
                <MapPin size={12} className="text-mint/60" />
                {t.contact.location}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-5">
            <SocialLinks size={19} />
            <p className="font-mono text-[11px] text-mist/40" dir="ltr">
              /ahmed-alaa/contact
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}