import { useAuthContext } from '../context/AuthContext.jsx'

// Convenience hook so components just do: const { user, login, logout } = useAuth()
export default function useAuth() {
  return useAuthContext()
}
