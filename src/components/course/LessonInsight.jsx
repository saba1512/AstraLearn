import { Compass, ListChecks, Sparkles } from 'lucide-react'

const insightCopy = {
  ka: {
    use: 'სად გამოიყენებ',
    steps: 'როგორ იფიქრო',
    idea: 'პატარა იდეა',
    fallbackUse: 'ეს თემა დაგჭირდება მაშინ, როცა საიტს რეალური მოქმედება, არჩევანი ან დალაგებული ლოგიკა უნდა ჰქონდეს.',
    fallbackIdea: 'შეცვალე მაგალითში ერთი რამ და სცადე შედეგი წინასწარ გამოიცნო.',
  },
  en: {
    use: 'Where you use it',
    steps: 'How to think',
    idea: 'Tiny idea',
    fallbackUse: 'You use this topic when a site needs real behavior, choices, or organized logic.',
    fallbackIdea: 'Change one thing in the example and try to predict the result.',
  },
}

const insightDetails = {
  en: {
    'frontend:router': {
      use: 'Use it for navigation: Home, Python, JavaScript, Frontend, profile pages, lesson pages, and dashboards.',
      steps: ['Choose the page names', 'Create a link for each page', 'Show the right content when the address changes'],
      idea: 'Make three simple links and write what should appear after each click.',
    },
    'frontend:tailwind': {
      use: 'Use it when the same page must look clean on mobile, tablet, and desktop.',
      steps: ['Start with one column', 'Add spacing and readable text', 'Use wider layouts only on bigger screens'],
      idea: 'Turn three topic cards from one column into a desktop grid.',
    },
  },
  ka: {
    'frontend:router': {
      use: 'გამოიყენებ navigation-ში: მთავარი, Python, JavaScript, Frontend, პროფილი, გაკვეთილები და dashboard გვერდები.',
      steps: ['აირჩიე გვერდების სახელები', 'თითო გვერდისთვის გააკეთე ბმული', 'მისამართის შეცვლისას აჩვენე სწორი შინაარსი'],
      idea: 'გააკეთე სამი მარტივი ბმული და დაწერე, დაჭერის შემდეგ რა უნდა გამოჩნდეს.',
    },
    'frontend:tailwind': {
      use: 'გამოიყენებ მაშინ, როცა იგივე გვერდი მობილურზე, tablet-ზე და desktop-ზე სუფთად უნდა ჩანდეს.',
      steps: ['დაიწყე ერთი სვეტით', 'დაამატე spacing და წაკითხვადი ტექსტი', 'დიდ ეკრანზე გადააქციე ფართო layout-ად'],
      idea: 'სამი topic card მობილურზე ერთ სვეტად, desktop-ზე კი grid-ად დაალაგე.',
    },
  },
}

function LessonInsight({ courseSlug, language, lesson }) {
  const copy = insightCopy[language] ?? insightCopy.ka
  const details = insightDetails[language]?.[`${courseSlug}:${lesson.id}`] ?? {
    use: copy.fallbackUse,
    steps: [lesson.title, lesson.question, lesson.answer],
    idea: copy.fallbackIdea,
  }

  return (
    <div className="mt-5 grid gap-3">
      <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-emerald-800">
          <Compass size={16} />
          {copy.use}
        </div>
        <p className="mt-2 text-sm font-bold leading-6 text-emerald-950">{details.use}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_0.9fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-500">
            <ListChecks size={16} />
            {copy.steps}
          </div>
          <ol className="mt-3 grid gap-2">
            {details.steps.map((step, index) => (
              <li key={step} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-blue-600 text-xs font-black text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-orange-800">
            <Sparkles size={16} />
            {copy.idea}
          </div>
          <p className="mt-2 text-sm font-bold leading-6 text-orange-950">{details.idea}</p>
        </div>
      </div>
    </div>
  )
}

export default LessonInsight
