import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar/Sidebar.jsx'
import Navbar from '../components/common/Navbar/Navbar.jsx'

const links = [
  { label: 'Dashboard', to: '/admin' },
  { label: 'Users', to: '/admin/users' },
  { label: 'Settings', to: '/admin/settings' },
]

export default function AdminLayout() {
  return (
    <div className="app-shell">
      <Sidebar links={links} brand="Admin Panel" />
      <div className="app-main">
        <Navbar title="Admin Dashboard" />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
