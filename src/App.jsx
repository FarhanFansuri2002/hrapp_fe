import Layout from './pages/layout/Layout.jsx'
import Dashboard from './pages/childPages/Dashboard.jsx'
import Attendance from './pages/childPages/Attendance.jsx'
import Employees from './pages/childPages/Employees.jsx'
import Leave from './pages/childPages/Leave.jsx'
import Payroll from './pages/childPages/Payroll.jsx'
import AttendancePortal from './pages/AttendancePortal.jsx'
import Welcome from './pages/Welcome.jsx'

const pages = { Ringkasan: Dashboard, Karyawan: Employees, Kehadiran: Attendance, Cuti: Leave, Penggajian: Payroll, Rekrutmen: Dashboard }

function App() {
  if (window.location.pathname === '/absensi') {
    return <AttendancePortal />
  }

  if (window.location.pathname === '/') {
    return <Welcome />
  }

  return <Layout>{(layoutProps) => {
    const Page = pages[layoutProps.activeNav] || Dashboard
    return <Page {...layoutProps} />
  }}</Layout>
}

export default App