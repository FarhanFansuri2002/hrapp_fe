import { BriefcaseBusiness, CalendarCheck, CalendarDays, FileText, LayoutDashboard, Settings, Users, WalletCards } from 'lucide-react'

export const hrNavigation = [
  { label: 'Ringkasan', icon: LayoutDashboard, path: '/' },
  { label: 'Karyawan', icon: Users, path: '/employees' },
  { label: 'Kehadiran', icon: CalendarCheck, path: '/attendance' },
  { label: 'Cuti', icon: CalendarDays, path: '/leave' },
  { label: 'Penggajian', icon: WalletCards, path: '/payroll' },
  { label: 'Rekrutmen', icon: BriefcaseBusiness, path: '/recruitment' },
  { label: 'Laporan', icon: FileText, path: '/reports' },
  { label: 'Pengaturan', icon: Settings, path: '/settings' },
]
