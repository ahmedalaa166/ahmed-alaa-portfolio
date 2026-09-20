import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FileBadge, Trophy, Eye, Download, ImageOff } from 'lucide-react'
import { t } from '../i18n/en'
import { images } from '../data'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Modal } from '../components/ui/Modal'

export function Achievements() {
  const [certOpen, setCertOpen] = useState(false)
  const [ctfOpen, setCtfOpen] = useState(false)

  return (
    <section id="achievements" className="relative section-pad border-t border-lineSoft scroll-mt-20">
      <div className="container-px">
        <SectionHeading kicker={t.achievements.kicker} title={t.achievements.title} short={t.achievements.short} />

        <div className="grid md:grid-cols-2 gap-5">
          {/* Certificate */}
          <Reveal>
            <button
              type="button"
              onClick={() => setCertOpen(true)}
              className="text-start card-surface w-full p-6 sm:p-8 group hover:border-mint/35 hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="w-12 h-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center text-mint">
                  <FileBadge size={22} />
                </span>
                <span className="font-mono text-[10px] tracking-[0.28em] text-mist/50 uppercase pt-1">
                  {t.achievements.certificate.label}
                </span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl sm:text-2xl leading-snug">
                {t.achievements.certificate.title}
              </h3>
              <p className="mt-2 text-sm text-mist">{t.achievements.certificate.tagline}</p>
              <ul className="mt-5 space-y-1.5 font-mono text-xs text-mist/80">
                <li className="flex gap-2">
                  <span className="text-mint/70 shrink-0">Issuer</span>
                  <span className="text-snow">{t.achievements.certificate.issuer}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-mint/70 shrink-0">Hours</span>
                  <span className="text-snow">{t.achievements.certificate.hours}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-mint/70 shrink-0">Date</span>
                  <span className="text-snow">{t.achievements.certificate.date}</span>
                </li>
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-mint">
                <Eye size={15} />
                {t.achievements.certificate.view}
              </span>
            </button>
          </Reveal>

          {/* CTF */}
          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={() => setCtfOpen(true)}
              className="text-start card-surface relative overflow-hidden p-6 sm:p-8 h-full w-full group hover:border-mint/35 hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 85% 0%, rgba(52,211,153,0.12) 0%, transparent 60%)',
                }}
              />
              <div className="relative flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="w-12 h-12 rounded-xl bg-aqua/10 border border-aqua/20 flex items-center justify-center text-aqua">
                    <Trophy size={22} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.28em] text-mist/50 uppercase pt-1" dir="ltr">
                    {t.achievements.ctf.tag}
                  </span>
                </div>

                <div className="mt-5 flex items-end gap-4">
                  <span className="font-display font-bold text-7xl leading-none text-gradient">03</span>
                  <span className="font-display font-semibold text-2xl text-snow pb-1">
                    {t.achievements.ctf.rank}
                  </span>
                </div>

                <p className="mt-4 text-sm text-mist">{t.achievements.ctf.label}</p>
                <p className="mt-2 font-mono text-xs text-mint/80">{t.achievements.ctf.note}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-mint">
                  <Eye size={15} />
                  {t.achievements.ctf.view}
                </span>
              </div>
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-mono text-xs text-mist/50">{t.achievements.soon}</p>
        </Reveal>
      </div>

      <AnimatePresence>
        {certOpen && (
          <Modal open={certOpen} onClose={() => setCertOpen(false)} label={t.achievements.certificate.title}>
            <ImageViewer
              image={images.certificate}
              alt={t.achievements.certificate.title}
              placeholder={t.achievements.certificate.placeholder}
              placeholderDetail={t.achievements.certificate.placeholderDetail}
              withDownload
            />
          </Modal>
        )}
        {ctfOpen && (
          <Modal open={ctfOpen} onClose={() => setCtfOpen(false)} label={`${t.achievements.ctf.tag} · ${t.achievements.ctf.rank}`}>
            <ImageViewer
              image={images.ctf}
              alt={`${t.achievements.ctf.rank} — ${t.achievements.ctf.label}`}
              placeholder={t.achievements.ctf.placeholder}
              placeholderDetail={t.achievements.ctf.placeholderDetail}
            />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  )
}

function ImageViewer({
  image,
  alt,
  placeholder,
  placeholderDetail,
  withDownload = false,
}: {
  image: string
  alt: string
  placeholder: string
  placeholderDetail: string
  withDownload?: boolean
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div>
      <div className="relative rounded-xl border border-lineSoft overflow-hidden bg-[#0a0f0d] flex items-center justify-center min-h-[280px]">
        {!error && (
          <img
            src={image}
            alt={alt}
            className={`max-h-[70vh] w-auto object-contain transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            loading="lazy"
          />
        )}
        {error && (
          <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
            <ImageOff size={40} className="text-mist/40" />
            <p className="text-sm text-mist max-w-sm">{placeholder}</p>
            <p className="font-mono text-xs text-mist/50" dir="ltr">
              {placeholderDetail}
            </p>
          </div>
        )}
      </div>

      {loaded && withDownload && (
        <div className="flex justify-end mt-5">
          <a
            href={image}
            download
            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-mint text-ink text-sm font-semibold hover:brightness-110 transition-all"
          >
            <Download size={15} />
            {t.achievements.certificate.download}
          </a>
        </div>
      )}
    </div>
  )
}