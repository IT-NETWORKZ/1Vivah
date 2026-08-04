import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'

// Layouts
import MainLayout from '../layouts/MainLayout.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import SuperAdminLayout from '../layouts/SuperAdminLayout.jsx'

// Public pages
import Home from '../pages/public/Home.jsx'
import Login from '../pages/public/Login.jsx'
import NotFound from '../pages/public/NotFound.jsx'

// Admin pages
import AdminDashboard from '../pages/admin/Dashboard.jsx'
import AdminUsers from '../pages/admin/Users.jsx'
import AdminSettings from '../pages/admin/Settings.jsx'

// Superadmin pages
import SuperAdminDashboard from '../pages/superadmin/Dashboard.jsx'
import ManageAdmins from '../pages/superadmin/ManageAdmins.jsx'
import SystemSettings from '../pages/superadmin/SystemSettings.jsx'
import Register from '../pages/public/Register.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      {/* <Route element={<MainLayout />}> */}
        <Route path="/" element={<Home />} />
      {/* </Route> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin (protected) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
            <AdminLayout />
          </ProtectedRoute>
        }>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Superadmin (protected) */}
      <Route path="/superadmin" element={<ProtectedRoute allowedRoles={['superadmin']}>
        <SuperAdminLayout />
      </ProtectedRoute>}>

        <Route index element={<SuperAdminDashboard />} />
        <Route path="admins" element={<ManageAdmins />} />
        <Route path="settings" element={<SystemSettings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
