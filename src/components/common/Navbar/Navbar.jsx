import useAuth from '../../../hooks/useAuth'

export default function Navbar({ title = 'Dashboard' }) {
  const { user, logout } = useAuth()
  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4">
      <span className="navbar-brand mb-0 h5">{title}</span>
      <div className="d-flex align-items-center gap-3">
        <span className="text-muted small">{user?.name}</span>
        <button className="btn btn-sm btn-outline-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
