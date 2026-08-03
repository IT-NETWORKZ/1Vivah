import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer/Footer.jsx'

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 container py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
