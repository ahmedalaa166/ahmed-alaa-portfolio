import { useState } from 'react'
import { t } from '../../i18n/en'
import { images } from '../../data'

/**
 * Profile photograph card. Looks for /images/profile.jpg — until that file
 * exists a clearly-labelled monogram placeholder is shown instead.
 */
export function PortraitCard() {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  const showImage = !errored
  const alt = `${t.hero.name} — ${t.hero.kicker}`

  return (
    <div className="relative rounded-2xl border border-line bg-graphite overflow-hidden aspect-[4/5] group">
      {showImage ? (
        <img
          src={images.profile}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 50% 20%, rgba(52,211,153,0.14) 0%, transparent 65%)',
            }}
          />
          <span className="relative w-24 h-24 rounded-2xl border border-mint/25 bg-coal/70 flex items-center justify-center font-display font-bold text-4xl text-mint/70 shadow-mint/10">
            AA
          </span>
          <p className="relative font-mono text-[11px] text-mist/50" dir="ltr">
            pending: images/profile.jpg
          </p>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
        <p className="font-display font-semibold text-lg text-snow">{t.hero.name}</p>
        <p className="font-mono text-[11px] text-mist/70 flex items-center gap-1.5" dir="ltr">
          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-dot" />
          ahmed@security · {t.hero.alias}
        </p>
      </div>
    </div>
  )
}