import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({ children }) {
  const [activeNav, setActiveNav] = useState('Ringkasan')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')

  const flash = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2600)
  }

  const navigate = (label) => {
    setActiveNav(label)
    setMobileMenuOpen(false)
  }

  return <div className="min-h-screen bg-[#f7f5ef] text-[#24313b]">
    <Sidebar activeNav={activeNav} onNavigate={navigate} />
    {mobileMenuOpen && <>
    <Sidebar mobile activeNav={activeNav} onNavigate={navigate} onClose={() => setMobileMenuOpen(false)} /><button type="button" className="fixed inset-0 z-40 bg-[#24313b]/30 lg:hidden" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation overlay" /></>}
    <main className="lg:pl-61">
      <Navbar onMenu={() => setMobileMenuOpen(true)} onNotify={() => flash('Tidak ada notifikasi baru')} onLogout={() => { window.location.href = '/' }} />
        {
        children({ activeNav, onNavigate: navigate, flash })}
    </main>{notice && <div className="fixed bottom-5 left-1/2 z-60 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-[#24313b] px-4 py-3 text-xs font-semibold text-white shadow-xl">{notice}</div>}</div>
}

export default Layout