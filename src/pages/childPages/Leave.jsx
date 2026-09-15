import PageHeading from '../../components/hr/PageHeading'
import { leaveRequests } from '../../data/hrDummy'

function Leave() {
  return <div className="mx-auto max-w-360 px-5 py-7 md:px-10 md:py-9">
    <PageHeading title="Cuti" description="Tinjau dan proses pengajuan cuti karyawan." />
    <section className="overflow-hidden rounded-2xl border border-[#e9e5dc] bg-[#fbfaf6]"><div className="border-b border-[#eeeae1] px-5 py-4"><h3 className="font-['Manrope'] text-base font-extrabold">Pengajuan terbaru</h3></div><div className="divide-y divide-[#eeeae1]">{leaveRequests.map((request) => <div key={request.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-bold">{request.employee}</p><p className="mt-1 text-xs text-[#929793]">{request.type} · {request.dates}</p></div><span className={`w-fit rounded-full px-2.5 py-1 text-xs font-bold ${request.status === 'Disetujui' ? 'bg-[#e8eee8] text-[#42634b]' : 'bg-[#fff0eb] text-[#c95840]'}`}>{request.status}</span></div>)}</div></section>
  </div>
}

export default Leave
