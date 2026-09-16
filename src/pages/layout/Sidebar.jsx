import { BriefcaseBusiness, CalendarCheck, CalendarDays, ChevronRight, FileText, LayoutDashboard, Settings, Sparkles, Users, WalletCards } from 'lucide-react'

const workspaceItems = [['Ringkasan', LayoutDashboard], ['Karyawan', Users], ['Kehadiran', CalendarCheck], ['Cuti', CalendarDays], ['Penggajian', WalletCards], ['Rekrutmen', BriefcaseBusiness]]
const manageItems = [['Laporan', FileText], ['Pengaturan', Settings]]

function NavItem({ item, activeNav, onNavigate }) {
  const [label, Icon] = item
  return <button type="button" onClick={() => onNavigate(label)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${activeNav === label ? 'bg-[#e9eee9] text-[#24313b]' : 'text-[#7d8585] hover:bg-[#f0efe9]'}`}><Icon size={17} strokeWidth={1.8} />{label}{label === 'Kandidat' && <span className="ml-auto rounded-full bg-[#fff0eb] px-2 py-0.5 text-[10px] font-bold text-[#c95840]">24</span>}</button>
}

function Sidebar({ activeNav, onNavigate, mobile = false, onClose }) {
  return <aside className={`${mobile ? 'fixed inset-y-0 left-0 z-50 flex w-72 shadow-2xl' : 'fixed inset-y-0 left-0 z-20 hidden w-61 lg:flex'} flex-col border-r border-[#e7e3da] bg-[#fbfaf6] px-5 py-6`}>
    <div className="mb-11 flex items-center justify-between px-2"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#24313b] text-sm font-extrabold text-white">K</div><div><p className="font-['Manrope'] text-[15px] font-extrabold tracking-tight">kinship</p><p className="text-[10px] uppercase tracking-[0.18em] text-[#9a9c9c]">people ops</p></div></div>{mobile && <button type="button" onClick={onClose} className="text-xl text-[#7d8585]" aria-label="Close navigation">&times;</button>}</div>
    <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a1a19d]">Ruang kerja</p><nav className="space-y-1">{workspaceItems.map((item) => <NavItem key={item[0]} item={item} activeNav={activeNav} onNavigate={onNavigate} />)}</nav>
    <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a1a19d]">Kelola</p><nav className="space-y-1">{manageItems.map((item) => <NavItem key={item[0]} item={item} activeNav={activeNav} onNavigate={onNavigate} />)}</nav>
    <div className="mt-auto rounded-2xl bg-[#e8eee8] p-4"><div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#d0dfd2] text-[#42634b]"><Sparkles size={16} /></div><p className="text-xs font-bold">Kesehatan rekrutmen</p><p className="mt-1 text-[11px] leading-4 text-[#708074]">Waktu perekrutanmu 18% lebih cepat bulan ini.</p><button type="button" className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#42634b]">Lihat laporan <ChevronRight size={13} /></button></div>
  </aside>
}

export default Sidebar