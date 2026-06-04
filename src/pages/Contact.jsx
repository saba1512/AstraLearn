import { Mail, MapPin, MessageSquare, Send } from 'lucide-react'

const contactCopy = {
  ka: {
    eyebrow: 'კონტაქტი',
    title: 'დაგვიკავშირდი',
    text: 'თუ გაქვს კითხვა, ვიდეოს დამატება გინდა, კურსის იდეა გაქვს ან უბრალოდ feedback გინდა გამოგზავნო, აქედან შეგიძლია მოგვწერო.',
    name: 'სახელი',
    email: 'Email',
    message: 'შეტყობინება',
    namePlaceholder: 'შენი სახელი',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'რა გინდა დაამატო ან იკითხო?',
    send: 'გაგზავნა',
    cards: [
      ['Email', 'hello@astralearn.local', 'mailto:hello@astralearn.local'],
      ['Support', 'კურსები, ვიდეოები, feedback', 'mailto:hello@astralearn.local'],
      ['Location', 'Online learning space', '#'],
    ],
  },
  en: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    text: 'Ask a question, suggest a course idea, send feedback, or share a video/resource you want added.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'What do you want to ask or add?',
    send: 'Send',
    cards: [
      ['Email', 'hello@astralearn.local', 'mailto:hello@astralearn.local'],
      ['Support', 'Courses, videos, feedback', 'mailto:hello@astralearn.local'],
      ['Location', 'Online learning space', '#'],
    ],
  },
}

function Contact({ language }) {
  const copy = contactCopy[language] ?? contactCopy.ka

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-2xl p-5 md:p-7">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">{copy.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{copy.title}</h1>
          <p className="mt-4 text-base font-semibold leading-8 text-slate-600">{copy.text}</p>

          <div className="mt-6 grid gap-3">
            {copy.cards.map(([title, text, href], index) => {
              const Icon = index === 0 ? Mail : index === 1 ? MessageSquare : MapPin

              return (
                <a
                  key={title}
                  href={href}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black text-slate-950">{title}</span>
                    <span className="mt-1 block break-words text-sm font-semibold text-slate-600">{text}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        <form
          action="mailto:hello@astralearn.local"
          method="post"
          encType="text/plain"
          className="glass-panel rounded-2xl p-5 md:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black uppercase tracking-wide text-slate-500">{copy.name}</span>
              <input
                name="name"
                placeholder={copy.namePlaceholder}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <label className="block">
              <span className="text-sm font-black uppercase tracking-wide text-slate-500">{copy.email}</span>
              <input
                name="email"
                type="email"
                placeholder={copy.emailPlaceholder}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-black uppercase tracking-wide text-slate-500">{copy.message}</span>
            <textarea
              name="message"
              rows={8}
              placeholder={copy.messagePlaceholder}
              className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-black text-white shadow-sm transition hover:bg-orange-600 sm:w-auto"
          >
            <Send size={18} />
            {copy.send}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
