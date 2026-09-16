import { attendance, leaveRequests, payrollSummary } from '../data/hrDummy'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

async function request(path) {
  const response = await fetch(`${API_BASE_URL}${path}`)
  if (!response.ok) {
    throw new Error(`Permintaan gagal (${response.status})`)
  }
  return response.json()
}

export const hrApi = {
  getEmployees: () => request('/api/v1/employees'),
  getAttendance: () => Promise.resolve(attendance),
  getLeaveRequests: () => Promise.resolve(leaveRequests),
  getPayrollSummary: () => Promise.resolve(payrollSummary),
}
