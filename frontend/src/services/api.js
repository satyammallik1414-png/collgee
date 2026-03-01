import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth API
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data)
}

// Applications API
export const applicationsAPI = {
  submit: (data) => api.post('/applications', data),
  getAll: () => api.get('/applications'),
  getById: (id) => api.get(`/applications/${id}`),
  updateStatus: (id, status) => api.patch(`/applications/${id}/status`, { status })
}

// Courses API
export const coursesAPI = {
  getAll: (params) => api.get('/courses', { params }),
  getById: (id) => api.get(`/courses/${id}`),
  create: (data) => api.post('/courses', data),
  update: (id, data) => api.put(`/courses/${id}`, data),
  delete: (id) => api.delete(`/courses/${id}`)
}

// Events API
export const eventsAPI = {
  getAll: (params) => api.get('/events', { params }),
  getById: (id) => api.get(`/events/${id}`),
  create: (data) => api.post('/events', data),
  register: (id, userId) => api.post(`/events/${id}/register`, { userId })
}

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: () => api.get('/contact')
}

export default api
