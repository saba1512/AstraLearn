import { useMemo, useState } from 'react'
import { Edit3, LockKeyhole, Plus, Save, Trash2 } from 'lucide-react'
import { readStorageText, writeStorageText } from '../utils/storage'

const emptyLesson = {
  answer: '',
  code: '',
  explanation: '',
  note: '',
  question: '',
  title: '',
  videoUrl: '',
}

const adminCopy = {
  ka: {
    eyebrow: 'Admin mode',
    title: 'გაკვეთილების მართვა',
    text: 'აქ შეგიძლია დაამატო, დაარედაქტირო და წაშალო შენ მიერ დამატებული გაკვეთილები. ცვლილებები ინახება ამ ბრაუზერში.',
    course: 'კურსი',
    customLessons: 'დამატებული გაკვეთილები',
    noLessons: 'ამ კურსზე ჯერ შენი დამატებული გაკვეთილი არ არის.',
    add: 'ახალი გაკვეთილი',
    edit: 'რედაქტირება',
    delete: 'წაშლა',
    save: 'შენახვა',
    cancel: 'გაუქმება',
    loginTitle: 'ადმინში შესვლა',
    loginText: 'ეს გვერდი დამალულია navigation-იდან. გასახსნელად შეიყვანე პაროლი.',
    password: 'პაროლი',
    passwordPlaceholder: 'შეიყვანე პაროლი',
    enter: 'შესვლა',
    wrongPassword: 'პაროლი არასწორია.',
    passwordTitle: 'პაროლის შეცვლა',
    newPassword: 'ახალი პაროლი',
    updatePassword: 'პაროლის შენახვა',
    logout: 'გამოსვლა',
    fields: {
      answer: 'მოკლე პასუხი',
      code: 'კოდის მაგალითი',
      explanation: 'ახსნა',
      note: 'შენიშვნა',
      question: 'კითხვა',
      title: 'სათაური',
      videoUrl: 'YouTube ლინკი',
    },
  },
  en: {
    eyebrow: 'Admin mode',
    title: 'Manage lessons',
    text: 'Add, edit, and delete your custom lessons. Changes are saved in this browser.',
    course: 'Course',
    customLessons: 'Custom lessons',
    noLessons: 'No custom lessons have been added to this course yet.',
    add: 'New lesson',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    loginTitle: 'Admin login',
    loginText: 'This page is hidden from navigation. Enter the password to open it.',
    password: 'Password',
    passwordPlaceholder: 'Enter password',
    enter: 'Enter',
    wrongPassword: 'Password is incorrect.',
    passwordTitle: 'Change password',
    newPassword: 'New password',
    updatePassword: 'Save password',
    logout: 'Log out',
    fields: {
      answer: 'Short answer',
      code: 'Code example',
      explanation: 'Explanation',
      note: 'Note',
      question: 'Question',
      title: 'Title',
      videoUrl: 'YouTube link',
    },
  },
}

