import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function CourseMiniCard({ course, stats }) {
  const progress = stats ?? { completed: 0, percent: 0, total: course.lessons.length }

  return (
    <Link
      to={`/course/${course.slug}`}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg sm:p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-black text-slate-950">{course.title}</h3>
        <ArrowRight size={18} className="text-slate-400" />
      </div>
      <p className="mt-2 text-sm font-bold text-slate-500">{course.duration}</p>
      <div className="mt-3">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wide text-slate-500">
          <span>Progress</span>
          <span>
            {progress.completed}/{progress.total}
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-orange-500 transition-all"
            style={{ width: `${progress.percent}%` }}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {course.lessons.slice(0, 6).map((lesson) => (
          <span key={lesson.id} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
            {lesson.title}
          </span>
        ))}
        {course.lessons.length > 6 ? (
          <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-black text-blue-700">
            +{course.lessons.length - 6}
          </span>
        ) : null}
      </div>
    </Link>
  )
}

export default CourseMiniCard
