import { useState } from 'react'
import { ArrowUpRight, ExternalLink, Film, Cpu, Building2, type LucideIcon } from 'lucide-react'
import { t } from '../i18n/en'
import { images } from '../data'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const PROJECT_ICONS: Record<string, LucideIcon> = {
  aflamk: Film,
  'ahmed-tech': Cpu,
  'real-estate': Building2,
}

export function Projects() {
    const items = t.projects.list

  const [featured, ...rest] = items

  return (
    <section id="projects" className="relative section-pad border-t border-lineSoft scroll-mt-20">
      <div className="container-px">
        <SectionHeading kicker={t.projects.kicker} title={t.projects.title} short={t.projects.short} />

        <div className="space-y-6">
          <Reveal>
            <FeaturedCard project={featured} />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <SmallCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProjectData {
  id: string
  name: string
  tag: string
  description: string
  url: string
}

function ProjectPreview({
  host,
  monogram,
  image,
  alt,
  className,
}: {
  host: string
  monogram: string
  image: string
  alt: string
  className?: string
}) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-[#0a0f0d] border border-lineSoft rounded-xl ${className ?? ''}`}
    >
      <div className="flex items-center gap-2 px-3.5 h-9 border-b border-lineSoft bg-smoke/40" dir="ltr">
        <span className="w-2 h-2 rounded-full bg-[#5b6b66]" />
        <span className="w-2 h-2 rounded-full bg-[#7a6a42]" />
        <span className="w-2 h-2 rounded-full bg-[#2d4a40]" />
        <span className="mx-auto flex items-center gap-1.5 px-3 h-5 rounded-md bg-coal/80 border border-lineSoft text-[9.5px] font-mono text-mist/70 truncate max-w-[70%]">
          <span className="w-1.5 h-1.5 rounded-full bg-mint/70" />
          {host}
        </span>
      </div>

      {!errored ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 top-9 h-[calc(100%-36px)] w-full object-cover object-top transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      ) : (
        <div
          className="grid-bg dot-bg relative flex items-center justify-center h-full min-h-[140px]"
          dir="ltr"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(52,211,153,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="relative flex flex-col items-center gap-2">
            <span className="font-display font-bold text-4xl text-snow/20 tracking-tight">
              {monogram}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-mist/40">
              site preview
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

function FeaturedCard({ project }: { project: ProjectData }) {
    const host = new URL(project.url).host
  const Icon = PROJECT_ICONS[project.id] ?? ExternalLink
  const monogram = project.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="card-surface overflow-hidden group hover:border-mint/30 transition-colors duration-300">
      <div className="grid lg:grid-cols-2">
        <div className="p-4 sm:p-6 lg:p-7">
          <ProjectPreview
            host={host}
            monogram={monogram}
            image={images.projects[project.id]}
            alt={`${project.name} — ${t.projects.previewNote}`}
            className="h-full min-h-[240px] group-hover:brightness-105 transition-all"
          />
        </div>

        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <p
            className="font-mono text-[10.5px] tracking-[0.3em] text-mint/70 mb-3 flex items-center gap-2"
            dir="ltr"
          >
            <span className="w-4 h-px bg-mint/50 inline-block" />
            {t.projects.featured} · {project.tag}
          </p>
          <h3 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">{project.name}</h3>
          <p className="mt-4 text-mist leading-relaxed text-[15px] max-w-md">{project.description}</p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-mint text-ink text-[14px] font-semibold hover:brightness-110 transition-all active:scale-[0.98]"
            >
              {t.projects.liveDemo}
              <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
            <span className="font-mono text-xs text-mist/60 flex items-center gap-2" dir="ltr">
              <Icon size={14} className="text-mint/60" />
              {host}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

function SmallCard({ project }: { project: ProjectData }) {
    const host = new URL(project.url).host
  const monogram = project.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <article className="card-surface overflow-hidden group hover:border-mint/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col">
      <div className="p-4 sm:p-5 pb-0">
        <ProjectPreview
          host={host}
          monogram={monogram}
          image={images.projects[project.id]}
          alt={`${project.name} — ${t.projects.previewNote}`}
          className="h-[190px]"
        />
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <p className="font-mono text-[10px] tracking-[0.25em] text-aqua/70 uppercase">{project.tag}</p>
        <h3 className="mt-1.5 font-display font-semibold text-xl tracking-tight">{project.name}</h3>
        <p className="mt-2.5 text-sm text-mist leading-relaxed flex-1">{project.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-mint hover:text-mint/80 transition-colors"
          >
            {t.projects.liveDemo}
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="font-mono text-[10.5px] text-mist/45 truncate">{host}</span>
        </div>
      </div>
    </article>
  )
}