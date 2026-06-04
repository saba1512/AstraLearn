import { ExternalLink, LayoutDashboard, PlayCircle, Wrench } from 'lucide-react'
import { getFrontendHub } from '../../data/frontendContent'

function LinkCard({ item, label }) {
  const [name, text, link] = item

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
      aria-label={`${label}: ${name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-base font-black text-slate-950">{name}</h4>
        <ExternalLink size={16} className="text-slate-400" />
      </div>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{text}</p>
    </a>
  )
}

function FrontendHub({ language }) {
  const copy = getFrontendHub(language)

  return (
    <section data-gsap="course-block" className="mt-6 glass-panel rounded-2xl p-5 md:p-7">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wide text-blue-700">{copy.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">{copy.title}</h2>
        <p className="mt-3 text-base font-semibold leading-8 text-slate-600">{copy.text}</p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <Wrench size={20} className="text-orange-600" />
            {copy.toolsTitle}
          </h3>
          <div className="mt-4 grid gap-3">{copy.tools.map((item) => <LinkCard key={item[0]} item={item} label={copy.open} />)}</div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <LayoutDashboard size={20} className="text-blue-700" />
            {copy.sitesTitle}
          </h3>
          <div className="mt-4 grid gap-3">{copy.sites.map((item) => <LinkCard key={item[0]} item={item} label={copy.open} />)}</div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <PlayCircle size={20} className="text-orange-600" />
            {copy.videosTitle}
          </h3>
          <div className="mt-4 grid gap-3">{copy.videos.map((item) => <LinkCard key={item[0]} item={item} label={copy.open} />)}</div>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-slate-950 p-5 text-white">
        <h3 className="text-xl font-black">{copy.projectsTitle}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {copy.projects.map((project) => (
            <span key={project} className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-black">
              {project}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FrontendHub
