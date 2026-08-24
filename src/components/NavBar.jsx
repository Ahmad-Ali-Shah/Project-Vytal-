import { NavLink } from 'react-router-dom'
import PulseMark from './PulseMark.jsx'

const links = [
  { to: '/', label: 'Scan', end: true },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/report', label: 'Report' },
]

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" end>
          <PulseMark size={26} />
          VYTAL
        </NavLink>

        <nav className="navbar__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => 'navlink' + (isActive ? ' active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__status" title="TASK-001 keeps records in session memory only">
          <span className="pill-dot" />
          Preview
        </div>
      </div>
    </header>
  )
}
