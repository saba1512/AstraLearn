import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function CourseCard({ actionLabel, course, stats }) {
  const progress = stats ?? { completed: 0, percent: 0, total: course.lessons.length }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`h-2 bg-gradient-to-r ${course.accent}`} />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
            {course.badge}
          </span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
            {course.level}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-black text-slate-950 sm:mt-5 sm:text-2xl">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:leading-7">{course.summary}</p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-wide text-slate-500">
            <span>Progress</span>
            <span>
              {progress.completed}/{progress.total}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${progress.percent}%` }}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {course.outcomes.map((item) => (
            <span key={item} className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600">
              {item}
            </span>
          ))}
        </div>
        <Link
          to={`/course/${course.slug}`}
          className="mt-5 inline-flex items-center justify-between rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 sm:mt-6 sm:text-base"
        >
          {actionLabel}
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  )
}

export default CourseCard
