import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import ScanPage from './pages/ScanPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ReportPage from './pages/ReportPage.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <NavBar />
      <Routes>
        <Route path="/" element={<ScanPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </div>
  )
}
