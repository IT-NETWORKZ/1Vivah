export default function AdminUsers() {
  return (
    <div>
      <h3 className="mb-4">Manage Users</h3>
      <table className="table table-striped bg-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td><span className="badge bg-success">Active</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
