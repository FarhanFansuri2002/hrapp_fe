import { attendance, employees, leaveRequests, payrollSummary } from '../data/hrDummy'

const resolve = (value) => Promise.resolve(value)

export const hrApi = {
  getEmployees: () => resolve(employees),
  getAttendance: () => resolve(attendance),
  getLeaveRequests: () => resolve(leaveRequests),
  getPayrollSummary: () => resolve(payrollSummary),
}
