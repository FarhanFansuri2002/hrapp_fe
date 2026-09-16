import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CalendarCheck, CheckCircle2, Clock3, LogIn, LogOut, ShieldCheck, UserRound } from 'lucide-react'
import { hrApi } from '../api/hrApi'
import { useHrData } from '../hook/useHrData'

const STORAGE_KEY = 'kinship-attendance-session'

function getTodayKey() {
  return new Date().toISOString().slice(0, 10)
}

function getClockLabel(date) {
  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date)
}

function AttendancePortal() {
  const { data: employees, loading: employeesLoading } = useHrData(hrApi.getEmployees, [])
  const [employeeId, setEmployeeId] = useState('')
  const [employeeName, setEmployeeName] = useState('')
  const [session, setSession] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
      return stored?.date === getTodayKey() ? stored : null
    } catch {
      return null
    }
  })
  const [now, setNow] = useState(() => new Date())
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const selectedEmployee = useMemo(() => employees.find((employee) => employee.id === employeeId), [employees, employeeId])
  const activeEmployeeName = session?.employeeName || selectedEmployee?.name || employeeName
  const isSignedIn = Boolean(session?.checkIn && !session?.checkOut)
  const isComplete = Boolean(session?.checkIn && session?.checkOut)

  const updateSession = (nextSession) => {
    setSession(nextSession)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession))
  }

  const handleIdentify = (event) => {
    event.preventDefault()
    setError('')
    setMessage('')
    const normalizedName = employeeName.trim().toLowerCase()
    const employee = employees.find((item) => item.id === employeeId || item.name.toLowerCase() === normalizedName)
    if (!employee) {
      setError('ID atau nama karyawan tidak ditemukan.')
      return
    }
    setEmployeeId(employee.id)
    setEmployeeName(employee.name)
    setMessage(`Halo, ${employee.name}. Identitas berhasil diverifikasi.`)
  }

  const handleCheckIn = () => {
    const employee = selectedEmployee || employees.find((item) => item.name === activeEmployeeName)
    if (!employee) return
    updateSession({ date: getTodayKey(), employeeId: employee.id, employeeName: employee.name, checkIn: getClockLabel(new Date()), checkOut: null })
    setMessage('Absensi masuk berhasil dicatat.')
    setError('')
  }

  const handleCheckOut = () => {
    if (!session) return
    updateSession({ ...session, checkOut: getClockLabel(new Date()) })
    setMessage('Absensi pulang berhasil dicatat. Sampai jumpa!')
  }

  const handleReset = () => {
    setSession(null)
    setEmployeeId('')
    setEmployeeName('')
    setMessage('')
    setError('')
    localStorage.removeItem(STORAGE_KEY)
  }

  return <main className="min-h-screen bg-[#e9eee8] px-5 py-6 text-[#24313b] md:px-10 md:py-10">
    <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-280 flex-col justify-between gap-10">
      <header className="flex items-center justify-between"><a href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#24313b] text-sm font-extrabold text-white">K</span><span><strong className="block font-['Manrope'] text-base tracking-tight">kinship</strong><small className="block text-[10px] uppercase tracking-[0.2em] text-[#7b887e]">attendance</small></span></a><a href="/" className="flex items-center gap-2 text-xs font-bold text-[#68766d] transition hover:text-[#24313b]">Kembali ke halaman login <ArrowRight size={14} /></a></header>
      <section className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-md"><p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#66806d]"><ShieldCheck size={15} /> Ruang absensi karyawan</p><h1 className="font-['Manrope'] text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] md:text-6xl">Mulai hari dengan <span className="text-[#6f9278]">tepat waktu.</span></h1><p className="mt-5 max-w-sm text-sm leading-6 text-[#718078]">Verifikasi identitasmu untuk mencatat kehadiran dengan cepat dan aman.</p><div className="mt-8 flex items-center gap-3 text-[#52705e]"><Clock3 size={18} /><span className="font-['Manrope'] text-2xl font-extrabold tabular-nums">{getClockLabel(now)}</span><span className="text-xs text-[#849087]">WIB</span></div></div>
        <div className="rounded-4xl border border-white/70 bg-[#fbfaf6] p-6 shadow-[0_24px_70px_rgba(56,76,61,0.12)] md:p-9"><div className="mb-8 flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a1a19d]">Absensi hari ini</p><h2 className="mt-2 font-['Manrope'] text-2xl font-extrabold">{activeEmployeeName ? `Halo, ${activeEmployeeName.split(' ')[0]}` : 'Selamat datang'}</h2></div><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8eee8] text-[#52705e]"><CalendarCheck size={20} /></div></div>
          {!session && <form onSubmit={handleIdentify} className="space-y-4"><label className="block"><span className="mb-2 block text-xs font-bold text-[#68746e]">ID karyawan</span><div className="relative"><UserRound size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a4ada5]" /><input value={employeeId} onChange={(event) => setEmployeeId(event.target.value.toUpperCase())} placeholder={employeesLoading ? 'Memuat data...' : 'Contoh: EMP-001'} disabled={employeesLoading} className="w-full rounded-xl border border-[#e1e5de] bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#71917a]" /></div></label><div className="flex items-center gap-3 text-[11px] font-semibold text-[#a0a8a1]"><span className="h-px flex-1 bg-[#e6e9e3]" />atau<span className="h-px flex-1 bg-[#e6e9e3]" /></div><label className="block"><span className="mb-2 block text-xs font-bold text-[#68746e]">Nama lengkap</span><input value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} placeholder="Nama sesuai data karyawan" className="w-full rounded-xl border border-[#e1e5de] bg-white p-3 text-sm outline-none transition focus:border-[#71917a]" /></label><button type="submit" disabled={employeesLoading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#24313b] py-3.5 text-sm font-extrabold text-white transition hover:bg-[#344753] disabled:cursor-wait disabled:opacity-60">Verifikasi identitas <ArrowRight size={16} /></button></form>}
          {session && <div><div className="rounded-2xl bg-[#eef3ee] p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold text-[#66806d]">{isComplete ? 'Absensi selesai' : isSignedIn ? 'Sedang bekerja' : 'Siap absensi'}</span><span className="h-2.5 w-2.5 rounded-full bg-[#72a27b]" /></div><p className="mt-3 font-['Manrope'] text-lg font-extrabold">{session.employeeName}</p><p className="mt-1 text-xs text-[#7c8a80]">{session.employeeId} · {new Date().toLocaleDateString('id-ID', { dateStyle: 'long' })}</p></div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl border border-[#e6e9e3] p-4"><p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca69e]">Masuk</p><p className="mt-2 text-lg font-extrabold">{session.checkIn || '--:--:--'}</p></div><div className="rounded-xl border border-[#e6e9e3] p-4"><p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca69e]">Pulang</p><p className="mt-2 text-lg font-extrabold">{session.checkOut || '--:--:--'}</p></div></div>{!isComplete && <button type="button" onClick={isSignedIn ? handleCheckOut : handleCheckIn} className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-extrabold ${isSignedIn ? 'bg-[#eb765c] text-white' : 'bg-[#52705e] text-white'}`}>{isSignedIn ? <LogOut size={17} /> : <LogIn size={17} />}{isSignedIn ? 'Catat absensi pulang' : 'Catat absensi masuk'}</button>}<button type="button" onClick={handleReset} className="mt-3 w-full py-2 text-xs font-bold text-[#87928a] hover:text-[#24313b]">Ganti karyawan</button></div>}
          {error && <p className="mt-4 rounded-xl bg-[#fff0eb] px-3 py-2.5 text-xs font-semibold text-[#c95840]">{error}</p>}{message && <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#52705e]"><CheckCircle2 size={15} /> {message}</p>}
        </div>
      </section>
      <footer className="flex flex-col gap-2 text-[11px] text-[#87938a] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Kinship People Ops</span><span>Data absensi tersimpan untuk perangkat ini</span></footer>
    </div>
  </main>
}

export default AttendancePortal
