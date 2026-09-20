interface SectionHeadingProps {
  kicker: string
  title: string
  short?: string
}

export function SectionHeading({ kicker, title, short }: SectionHeadingProps) {
  return (
    <div className="mb-14 lg:mb-20">
      <p
        className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-mint/80 mb-4 flex items-center gap-3"
        dir="ltr"
      >
        <span className="inline-block w-8 h-px bg-mint/50" />
        {kicker}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold tracking-tight">
        {title}
      </h2>
      {short && (
        <p className="mt-4 max-w-2xl text-mist text-base lg:text-lg leading-relaxed" dir="ltr">
          {short}
        </p>
      )}
    </div>
  )
}