import { useState } from 'react'
import { Check, Link2, Pencil, Plus, Trash2, Video } from 'lucide-react'
import { getYouTubeEmbedUrl } from '../../utils/youtube'

function VideoLesson({
  copy,
  language,
  lesson,
  onVideoDelete,
  onVideoTitleChange,
  onVideoUrlChange,
}) {
  const embedUrl = getYouTubeEmbedUrl(lesson.videoUrl)
  const hasVideo = Boolean(lesson.videoTitle || lesson.videoUrl)
  const [isEditing, setIsEditing] = useState(!hasVideo)
  const text =
    language === 'en'
      ? {
          add: 'Add video',
          done: 'Done',
          edit: 'Edit',
          delete: 'Delete',
          titleLabel: 'Video title',
          titlePlaceholder: 'Example: for loop explained simply',
          inputLabel: 'YouTube link',
          inputPlaceholder: 'Paste a YouTube video link here',
          saved: 'The title and link are saved in this browser for this lesson.',
        }
      : {
          add: 'ვიდეოს დამატება',
          done: 'მზადაა',
          edit: 'რედაქტირება',
          delete: 'წაშლა',
          titleLabel: 'ვიდეოს სათაური',
          titlePlaceholder: 'მაგ: for loop მარტივად ახსნა',
          inputLabel: 'YouTube ლინკი',
          inputPlaceholder: 'ჩასვი YouTube ვიდეოს ლინკი აქ',
          saved: 'სათაური და ლინკი ამ ბრაუზერში ამ გაკვეთილზე ინახება.',
        }

  const showForm = isEditing || !hasVideo

  return (
    <article className="glass-panel rounded-2xl p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg bg-orange-100 text-orange-700">
            <Video size={20} />
          </span>
          <h3 className="text-xl font-black text-slate-950">{copy.videoTitle}</h3>
        </div>

        {hasVideo ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setIsEditing((value) => !value)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {isEditing ? <Check size={16} /> : <Pencil size={16} />}
              {isEditing ? text.done : text.edit}
            </button>
            <button
              type="button"
              onClick={onVideoDelete}
              className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-black text-rose-700 transition hover:bg-rose-100"
            >
              <Trash2 size={16} />
              {text.delete}
            </button>
          </div>
        ) : null}
      </div>

      {showForm ? (
        <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4">
          {!hasVideo ? (
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-black text-blue-700">
              <Plus size={16} />
              {text.add}
            </div>
          ) : null}

          <label className="mb-3 block">
            <span className="mb-2 block text-sm font-black uppercase tracking-wide text-slate-500">
              {text.titleLabel}
            </span>
            <input
              value={lesson.videoTitle}
              onChange={(event) => onVideoTitleChange(event.target.value)}
              placeholder={text.titlePlaceholder}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-500">
              <Link2 size={16} />
              {text.inputLabel}
            </span>
            <input
              value={lesson.videoUrl}
              onChange={(event) => onVideoUrlChange(event.target.value)}
              placeholder={text.inputPlaceholder}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </label>
          <span className="mt-2 block text-xs font-bold text-slate-500">{text.saved}</span>
        </div>
      ) : null}

      {lesson.videoTitle && !showForm ? (
        <h4 className="mb-3 rounded-lg bg-slate-950 px-4 py-3 text-base font-black text-white">
          {lesson.videoTitle}
        </h4>
      ) : null}

      {embedUrl ? (
        <iframe
          className="aspect-video w-full rounded-lg border border-slate-200"
          src={embedUrl}
          title={`${lesson.videoTitle || lesson.title} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="grid aspect-video place-items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
          <div>
            <Video className="mx-auto text-slate-400" size={34} />
            <p className="mt-3 text-sm font-bold text-slate-600">{copy.videoPlaceholder}</p>
          </div>
        </div>
      )}
    </article>
  )
}

export default VideoLesson
