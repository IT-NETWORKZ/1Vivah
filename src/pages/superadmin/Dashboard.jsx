export default function SuperAdminDashboard() {
  return (
    <div>
      <h3 className="mb-4">Super Admin Dashboard</h3>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6 className="text-muted">Total Admins</h6>
            <h3>18</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6 className="text-muted">Total Users</h6>
            <h3>10,320</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6 className="text-muted">System Health</h6>
            <h3 className="text-success">Good</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
