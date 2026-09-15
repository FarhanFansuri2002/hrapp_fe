function PageHeading({ eyebrow = 'HR', title, description, action }) {
  return <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a1a19d]">{eyebrow}</p>
      <h2 className="font-['Manrope'] text-3xl font-extrabold tracking-[-0.04em] md:text-[38px]">{title}</h2>
      {description && <p className="mt-2 max-w-lg text-sm text-[#858b88]">{description}</p>}
    </div>
    {action}
  </div>
}

export default PageHeading
