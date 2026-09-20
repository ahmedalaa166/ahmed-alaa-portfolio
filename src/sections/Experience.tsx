import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { t } from '../i18n/en'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Experience() {
  
  return (
    <section id="experience" className="relative section-pad border-t border-lineSoft scroll-mt-20">
      <div className="container-px">
        <SectionHeading kicker={t.experience.kicker} title={t.experience.title} short={t.experience.short} />

        <div className="relative ms-3 sm:ms-5 border-s border-line ps-0">
          <div className="relative pt-1 pb-12">
            <span className="absolute -start-[7px] top-2 w-3.5 h-3.5 rounded-full bg-mint ring-4 ring-mint/15" />
            <Reveal>
              <div className="ms-5 sm:ms-8">
                {t.experience.items.map((job) => (
                  <article key={job.role} className="card-surface p-6 sm:p-8 hover:border-mint/25 transition-colors duration-300">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="w-9 h-9 rounded-lg bg-mint/10 border border-mint/20 flex items-center justify-center text-mint">
                        <Briefcase size={17} />
                      </span>
                      <h3 className="font-display font-semibold text-xl sm:text-2xl">{job.role}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-mist">
                        <Briefcase size={13} className="text-mist/50" />
                        {job.org}
                      </span>
                      <time className="inline-flex items-center gap-1.5 font-mono text-xs text-mint/80" dir="ltr">
                        <MapPin size={12} />
                        {job.period}
                      </time>
                    </div>
                    <p className="text-mist text-[15px] leading-relaxed max-w-2xl">{job.summary}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 max-w-2xl">
                      {job.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-snow/85">
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-aqua/70 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Education node */}
          <div className="relative pt-2">
            <span className="absolute -start-[7px] top-3 w-3.5 h-3.5 rounded-full bg-aqua/80 ring-4 ring-aqua/10" />
            <Reveal>
              <div className="ms-5 sm:ms-8">
                <article className="card-surface p-6 sm:p-8 hover:border-aqua/25 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="w-9 h-9 rounded-lg bg-aqua/10 border border-aqua/20 flex items-center justify-center text-aqua">
                      <GraduationCap size={17} />
                    </span>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl">{t.education.org}</h3>
                    <span className="ms-auto font-mono text-[11px] tracking-widest text-mint/70">
                      {t.education.kicker}
                    </span>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-aqua/80 mb-3">
                    {t.education.role}
                  </p>
                  <p className="text-mist text-[15px] leading-relaxed max-w-2xl">{t.education.detail}</p>
                  <p className="mt-5 font-mono text-[11.5px] text-mist/50 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aqua/50" />
                    {t.education.note}
                  </p>
                </article>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}