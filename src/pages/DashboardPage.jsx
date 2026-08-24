import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getStoredRecords } from '../lib/storage'

const STATUS_META = {
  flagged: { label: 'Needs follow-up', className: 'pill--flag' },
  ok: { label: 'No baseline flag', className: 'pill--ok' },
  pending: { label: 'Review pending', className: 'pill--pending' },
}

function formatTimeAgo(isoString) {
  if (!isoString) return 'Just now'
  const diffMs = Date.now() - new Date(isoString).getTime()
  const mins = Math.floor(diffMs / (1000 * 60))
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins} min ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs} hr ago`
  return `${Math.floor(hrs / 24)} days ago`
}

function displayValue(value, unit = '') {
  return value == null ? '—' : `${value}${unit}`
}

export default function DashboardPage() {
  const [records, setRecords] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const navigate = useNavigate()

  useEffect(() => {
    setRecords(getStoredRecords())
  }, [])

  const filtered = records.filter((record) => {
    const name = record.name || ''
    const patientId = record.patientId || record.id || ''
    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patientId.toLowerCase().includes(searchTerm.toLowerCase())

    return filterStatus === 'all' ? matchesSearch : matchesSearch && record.status === filterStatus
  })

  const summary = {
    total: records.length,
    flagged: records.filter((record) => record.status === 'flagged').length,
    pending: records.filter((record) => record.status === 'pending').length,
  }

  return (
    <main className="page dashboard-page">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Community health worker preview</p>
          <h1 className="page-title">Screenings in this browser session.</h1>
          <p className="page-subtitle">
            Review the baseline demo records and scans created during this session. Durable clinical storage is not active in TASK-001.
          </p>
        </div>

        <div className="dashboard-actions-top">
          <span className="pill pill--pending preview-storage-badge">
            <span className="pill-dot" /> Session memory only
          </span>
          <Link to="/" className="btn btn--primary">+ New Scan</Link>
        </div>
      </div>

      <div className="stat-row">
        <div className="card stat-card" onClick={() => setFilterStatus('all')} style={{ cursor: 'pointer' }}>
          <p className="stat-card__value mono">{summary.total}</p>
          <p className="stat-card__label">Screenings shown</p>
        </div>
        <div className="card stat-card stat-card--flag" onClick={() => setFilterStatus('flagged')} style={{ cursor: 'pointer' }}>
          <p className="stat-card__value mono">{summary.flagged}</p>
          <p className="stat-card__label">Need follow-up</p>
        </div>
        <div className="card stat-card stat-card--pending" onClick={() => setFilterStatus('pending')} style={{ cursor: 'pointer' }}>
          <p className="stat-card__value mono">{summary.pending}</p>
          <p className="stat-card__label">Review pending</p>
        </div>
      </div>

      <div className="table-filter-bar">
        <input
          type="text"
          placeholder="Search by patient name or ID..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="search-input"
        />

        <div className="filter-buttons">
          {['all', 'flagged', 'pending', 'ok'].map((status) => (
            <button
              key={status}
              className={`filter-btn ${filterStatus === status ? 'active' : ''}`}
              onClick={() => setFilterStatus(status)}
            >
              {status === 'all'
                ? 'All Patients'
                : status === 'flagged'
                  ? 'Needs Follow-up'
                  : status === 'pending'
                    ? 'Review Pending'
                    : 'No Baseline Flag'}
            </button>
          ))}
        </div>
      </div>

      <div className="card patient-table-card">
        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Heart rate</th>
              <th>Breathing</th>
              <th>Stress proxy</th>
              <th>Status</th>
              <th>Last checked</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="7" className="empty-row">No matching screening records found.</td></tr>
            ) : (
              filtered.map((record) => {
                const meta = STATUS_META[record.status] || STATUS_META.ok
                return (
                  <tr
                    key={record.id}
                    className={record.status === 'flagged' ? 'is-flagged' : undefined}
                    onClick={() => navigate(`/report?id=${record.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>
                      <p className="patient-table__name">{record.name}</p>
                      <p className="patient-table__id mono">{record.patientId || record.id}</p>
                    </td>
                    <td className="mono">{displayValue(record.hr, ' bpm')}</td>
                    <td className="mono">{displayValue(record.br, ' br/min')}</td>
                    <td>{record.stressLabel || 'Unavailable'}</td>
                    <td><span className={`pill ${meta.className}`}><span className="pill-dot" />{meta.label}</span></td>
                    <td className="patient-table__time">{formatTimeAgo(record.timestamp)}</td>
                    <td>
                      <Link to={`/report?id=${record.id}`} className="table-report-link" onClick={(event) => event.stopPropagation()}>
                        View Report →
                      </Link>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
