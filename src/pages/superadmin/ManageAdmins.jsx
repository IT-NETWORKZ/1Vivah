export default function ManageAdmins() {
  return (
    <div>
      <h3 className="mb-4">Manage Admins</h3>
      <table className="table table-striped bg-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
