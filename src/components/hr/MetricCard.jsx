function MetricCard({ label, value, detail, icon: Icon }) {
  return <article className="rounded-2xl border border-[#e9e5dc] bg-[#fbfaf6] p-5">
    <div className="flex items-start justify-between gap-3">
      <p className="text-xs font-bold text-[#8c928f]">{label}</p>
      {Icon && <div className="rounded-lg bg-[#e8eee8] p-2 text-[#52705e]"><Icon size={16} /></div>}
    </div>
    <p className="mt-4 font-['Manrope'] text-3xl font-extrabold">{value}</p>
    {detail && <p className="mt-1 text-xs font-semibold text-[#5f9270]">{detail}</p>}
  </article>
}

export default MetricCard
