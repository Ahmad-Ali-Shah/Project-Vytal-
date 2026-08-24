import test from 'node:test'
import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function gitBlobSha(content) {
  const body = Buffer.from(content)
  const header = Buffer.from(`blob ${body.length}\0`)
  return crypto.createHash('sha1').update(header).update(body).digest('hex')
}

test('TASK-002 introduces a dedicated stable splash component', () => {
  const splashPath = path.join(root, 'src/components/SplashAnimation.jsx')
  assert.ok(fs.existsSync(splashPath), 'SplashAnimation.jsx must exist')

  const splash = fs.readFileSync(splashPath, 'utf8')
  assert.match(splash, /useRef/)
  assert.match(splash, /onFinishRef/)
  assert.match(splash, /setTimeout/)
  assert.match(splash, /onClick/)
  assert.match(splash, /skip/i)
  assert.doesNotMatch(splash, /AI Triage/i)
  assert.doesNotMatch(splash, /Qwen|Groq|DashScope/i)
})

test('app shell renders splash and exposes intro replay through NavBar', () => {
  const app = read('src/App.jsx')
  assert.match(app, /SplashAnimation/)
  assert.match(app, /showSplash/)
  assert.match(app, /onReplayIntro/)
  assert.match(app, /setShowSplash\(true\)/)
})

test('navbar accepts replay callback without provider configuration UI', () => {
  const navbar = read('src/components/NavBar.jsx')
  assert.match(navbar, /onReplayIntro/)
  assert.match(navbar, />\s*Intro\s*</)
  assert.match(navbar, /Preview/)
  assert.doesNotMatch(navbar, /AiConfigModal|API Key|AI Engine|Qwen|Groq|DashScope/i)
})

test('scanner status is outside the circular viewfinder and webcam guidance is neutral', () => {
  const scan = read('src/pages/ScanPage.jsx')
  const statusIndex = scan.indexOf('scanner-status-banner')
  const viewfinderIndex = scan.indexOf('className={`viewfinder')

  assert.ok(statusIndex >= 0, 'scanner-status-banner must exist')
  assert.ok(viewfinderIndex >= 0, 'viewfinder must exist')
  assert.ok(statusIndex < viewfinderIndex, 'scanner status banner must render before the circular viewfinder')
  assert.match(scan, /Fingertip detected — hold steady/)
  assert.match(scan, /Cover camera or webcam lens with your fingertip/)
})

test('fingertip placement adapts thresholds to torch capability without changing signal analysis', () => {
  const scan = read('src/pages/ScanPage.jsx')
  assert.match(scan, /getCapabilities/)
  assert.match(scan, /hasTorch/)
  assert.match(scan, /redRatioG/)
  assert.match(scan, /redRatioB/)
  assert.match(scan, /hasTorch \? rgb\.r > 60 : rgb\.r > 20/)

  const rppg = read('src/lib/rppg.js')
  assert.equal(
    gitBlobSha(rppg),
    '1bc66d3b29c21e4a00b9fb119277996d7cc1c49f',
    'TASK-002 must not modify src/lib/rppg.js',
  )
})

test('CSS preserves responsive Preview status, status banner, splash and WebKit viewfinder clipping', () => {
  const css = read('src/index.css')
  assert.match(css, /\.scanner-status-banner/)
  assert.match(css, /\.splash-overlay/)
  assert.match(css, /-webkit-mask-image:\s*-webkit-radial-gradient\(white, black\)/)
  assert.match(css, /isolation:\s*isolate/)

  const mobileBlock = css.match(/@media \(max-width: 640px\) \{[\s\S]*?\n\}/)?.[0] || ''
  assert.match(mobileBlock, /\.navbar__inner[\s\S]*gap:\s*10px/)
  assert.match(mobileBlock, /\.navbar__status\s*\{[\s\S]*display:\s*flex/)
  assert.match(mobileBlock, /\.navbar__status\s*\{[\s\S]*font-size:\s*11px/)
})

test('TASK-002 does not restore mixed-commit provider or credential behavior', () => {
  const runtime = [
    'src/App.jsx',
    'src/components/NavBar.jsx',
    'src/components/SplashAnimation.jsx',
    'src/pages/ScanPage.jsx',
  ]
    .filter((file) => fs.existsSync(path.join(root, file)))
    .map(read)
    .join('\n')

  const forbidden = [
    /AiConfigModal/,
    /Custom API Key/i,
    /Test Live AI/i,
    /VITE_GROQ_API_KEY/,
    /VITE_DASHSCOPE_API_KEY/,
    /api\.groq\.com/i,
    /dashscope/i,
    /Qwen/i,
    /Groq/i,
  ]

  for (const pattern of forbidden) assert.doesNotMatch(runtime, pattern)
})
