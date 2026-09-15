export const employees = [
  { id: 'EMP-001', name: 'Aulia Sari', role: 'People Operations', department: 'People', status: 'Aktif', joinedAt: '2024-03-11' },
  { id: 'EMP-002', name: 'Raka Pratama', role: 'Frontend Engineer', department: 'Engineering', status: 'Aktif', joinedAt: '2023-08-21' },
  { id: 'EMP-003', name: 'Alya Rahma', role: 'Product Manager', department: 'Product', status: 'Cuti', joinedAt: '2022-11-07' },
]

export const attendance = [
  { date: '2026-09-14', present: 42, late: 3, absent: 1 },
  { date: '2026-09-11', present: 44, late: 2, absent: 0 },
]

export const leaveRequests = [
  { id: 'LV-001', employee: 'Alya Rahma', type: 'Cuti tahunan', dates: '15-16 Sep 2026', status: 'Menunggu' },
  { id: 'LV-002', employee: 'Dimas Arya', type: 'Cuti sakit', dates: '12 Sep 2026', status: 'Disetujui' },
]

export const payrollSummary = {
  period: 'September 2026',
  employees: 46,
  gross: 'Rp 428.500.000',
  status: 'Draft',
}
