import { ExternalLink, ListChecks, PlayCircle, Puzzle, Terminal, Wrench } from 'lucide-react'
import { getJavaScriptHub } from '../../data/javascriptContent'

function ResourceLink({ children, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-3 py-2 text-sm font-black text-white transition hover:bg-orange-600"
      aria-label={`${label}: ${children}`}
    >
      {children}
      <ExternalLink size={15} />
    </a>
  )
}

function JavaScriptHub({ language }) {
  const copy = getJavaScriptHub(language)

  return (
    <section data-gsap="course-block" className="mt-6 glass-panel rounded-2xl p-5 md:p-7">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wide text-orange-700">{copy.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">{copy.title}</h2>
        <p className="mt-3 text-base font-semibold leading-8 text-slate-600">{copy.text}</p>
      </div>

      <div className="mt-7 grid gap-5 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <Wrench size={21} className="text-orange-600" />
            {copy.toolsTitle}
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {copy.tools.map((tool) => (
              <article key={tool.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h4 className="text-base font-black text-slate-950">{tool.name}</h4>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{tool.use}</p>
                <div className="mt-4">
                  <ResourceLink href={tool.link} label={copy.open}>
                    {copy.open}
                  </ResourceLink>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <ListChecks size={21} className="text-blue-700" />
            {copy.pathTitle}
          </h3>
          <ol className="mt-4 grid gap-3">
            {copy.path.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-lg bg-orange-50 p-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-md bg-orange-500 text-sm font-black text-white">
                  {index + 1}
                </span>
                <span className="text-sm font-bold leading-6 text-orange-950">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
            <Terminal size={21} className="text-blue-700" />
            {copy.sitesTitle}
          </h3>
          <div className="mt-4 grid gap-3">
            {copy.sites.map((site) => (
              <article
                key={site.name}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-black text-slate-950">{site.name}</h4>
                    <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-black text-blue-800">
                      {site.level}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{site.text}</p>
                </div>
                <ResourceLink href={site.link} label={copy.open}>
                  {copy.open}
                </ResourceLink>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="flex items-center gap-2 text-xl font-black text-slate-950">
              <PlayCircle size={21} className="text-orange-600" />
              {copy.videosTitle}
            </h3>
            <div className="mt-4 grid gap-3">
              {copy.videos.map((video) => (
                <article key={video.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h4 className="text-base font-black text-slate-950">{video.title}</h4>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{video.text}</p>
                  <div className="mt-4">
                    <ResourceLink href={video.link} label={copy.open}>
                      {copy.open}
                    </ResourceLink>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-950 p-5 text-white">
            <h3 className="flex items-center gap-2 text-xl font-black">
              <Puzzle size={21} className="text-orange-300" />
              {copy.projectsTitle}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.projects.map((project) => (
                <span
                  key={project}
                  className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-black text-slate-100"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JavaScriptHub
