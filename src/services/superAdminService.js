import api from './api'

export const superAdminService = {
  getAdmins: () => api.get('/superadmin/admins'),
  createAdmin: (data) => api.post('/superadmin/admins', data),
  getSystemSettings: () => api.get('/superadmin/settings'),
}
