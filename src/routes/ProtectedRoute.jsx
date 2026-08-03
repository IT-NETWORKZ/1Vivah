import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

// Wrap any route that needs auth + specific role(s)
// usage: <ProtectedRoute allowedRoles={['admin']}><AdminLayout/></ProtectedRoute>
export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth()

  if (loading) return <div className="p-5 text-center">Loading...</div>
  if (!user) return <Navigate to="/login" replace />
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />
  }
  return children
}
