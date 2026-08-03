export default function AdminDashboard() {
  return (
    <div>
      <h3 className="mb-4">Admin Dashboard</h3>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6 className="text-muted">Total Users</h6>
            <h3>1,204</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6 className="text-muted">Active Sessions</h6>
            <h3>87</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6 className="text-muted">Reports</h6>
            <h3>12</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
