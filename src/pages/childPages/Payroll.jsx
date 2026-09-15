import { WalletCards } from 'lucide-react'
import PageHeading from '../../components/hr/PageHeading'
import MetricCard from '../../components/hr/MetricCard'
import { payrollSummary } from '../../data/hrDummy'

function Payroll() {
  return <div className="mx-auto max-w-360 px-5 py-7 md:px-10 md:py-9">
    <PageHeading title="Penggajian" description="Siapkan ringkasan payroll dan status pembayaran bulanan." />
    <section className="grid gap-4 sm:grid-cols-3"><MetricCard label="Periode" value={payrollSummary.period} icon={WalletCards} /><MetricCard label="Karyawan" value={payrollSummary.employees} /><MetricCard label="Status" value={payrollSummary.status} detail="Menunggu finalisasi" /></section>
    <div className="mt-6 rounded-2xl border border-[#e9e5dc] bg-[#fbfaf6] p-5"><p className="text-xs font-bold text-[#8c928f]">Total bruto</p><p className="mt-2 font-['Manrope'] text-3xl font-extrabold">{payrollSummary.gross}</p></div>
  </div>
}

export default Payroll
