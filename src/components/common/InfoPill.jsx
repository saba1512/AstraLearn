function InfoPill({ icon, label }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-black text-slate-700">
      <span className="shrink-0 text-blue-700">{icon}</span>
      <span className="min-w-0 leading-5">{label}</span>
    </div>
  )
}

export default InfoPill
