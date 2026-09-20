export interface ProjectMeta {
  id: string
  url: string
}

export const projects: ProjectMeta[] = [
  {
    id: 'aflamk',
    url: 'https://aflamk-1.vercel.app',
  },
  {
    id: 'ahmed-tech',
    url: 'https://ahmed-tech-nine.vercel.app',
  },
  {
    id: 'real-estate',
    url: 'https://realestate-sales-os.vercel.app',
  },
]

export const site = {
  name: 'Ahmed Alaa',
  alias: 'Greywail',
  email: 'ahmedalaa1662006@gmail.com',
  phoneDisplay: '+20 10 2699 9770',
  phoneRaw: '+201026999770',
  github: 'https://github.com/ahmedalaa166',
  linkedin: 'https://www.linkedin.com/in/a-h-m-e-d-b06219255/',
  facebook: 'https://www.facebook.com/ah.m.ed.321855?locale=ar_AR',
  nafezly: 'https://nafezly.com/my/services',
}

export const images = {
  profile: '/images/profile.jpg',
  certificate: '/images/certificate.jpg',
  ctf: '/images/ctf.jpg',
  projects: {
    aflamk: '/images/projects/aflamk.png',
    'ahmed-tech': '/images/projects/ahmed-tech.png',
    'real-estate': '/images/projects/real-estate.png',
  } as Record<string, string>,
}

export interface SkillCategory {
  id: string
  icon: string
}

export const skillCategoryMeta: Record<string, SkillCategory | undefined> = {
  cybersecurity: { id: 'cybersecurity', icon: 'shield' },
  development: { id: 'development', icon: 'code' },
  tools: { id: 'tools', icon: 'terminal' },
}