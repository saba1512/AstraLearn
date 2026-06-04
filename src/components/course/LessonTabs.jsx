function LessonTabs({ activeLesson, lessons, onChange, topicLabel }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {lessons.map((lesson) => (
        <button
          key={lesson.id}
          type="button"
          onClick={() => onChange(lesson.id)}
          className={[
            'rounded-lg border p-4 text-left transition',
            activeLesson.id === lesson.id
              ? 'border-blue-500 bg-blue-50 text-blue-950 shadow-sm'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300',
          ].join(' ')}
        >
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">{topicLabel}</span>
          <span className="mt-2 block text-lg font-black">{lesson.title}</span>
        </button>
      ))}
    </div>
  )
}

export default LessonTabs
