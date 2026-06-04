import { Link } from 'react-router-dom'
import { BookOpen, GraduationCap, PlayCircle } from 'lucide-react'

const footerCopy = {
  ka: {
    tagline: 'კოდი მარტივად, თემებით, მაგალითებით და შენ მიერ დამატებული ვიდეოებით.',
    courses: 'კურსები',
    contact: 'კონტაქტი',
    learning: 'სწავლა',
    learningItems: [
      { label: 'კითხვა და პასუხი', to: '/#answers' },
      { label: 'კოდის მაგალითები', to: '/course/python' },
      { label: 'YouTube ვიდეოები', to: '/course/frontend' },
    ],
    start: 'დაწყება',
    note: 'Frontend-only სასწავლო საიტი. ვიდეოები და სათაურები ინახება შენს ბრაუზერში.',
    rights: 'ყველა უფლება დაცულია.',
  },
  en: {
    tagline: 'Code made clear with topics, examples, and videos you can attach.',
    courses: 'Courses',
    contact: 'Contact',
    learning: 'Learning',
    learningItems: [
      { label: 'Question and answer', to: '/#answers' },
      { label: 'Code examples', to: '/course/python' },
      { label: 'YouTube videos', to: '/course/frontend' },
    ],
    start: 'Start',
    note: 'Frontend-only learning site. Video links and titles are saved in your browser.',
    rights: 'All rights reserved.',
  },
}

function Footer({ courses, language }) {
  const copy = footerCopy[language] ?? footerCopy.ka
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg bg-white text-slate-950">
              <GraduationCap size={22} />
            </span>
            <span>
              <span className="block text-lg font-black">AstraLearn</span>
              <span className="block text-sm font-semibold text-slate-400">{copy.start}</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-slate-300">
            {copy.tagline}
          </p>
          <p className="mt-4 text-xs font-bold leading-6 text-slate-500">{copy.note}</p>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-orange-300">
            <BookOpen size={16} />
            {copy.courses}
          </h2>
          <nav className="mt-4 grid gap-2">
            {courses.map((course) => (
              <Link
                key={course.slug}
                to={`/course/${course.slug}`}
                className="text-sm font-bold text-slate-300 transition hover:text-white"
              >
                {course.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-bold text-slate-300 transition hover:text-white"
            >
              {copy.contact}
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-blue-300">
            <PlayCircle size={16} />
            {copy.learning}
          </h2>
          <ul className="mt-4 grid gap-2">
            {copy.learningItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm font-bold text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs font-bold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>AstraLearn © {year}</span>
          <span>{copy.rights}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
