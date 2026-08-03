import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar/Sidebar.jsx'
import Navbar from '../components/common/Navbar/Navbar.jsx'

const links = [
  { label: 'Dashboard', to: '/superadmin' },
  { label: 'Manage Admins', to: '/superadmin/admins' },
  { label: 'System Settings', to: '/superadmin/settings' },
]

export default function SuperAdminLayout() {
  return (
    <div className="app-shell">
      <Sidebar links={links} brand="Super Admin" />
      <div className="app-main">
        <Navbar title="Super Admin Dashboard" />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
