import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function NotFound({ copy }) {
  return (
    <section className="mx-auto grid min-h-[70svh] max-w-2xl place-items-center px-4 text-center">
      <div className="glass-panel rounded-2xl p-8">
        <h1 className="text-3xl font-black text-slate-950">{copy.title}</h1>
        <p className="mt-3 leading-7 text-slate-600">{copy.text}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          {copy.action}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

export default NotFound
