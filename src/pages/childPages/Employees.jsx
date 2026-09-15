import { Users } from 'lucide-react'
import PageHeading from '../../components/hr/PageHeading'
import MetricCard from '../../components/hr/MetricCard'
import { employees } from '../../data/hrDummy'

function Employees() {
  return <div className="mx-auto max-w-360 px-5 py-7 md:px-10 md:py-9">
    <PageHeading title="Karyawan" description="Kelola data dan status seluruh anggota tim." />
    <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <MetricCard label="Total karyawan" value={employees.length} detail="Data aktif di ruang kerja" icon={Users} />
    </section>
    <section className="overflow-hidden rounded-2xl border border-[#e9e5dc] bg-[#fbfaf6]">
      <div className="border-b border-[#eeeae1] px-5 py-4"><h3 className="font-['Manrope'] text-base font-extrabold">Daftar karyawan</h3></div>
      <div className="divide-y divide-[#eeeae1]">{employees.map((employee) => <div key={employee.id} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold">{employee.name}</p><p className="mt-1 text-xs text-[#929793]">{employee.role} · {employee.department}</p></div><span className="w-fit rounded-full bg-[#e8eee8] px-2.5 py-1 text-xs font-bold text-[#42634b]">{employee.status}</span></div>)}</div>
    </section>
  </div>
}

export default Employees
