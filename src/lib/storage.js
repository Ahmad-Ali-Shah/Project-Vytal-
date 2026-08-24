const INITIAL_DEMO_PATIENTS = [
  {
    id: 'P-0231',
    patientId: 'P-0231',
    name: 'Amina K.',
    hr: 118,
    br: 21,
    stress: 78,
    stressLabel: 'High',
    status: 'flagged',
    explanation:
      'This baseline screening found an elevated resting pulse. Repeat the reading at rest and seek clinical review when appropriate; this is not a diagnosis.',
    language: 'en',
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
  },
  {
    id: 'P-0230',
    patientId: 'P-0230',
    name: 'Rahim D.',
    hr: 76,
    br: 16,
    stress: 22,
    stressLabel: 'Normal',
    status: 'ok',
    explanation:
      'This baseline screening found the displayed indicators within its simple resting-range rules. This is a screening result, not a medical diagnosis.',
    language: 'en',
    timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
  },
  {
    id: 'P-0229',
    patientId: 'P-0229',
    name: 'Fatima S.',
    hr: 91,
    br: 18,
    stress: 58,
    stressLabel: 'Slightly high',
    status: 'pending',
    explanation:
      'This preview reading is marked for review. Rest, repeat the screening if needed, and use clinical judgment rather than treating the proxy as a diagnosis.',
    language: 'en',
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
  },
]

let records = INITIAL_DEMO_PATIENTS.map((record) => ({ ...record }))

function cloneRecords(items) {
  return items.map((record) => ({ ...record }))
}

export function getStoredRecords() {
  return cloneRecords(records)
}

export function saveRecord(record) {
  records = [{ ...record }, ...records.filter((existing) => existing.id !== record.id)]
  return cloneRecords(records)
}

export function getRecordById(id) {
  const record = records.find((item) => item.id === id || item.patientId === id) || records[0]
  return record ? { ...record } : null
}

export function syncPendingRecords() {
  // Compatibility no-op for the historical baseline interface.
  // TASK-001 has no durable backend; secure persistence is introduced later.
  return cloneRecords(records)
}
