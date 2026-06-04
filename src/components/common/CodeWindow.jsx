function CodeWindow({ code, title = 'example' }) {
  return (
    <article className="code-window overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs font-bold text-slate-400">{title}</span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7">
        <code>{code}</code>
      </pre>
    </article>
  )
}

export default CodeWindow
