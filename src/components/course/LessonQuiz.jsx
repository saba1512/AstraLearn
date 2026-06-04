import { CircleHelp } from 'lucide-react'

function LessonQuiz({ answer, language, lesson, onAnswerChange, options }) {
  const selected = answer ?? ''
  const isAnswered = Boolean(selected)
  const isCorrect = selected === lesson.answer
  const copy =
    language === 'en'
      ? {
          title: 'Quick quiz',
          question: `Which answer best explains "${lesson.title}"?`,
          correct: 'Correct. Nice, this one landed.',
          wrong: 'Not quite. Read the short answer once more and try again.',
        }
      : {
          title: 'სწრაფი quiz',
          question: `"${lesson.title}" რომელი პასუხით აიხსნება უკეთ?`,
          correct: 'სწორია. ეს თემა დაიჭირე.',
          wrong: 'ჯერ არა. მოკლე პასუხს კიდევ ერთხელ გადახედე და სცადე.',
        }

  return (
    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-500">
        <CircleHelp size={17} />
        {copy.title}
      </div>
      <p className="mt-3 text-base font-black leading-7 text-slate-950">{copy.question}</p>
      <div className="mt-4 grid gap-2">
        {options.map((option) => {
          const isSelected = selected === option

          return (
            <button
              key={option}
              type="button"
              onClick={() => onAnswerChange(option)}
              className={[
                'rounded-lg border px-4 py-3 text-left text-sm font-bold leading-6 transition',
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-950'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50',
              ].join(' ')}
            >
              {option}
            </button>
          )
        })}
      </div>
      {isAnswered ? (
        <p
          className={[
            'mt-3 rounded-lg p-3 text-sm font-black',
            isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800',
          ].join(' ')}
        >
          {isCorrect ? copy.correct : copy.wrong}
        </p>
      ) : null}
    </div>
  )
}

export default LessonQuiz
