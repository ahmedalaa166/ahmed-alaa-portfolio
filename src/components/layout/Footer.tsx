import { ArrowUp, ShieldCheck } from 'lucide-react'
import { t } from '../../i18n/en'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-[#040605]">
      <div className="container-px py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg border border-mint/25 bg-coal flex items-center justify-center text-mint">
                <ShieldCheck size={18} />
              </span>
              <div>
                <p className="font-display font-semibold text-lg leading-tight">Ahmed Alaa</p>
                <p className="font-mono text-[11px] text-mist/50 tracking-widest" dir="ltr">
                  greywail
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-mist leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-4 items-start md:items-end">
            <SocialLinks />
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 text-xs text-mist/70 hover:text-mint transition-colors"
            >
              {t.footer.backToTop}
              <ArrowUp size={13} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-lineSoft flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mist/60 text-center sm:text-start">
            © {year} Ahmed Alaa. {t.footer.rights}
          </p>
          <p className="text-[11px] font-mono text-mist/40" dir="ltr">
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  )
}