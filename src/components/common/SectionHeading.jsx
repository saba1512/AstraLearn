function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-5 max-w-3xl">
      <p className="text-sm font-black uppercase tracking-wide text-blue-700">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">{title}</h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
    </div>
  )
}

export default SectionHeading
