import { NavLink } from 'react-router-dom'

// links = [{ label, to }]
export default function Sidebar({ links = [], brand = 'Panel' }) {
  return (
    <aside className="app-sidebar d-flex flex-column p-3">
      <h5 className="text-white mb-4">{brand}</h5>
      <nav className="nav flex-column gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `nav-link rounded px-3 py-2 ${isActive ? 'active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
