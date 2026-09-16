import { useMemo, useState } from 'react'
import { RefreshCw, Search, Users } from 'lucide-react'
import PageHeading from '../../components/hr/PageHeading'
import MetricCard from '../../components/hr/MetricCard'
import { hrApi } from '../../api/hrApi'
import { useHrData } from '../../hook/useHrData'

function Employees({ flash }) {
  const { data: employees, loading, error, reload } = useHrData(hrApi.getEmployees, [])
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('Semua status')
  const filteredEmployees = useMemo(() => employees.filter((employee) => {
    const matchesQuery = `${employee.name} ${employee.role} ${employee.department}`.toLowerCase().includes(query.toLowerCase())
    return matchesQuery && (status === 'Semua status' || employee.status === status)
  }), [employees, query, status])

  const handleReload = async () => {
    await reload()
    flash('Data karyawan diperbarui')
  }

  return <div className="mx-auto max-w-360 px-5 py-7 md:px-10 md:py-9">
    <PageHeading title="Karyawan" description="Kelola data dan status seluruh anggota tim." action={<button type="button" onClick={handleReload} disabled={loading} className="flex w-fit items-center gap-2 rounded-xl bg-[#24313b] px-4 py-3 text-sm font-bold text-white disabled:cursor-wait disabled:opacity-60"><RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> Segarkan</button>} />
    <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <MetricCard label="Total karyawan" value={loading ? '...' : employees.length} detail="Data dari server HR" icon={Users} />
    </section>
    <section className="overflow-hidden rounded-2xl border border-[#e9e5dc] bg-[#fbfaf6]">
      <div className="flex flex-col gap-3 border-b border-[#eeeae1] px-5 py-4 md:flex-row md:items-center md:justify-between"><h3 className="font-['Manrope'] text-base font-extrabold">Daftar karyawan</h3><div className="flex flex-col gap-2 sm:flex-row"><div className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a7aba7]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama, peran, divisi" className="w-full rounded-xl border border-[#e6e2d9] bg-[#fffefa] py-2.5 pl-9 pr-3 text-xs outline-none sm:w-56" /></div><select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-xl border border-[#e6e2d9] bg-[#fffefa] px-3 py-2.5 text-xs font-semibold text-[#68716e] outline-none"><option>Semua status</option><option>Aktif</option><option>Cuti</option><option>Nonaktif</option></select></div></div>
      {loading && <p className="px-5 py-8 text-sm text-[#929793]">Mengambil data karyawan...</p>}
      {error && <div className="flex flex-col gap-3 px-5 py-8 text-sm"><p className="font-semibold text-[#c95840]">Data belum dapat dimuat: {error.message}</p><button type="button" onClick={reload} className="w-fit rounded-xl border border-[#e6e2d9] px-3 py-2 text-xs font-bold">Coba lagi</button></div>}
      {!loading && !error && <div className="divide-y divide-[#eeeae1]">{filteredEmployees.length === 0 ? <p className="px-5 py-8 text-sm text-[#929793]">Tidak ada karyawan yang cocok dengan filter.</p> : filteredEmployees.map((employee) => <div key={employee.id} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold">{employee.name}</p><p className="mt-1 text-xs text-[#929793]">{employee.role} · {employee.department} · Bergabung {employee.joinedAt}</p></div><span className={`w-fit rounded-full px-2.5 py-1 text-xs font-bold ${employee.status === 'Aktif' ? 'bg-[#e8eee8] text-[#42634b]' : 'bg-[#fff0eb] text-[#c95840]'}`}>{employee.status}</span></div>)}</div>}
    </section>
  </div>
}

export default Employees
