import { CheckCircle2, Star } from 'lucide-react'

function LessonActions({
  isCompleted,
  isFavorite,
  language,
  note,
  onCompletedChange,
  onFavoriteChange,
  onNoteChange,
}) {
  const copy =
    language === 'en'
      ? {
          completed: 'Completed',
          favorite: 'Saved lesson',
          note: 'My note',
          placeholder: 'Write a small reminder, question, or example here...',
        }
      : {
          completed: 'გავიარე',
          favorite: 'შენახული თემა',
          note: 'ჩემი ჩანაწერი',
          placeholder: 'ჩაწერე პატარა შეხსენება, კითხვა ან შენი მაგალითი...',
        }

  return (
    <div className="mt-5 grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onCompletedChange(!isCompleted)}
          className={[
            'flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-black transition',
            isCompleted
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-emerald-50',
          ].join(' ')}
        >
          <CheckCircle2 size={18} />
          {copy.completed}
        </button>
        <button
          type="button"
          onClick={() => onFavoriteChange(!isFavorite)}
          className={[
            'flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-black transition',
            isFavorite
              ? 'border-orange-200 bg-orange-50 text-orange-800'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-orange-50',
          ].join(' ')}
        >
          <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          {copy.favorite}
        </button>
      </div>

      <label className="block rounded-xl border border-slate-200 bg-white p-4">
        <span className="text-sm font-black uppercase tracking-wide text-slate-500">
          {copy.note}
        </span>
        <textarea
          value={note}
          onChange={(event) => onNoteChange(event.target.value)}
          placeholder={copy.placeholder}
          rows={4}
          className="mt-3 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      </label>
    </div>
  )
}

export default LessonActions
