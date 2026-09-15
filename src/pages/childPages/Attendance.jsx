import { CalendarCheck } from 'lucide-react'
import PageHeading from '../../components/hr/PageHeading'
import MetricCard from '../../components/hr/MetricCard'
import { attendance } from '../../data/hrDummy'

function Attendance() {
  const latest = attendance[0]

  return <div className="mx-auto max-w-360 px-5 py-7 md:px-10 md:py-9">
    <PageHeading title="Kehadiran" description="Pantau kehadiran dan keterlambatan tim setiap hari." />
    <section className="mb-6 grid gap-4 sm:grid-cols-3">
      <MetricCard label="Hadir hari ini" value={latest.present} icon={CalendarCheck} />
      <MetricCard label="Terlambat" value={latest.late} detail="Perlu ditinjau" />
      <MetricCard label="Tidak hadir" value={latest.absent} />
    </section>
    <section className="rounded-2xl border border-[#e9e5dc] bg-[#fbfaf6] p-5"><h3 className="font-['Manrope'] text-base font-extrabold">Riwayat ringkas</h3><div className="mt-4 space-y-2">{attendance.map((item) => <div key={item.date} className="flex justify-between border-t border-[#eeeae1] py-3 text-sm"><span className="font-semibold">{item.date}</span><span className="text-[#68746e]">{item.present} hadir · {item.late} terlambat</span></div>)}</div></section>
  </div>
}

export default Attendance