function Admin({ actions, adminLessons, courses, language }) {
  const copy = adminCopy[language] ?? adminCopy.ka
  const [password, setPassword] = useState(() => {
    return readStorageText('astralearn-admin-password', 'admin123')
  })
  const [loginPassword, setLoginPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return window.sessionStorage.getItem('astralearn-admin-unlocked') === 'true'
  })
  const [loginError, setLoginError] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [courseSlug, setCourseSlug] = useState(courses[0]?.slug ?? 'python')
  const [editingId, setEditingId] = useState('')
  const [form, setForm] = useState(emptyLesson)

  const course = courses.find((item) => item.slug === courseSlug) ?? courses[0]
  const customLessons = useMemo(
    () => adminLessons[language]?.[courseSlug] ?? [],
    [adminLessons, courseSlug, language],
  )

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const resetForm = () => {
    setEditingId('')
    setForm(emptyLesson)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (editingId) {
      actions.updateLesson(language, courseSlug, editingId, form)
    } else {
      actions.addLesson(language, courseSlug, form)
    }

    resetForm()
  }

  const handleEdit = (lesson) => {
    setEditingId(lesson.id)
    setForm({
      answer: lesson.answer ?? '',
      code: lesson.code ?? '',
      explanation: lesson.explanation ?? '',
      note: lesson.note ?? '',
      question: lesson.question ?? '',
      title: lesson.title ?? '',
      videoUrl: lesson.videoUrl ?? '',
    })
  }

  const handleLogin = (event) => {
    event.preventDefault()

    if (loginPassword === password) {
      window.sessionStorage.setItem('astralearn-admin-unlocked', 'true')
      setIsUnlocked(true)
      setLoginError('')
      setLoginPassword('')
      return
    }

    setLoginError(copy.wrongPassword)
  }

  const handlePasswordChange = (event) => {
    event.preventDefault()

    if (!newPassword.trim()) return

    writeStorageText('astralearn-admin-password', newPassword)
    setPassword(newPassword)
    setNewPassword('')
  }

  const handleLogout = () => {
    window.sessionStorage.removeItem('astralearn-admin-unlocked')
    setIsUnlocked(false)
  }

  if (!isUnlocked) {
    return (
      <section className="mx-auto max-w-xl px-3 py-10 sm:px-6 lg:px-8">
        <form onSubmit={handleLogin} className="glass-panel rounded-2xl p-5 md:p-7">
          <span className="grid size-12 place-items-center rounded-lg bg-blue-100 text-blue-700">
            <LockKeyhole size={23} />
          </span>
          <h1 className="mt-4 text-3xl font-black text-slate-950">{copy.loginTitle}</h1>
          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{copy.loginText}</p>
          <label className="mt-5 block">
            <span className="text-sm font-black uppercase tracking-wide text-slate-500">
              {copy.password}
            </span>
            <input
              type="password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
              placeholder={copy.passwordPlaceholder}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </label>
          {loginError ? (
            <p className="mt-3 rounded-lg bg-rose-50 p-3 text-sm font-black text-rose-700">
              {loginError}
            </p>
          ) : null}
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700"
          >
            <LockKeyhole size={18} />
            {copy.enter}
          </button>
        </form>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="glass-panel rounded-2xl p-4 sm:p-5 md:p-7">
        <p className="text-sm font-black uppercase tracking-wide text-blue-700">{copy.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          {copy.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-8 text-slate-600">
          {copy.text}
        </p>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 transition hover:border-slate-400"
        >
          {copy.logout}
        </button>

        <label className="mt-6 block max-w-md">
          <span className="text-sm font-black uppercase tracking-wide text-slate-500">
            {copy.course}
          </span>
          <select
            value={courseSlug}
            onChange={(event) => {
              setCourseSlug(event.target.value)
              resetForm()
            }}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-black text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            {courses.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-4 sm:p-5 md:p-7">
          <h2 className="flex items-center gap-2 text-xl font-black text-slate-950">
            {editingId ? <Edit3 size={20} /> : <Plus size={20} />}
            {editingId ? copy.edit : copy.add}
          </h2>

          <div className="mt-5 grid gap-4">
            {['title', 'question', 'answer', 'explanation', 'note', 'videoUrl'].map((field) => (
              <label key={field} className="block">
                <span className="text-sm font-black uppercase tracking-wide text-slate-500">
                  {copy.fields[field]}
                </span>
                <input
                  required={['title', 'question', 'answer'].includes(field)}
                  value={form[field]}
                  onChange={(event) => updateField(field, event.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            ))}

            <label className="block">
              <span className="text-sm font-black uppercase tracking-wide text-slate-500">
                {copy.fields.code}
              </span>
              <textarea
                value={form.code}
                onChange={(event) => updateField('code', event.target.value)}
                rows={8}
                className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 font-mono text-sm leading-6 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700"
            >
              <Save size={18} />
              {copy.save}
            </button>
            {editingId ? (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:border-slate-400"
              >
                {copy.cancel}
              </button>
            ) : null}
          </div>
        </form>

        <div className="glass-panel rounded-2xl p-4 sm:p-5 md:p-7">
          <form onSubmit={handlePasswordChange} className="mb-5 rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-black text-slate-950">{copy.passwordTitle}</h2>
            <label className="mt-3 block">
              <span className="text-sm font-black uppercase tracking-wide text-slate-500">
                {copy.newPassword}
              </span>
              <input
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <button
              type="submit"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-black text-white transition hover:bg-orange-600"
            >
              <Save size={16} />
              {copy.updatePassword}
            </button>
          </form>

          <h2 className="text-xl font-black text-slate-950">
            {copy.customLessons}: {course?.title}
          </h2>

          <div className="mt-5 grid gap-3">
            {customLessons.length ? (
              customLessons.map((lesson) => (
                <article key={lesson.id} className="rounded-xl border border-slate-200 bg-white p-4">
                  <h3 className="text-lg font-black text-slate-950">{lesson.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                    {lesson.question}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => handleEdit(lesson)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 transition hover:bg-blue-100"
                    >
                      <Edit3 size={16} />
                      {copy.edit}
                    </button>
                    <button
                      type="button"
                      onClick={() => actions.deleteLesson(language, courseSlug, lesson.id)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-black text-rose-700 transition hover:bg-rose-100"
                    >
                      <Trash2 size={16} />
                      {copy.delete}
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <p className="rounded-xl border border-dashed border-slate-300 bg-white p-5 text-sm font-bold leading-7 text-slate-600">
                {copy.noLessons}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admin
