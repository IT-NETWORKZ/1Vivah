import api from './api'

export const adminService = {
  getUsers: () => api.get('/admin/users'),
  getDashboardStats: () => api.get('/admin/dashboard'),
}
