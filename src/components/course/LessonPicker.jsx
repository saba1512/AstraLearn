import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, Search } from 'lucide-react'

function LessonPicker({ activeLesson, lessons, onChange, topicLabel }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const pickerRef = useRef(null)

  const filteredLessons = useMemo(() => {
    const value = query.trim().toLowerCase()

    if (!value) {
      return lessons
    }

    return lessons.filter((lesson) =>
      `${lesson.title} ${lesson.question} ${lesson.answer}`.toLowerCase().includes(value),
    )
  }, [lessons, query])

  useEffect(() => {
    const handleClick = (event) => {
      if (!pickerRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSelect = (lessonId) => {
    onChange(lessonId)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div ref={pickerRef} className="min-w-0 self-start">
      <p className="mb-2 text-xs font-black uppercase tracking-wide text-slate-500 sm:mb-3 sm:text-sm">{topicLabel}</p>

      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full min-w-0 items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 text-left shadow-sm transition hover:border-blue-300 hover:bg-blue-50/50 sm:px-4 sm:py-4"
      >
        <span className="min-w-0">
          <span className="block text-sm font-bold text-blue-700">{activeLesson.title}</span>
          <span className="mt-1 block text-sm font-black leading-6 text-slate-950 sm:text-base">
            {activeLesson.question}
          </span>
        </span>
        <ChevronDown
          size={22}
          className={[
            'shrink-0 text-slate-500 transition',
            isOpen ? 'rotate-180 text-blue-700' : '',
          ].join(' ')}
        />
      </button>

      {isOpen ? (
        <div className="lesson-picker-menu mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <label className="flex items-center gap-2 border-b border-slate-100 px-3 py-3 sm:px-4">
            <Search size={18} className="text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
              placeholder="for loop, map, router..."
              className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400"
            />
          </label>

          <div className="max-h-64 overflow-y-auto p-2 sm:max-h-72">
            {filteredLessons.map((lesson) => {
              const isActive = lesson.id === activeLesson.id

              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => handleSelect(lesson.id)}
                  className={[
                    'flex w-full items-start gap-2 rounded-lg px-2.5 py-3 text-left transition sm:gap-3 sm:px-3',
                    isActive ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border',
                      isActive ? 'border-white/30 bg-white/15' : 'border-slate-200 bg-white',
                    ].join(' ')}
                  >
                    {isActive ? <Check size={15} /> : null}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black">{lesson.title}</span>
                    <span
                      className={[
                        'mt-1 line-clamp-2 text-xs font-semibold leading-5',
                        isActive ? 'text-blue-50' : 'text-slate-500',
                      ].join(' ')}
                    >
                      {lesson.question}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default LessonPicker
