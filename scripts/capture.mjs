import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public', 'images', 'projects')
mkdirSync(outDir, { recursive: true })

const targets = [
  { id: 'aflamk', url: 'https://aflamk-1.vercel.app' },
  { id: 'ahmed-tech', url: 'https://ahmed-tech-nine.vercel.app' },
  { id: 'real-estate', url: 'https://realestate-sales-os.vercel.app' },
]

const browser = await chromium.launch({ channel: 'msedge', headless: true })

for (const target of targets) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  try {
    await page.goto(target.url, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(2500)
    await page.screenshot({ path: join(outDir, `${target.id}.png`) })
    console.log(`captured ${target.id} -> public/images/projects/${target.id}.png`)
  } catch (err) {
    console.error(`FAILED ${target.id} (${target.url}): ${err.message.split('\n')[0]}`)
  } finally {
    await page.close()
  }
}

await browser.close()
console.log('done')