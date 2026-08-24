import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function collectFiles(relativeDir) {
  const absoluteDir = path.join(root, relativeDir)
  if (!fs.existsSync(absoluteDir)) return []

  const files = []
  for (const entry of fs.readdirSync(absoluteDir, { withFileTypes: true })) {
    const relativePath = path.join(relativeDir, entry.name)
    if (entry.isDirectory()) files.push(...collectFiles(relativePath))
    else files.push(relativePath)
  }
  return files
}

test('baseline runtime files exist', () => {
  const required = [
    'index.html',
    'package.json',
    'vite.config.js',
    'public/favicon.svg',
    'src/App.jsx',
    'src/main.jsx',
    'src/index.css',
    'src/components/NavBar.jsx',
    'src/components/PulseMark.jsx',
    'src/pages/ScanPage.jsx',
    'src/pages/DashboardPage.jsx',
    'src/pages/ReportPage.jsx',
    'src/lib/rppg.js',
    'src/lib/ai.js',
    'src/lib/storage.js',
  ]

  const missing = required.filter((file) => !fs.existsSync(path.join(root, file)))
  assert.deepEqual(missing, [], `missing baseline runtime files: ${missing.join(', ')}`)
})

test('package exposes dev build preview and baseline test scripts', () => {
  const packagePath = path.join(root, 'package.json')
  assert.ok(fs.existsSync(packagePath), 'package.json must exist')
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

  assert.equal(pkg.scripts?.dev, 'vite')
  assert.equal(pkg.scripts?.build, 'vite build')
  assert.equal(pkg.scripts?.preview, 'vite preview')
  assert.equal(pkg.scripts?.test, 'node --test tests/*.test.mjs')
})

test('application shell retains scan dashboard and report routes', () => {
  const appPath = path.join(root, 'src/App.jsx')
  assert.ok(fs.existsSync(appPath), 'src/App.jsx must exist')
  const app = fs.readFileSync(appPath, 'utf8')

  assert.match(app, /path="\/"/)
  assert.match(app, /path="\/dashboard"/)
  assert.match(app, /path="\/report"/)
})

test('browser runtime contains no provider-secret or false backend path', () => {
  const files = collectFiles('src')
  assert.ok(files.length > 0, 'src runtime must exist')
  const source = files.map(read).join('\n')

  const forbidden = [
    /VITE_GROQ_API_KEY/,
    /VITE_DASHSCOPE_API_KEY/,
    /api\.groq\.com/i,
    /dashscope[^'"\s]*/i,
    /gsk_[A-Za-z0-9_-]{10,}/,
    /Qwen AI/i,
    /Alibaba Cloud/i,
    /Offline-ready storage/i,
    /Syncing to Cloud/i,
    /All Synced/i,
    /Pending sync/i,
  ]

  for (const pattern of forbidden) {
    assert.doesNotMatch(source, pattern)
  }
})

test('baseline records are memory-only and do not use persistent browser storage', () => {
  const storagePath = path.join(root, 'src/lib/storage.js')
  assert.ok(fs.existsSync(storagePath), 'src/lib/storage.js must exist')
  const storage = fs.readFileSync(storagePath, 'utf8')

  assert.doesNotMatch(storage, /localStorage/)
  assert.doesNotMatch(storage, /indexedDB/i)
  assert.match(storage, /export function getStoredRecords/)
  assert.match(storage, /export function saveRecord/)
  assert.match(storage, /export function getRecordById/)
  assert.match(storage, /export function syncPendingRecords/)
})

test('AI module preserves baseline interface but is offline-only', () => {
  const aiPath = path.join(root, 'src/lib/ai.js')
  assert.ok(fs.existsSync(aiPath), 'src/lib/ai.js must exist')
  const ai = fs.readFileSync(aiPath, 'utf8')

  assert.match(ai, /export const SUPPORTED_LANGUAGES/)
  assert.match(ai, /export function generateOfflineExplanation/)
  assert.match(ai, /export async function fetchAIExplanation/)
  assert.doesNotMatch(ai, /\bfetch\s*\(/)
})

test('TASK-001 introduces no landing runtime files', () => {
  const runtimeFiles = [...collectFiles('src'), ...collectFiles('public')]
  const landingFiles = runtimeFiles.filter((file) => /landing/i.test(file))
  assert.deepEqual(landingFiles, [], `landing runtime files found: ${landingFiles.join(', ')}`)
})
