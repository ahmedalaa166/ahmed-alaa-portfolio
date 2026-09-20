import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'achievements',
  'services',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export function sectionIds(): readonly SectionId[] {
  return SECTION_IDS
}

/**
 * Tracks which section is currently in the viewport using an IntersectionObserver.
 * The `rootMargin` biases the detection window toward the top of the viewport so
 * the navbar highlights update while the user scrolls.
 */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId
            if (SECTION_IDS.includes(id)) setActive(id)
          }
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return active
}