export const languages = [
  { id: 'ka', label: 'KA', name: 'ქართული' },
  { id: 'en', label: 'EN', name: 'English' },
]

export const uiCopy = {
  ka: {
    header: {
      tagline: 'კოდი მარტივად',
      home: 'მთავარი',
      start: 'დაწყება',
      languageLabel: 'ენა',
      menuOpen: 'მენიუს გახსნა',
      menuClose: 'მენიუს დახურვა',
    },
    home: {
      eyebrow: 'ქართულად და ინგლისურად ახსნილი პროგრამირება',
      title: 'ისწავლე კოდი თემებით, მაგალითებით და ვიდეოებით',
      body:
        'აირჩიე კურსი, გახსენი კონკრეტული თემა და ნახე მოკლე პასუხი, ახსნა, კოდის მაგალითი და YouTube ვიდეოს ადგილი. ბექენდი არ არის საჭირო.',
      primaryCta: 'Python-ის დაწყება',
      secondaryCta: 'კურსები',
      metrics: [
        ['3', 'კურსი'],
        ['8+', 'თემა'],
        ['0', 'ბექენდი'],
      ],
      coursesEyebrow: 'კურსები',
      coursesTitle: 'აირჩიე სასწავლო ბილიკი',
      coursesText:
        'Swiper slider-ით კურსები სწრაფად იშლება, თითოეულში კი თემები და პასუხები უკვე ჩალაგებულია.',
      searchEyebrow: 'ძიება',
      searchTitle: 'თემა ან პასუხი',
      searchPlaceholder: 'მაგ: for loop, Router, map',
      searchHint: 'ძიება მუშაობს პირდაპირ frontend-ში და ლოკალურ course data-ს ფილტრავს.',
      answersEyebrow: 'სწრაფი პასუხები',
      answersTitle: 'კითხვის სტილის ცოდნის ბლოკები',
      answersText: 'თითოეული თემა იწყება კითხვით და მოკლე პასუხით, მერე მოდის ახსნა და კოდი.',
      codeTitle: 'python/for-loop.py',
      codeSample: `students = ["Ana", "Gio", "Nika"]

for student in students:
    print(f"გამარჯობა, {student}")`,
    },
    course: {
      back: 'უკან',
      open: 'გახსნა',
      topicLabel: 'თემა',
      questionLabel: 'კითხვა',
      videoTitle: 'ვიდეო გაკვეთილი',
      videoPlaceholder: 'YouTube embed ლინკი რომ დაემატება, ვიდეო აქ გამოჩნდება.',
    },
    notFound: {
      title: 'გვერდი ვერ მოიძებნა',
      text: 'ეს მისამართი ჯერ არ არსებობს.',
      action: 'მთავარი',
    },
  },
  en: {
    header: {
      tagline: 'Code made clear',
      home: 'Home',
      start: 'Start',
      languageLabel: 'Language',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    home: {
      eyebrow: 'Programming explained in Georgian and English',
      title: 'Learn code with topics, examples, and videos',
      body:
        'Choose a course, open a specific topic, and get a short answer, explanation, code example, and a ready spot for YouTube lessons. No backend needed.',
      primaryCta: 'Start Python',
      secondaryCta: 'Courses',
      metrics: [
        ['3', 'Courses'],
        ['8+', 'Topics'],
        ['0', 'Backend'],
      ],
      coursesEyebrow: 'Courses',
      coursesTitle: 'Choose a learning path',
      coursesText:
        'Courses are browsable with a Swiper slider, and each one already has topics, answers, and examples.',
      searchEyebrow: 'Search',
      searchTitle: 'Topic or answer',
      searchPlaceholder: 'Example: for loop, Router, map',
      searchHint: 'Search runs fully in the frontend and filters the local course data.',
      answersEyebrow: 'Quick answers',
      answersTitle: 'Question-style knowledge blocks',
      answersText: 'Each topic starts with a question and short answer, then continues with explanation and code.',
      codeTitle: 'python/for-loop.py',
      codeSample: `students = ["Ana", "Gio", "Nika"]

for student in students:
    print(f"Hello, {student}")`,
    },
    course: {
      back: 'Back',
      open: 'Open',
      topicLabel: 'Topic',
      questionLabel: 'Question',
      videoTitle: 'Video lesson',
      videoPlaceholder: 'When a YouTube embed link is added, the video will appear here.',
    },
    notFound: {
      title: 'Page not found',
      text: 'This address does not exist yet.',
      action: 'Home',
    },
  },
}

export const coursesByLanguage = {
  ka: [
    {
      slug: 'python',
      title: 'Python საფუძვლები',
      badge: 'ყველაზე მოთხოვნადი',
      level: 'Beginner',
      duration: '12 გაკვეთილი',
      accent: 'from-blue-500 via-emerald-400 to-orange-400',
      summary:
        'ისწავლე ცვლადები, პირობები, ციკლები, ფუნქციები და პატარა ამოცანების გადაწყვეტა პრაქტიკული მაგალითებით.',
      outcomes: ['for loop', 'if/else', 'ფუნქციები', 'სიის დამუშავება'],
      lessons: [
        {
          id: 'for-loop',
          title: 'for loop',
          question: 'როგორ გავიმეოროთ ერთი მოქმედება რამდენჯერმე Python-ში?',
          answer:
            'გამოიყენე for loop მაშინ, როცა წინასწარ იცი, რომელ ელემენტებზე ან რამდენჯერ უნდა გაიარო.',
          explanation:
            'for ციკლი იღებს კოლექციას, მაგალითად სიას ან range-ს, და თითოეულ ელემენტზე ერთხელ ასრულებს ბლოკს. ცვლადი name ყოველი ბრუნისას ახალ მნიშვნელობას იღებს.',
          code: `names = ["Ana", "Gio", "Nika"]

for name in names:
    print("Hello", name)

for number in range(1, 6):
    print(number)`,
          note: 'range(1, 6) დაბეჭდავს 1-დან 5-მდე რიცხვებს. ბოლო საზღვარი არ შედის.',
          videoUrl: '',
        },
        {
          id: 'conditions',
          title: 'if / else',
          question: 'როგორ ვუთხრათ პროგრამას, რომ სხვადასხვა სიტუაციაში სხვადასხვა რამ გააკეთოს?',
          answer:
            'if ამოწმებს პირობას. თუ პირობა სწორია, გაეშვება პირველი ბლოკი, სხვა შემთხვევაში else.',
          explanation:
            'პირობები საჭიროა გადაწყვეტილებისთვის: ქულა საკმარისია თუ არა, მომხმარებელი ავტორიზებულია თუ არა, მონაცემი ცარიელია თუ არა.',
          code: `score = 87

if score >= 70:
    print("ჩააბარე")
else:
    print("სცადე თავიდან")`,
          note: 'შედარებისთვის ხშირად გამოიყენება >, <, >=, <= და ==.',
          videoUrl: '',
        },
        {
          id: 'functions',
          title: 'ფუნქციები',
          question: 'როგორ არ გავიმეოროთ ერთი და იგივე კოდი ბევრჯერ?',
          answer:
            'ფუნქცია არის სახელდებული კოდის ბლოკი, რომელსაც საჭირო დროს გამოიძახებ.',
          explanation:
            'ფუნქციები კოდს ალაგებს პატარა ნაწილებად. პარამეტრებით ფუნქციას მონაცემს აწვდი, return-ით კი პასუხს აბრუნებ.',
          code: `def discount(price, percent):
    saved = price * percent / 100
    return price - saved

final_price = discount(120, 15)
print(final_price)`,
          note: 'return-ის შემდეგ მიღებული მნიშვნელობა შეგიძლია ცვლადში შეინახო.',
          videoUrl: '',
        },
      ],
    },
    {
      slug: 'javascript',
      title: 'JavaScript პრაქტიკა',
      badge: 'ვებისთვის',
      level: 'Beginner+',
      duration: '10 გაკვეთილი',
      accent: 'from-orange-400 via-amber-300 to-blue-500',
      summary:
        'DOM, events, arrays, async კოდი და პატარა ინტერაქტიული კომპონენტები ვებსაიტებისთვის.',
      outcomes: ['DOM events', 'arrays', 'async/await', 'components'],
      lessons: [
        {
          id: 'arrays-map',
          title: 'Array map',
          question: 'როგორ გადავაქციოთ სიის თითოეული ელემენტი ახალ მნიშვნელობად?',
          answer:
            'map აბრუნებს ახალ მასივს და არ ცვლის ძველს. კარგია მონაცემის UI-დ გადასაყვანად.',
          explanation:
            'React-ში map ხშირად გამოიყენება ბარათების, სიის ელემენტების ან გაკვეთილების დასარენდერებლად.',
          code: `const topics = ["HTML", "CSS", "React"]

const cards = topics.map((topic) => {
  return topic.toUpperCase()
})

console.log(cards)`,
          note: 'map-ში დაბრუნებული მნიშვნელობა ახალ მასივში ხვდება.',
          videoUrl: '',
        },
        {
          id: 'events',
          title: 'Events',
          question: 'როგორ ვუპასუხოთ ღილაკზე დაკლიკებას?',
          answer:
            'ღილაკს ვაძლევთ handler ფუნქციას, რომელიც click-ის დროს გაეშვება.',
          explanation:
            'Events არის მომხმარებლის მოქმედებები: click, input, submit, keydown და სხვა.',
          code: `const button = document.querySelector("button")

button.addEventListener("click", () => {
  console.log("დაიწყო გაკვეთილი")
})`,
          note: 'React-ში ამას ხშირად onClick prop-ით აკეთებ.',
          videoUrl: '',
        },
      ],
    },
    {
      slug: 'frontend',
      title: 'Frontend Starter',
      badge: 'React გზა',
      level: 'Intermediate',
      duration: '14 გაკვეთილი',
      accent: 'from-sky-500 via-blue-500 to-orange-500',
      summary:
        'React Router, Tailwind, reusable კომპონენტები, responsive layout და deploy-ready frontend.',
      outcomes: ['Router', 'Tailwind', 'state', 'responsive UI'],
      lessons: [
        {
          id: 'router',
          title: 'React Router',
          question: 'როგორ გავაკეთოთ რამდენიმე გვერდი ერთ React აპში?',
          answer:
            'Routes განსაზღვრავს URL-სა და კომპონენტს შორის კავშირს, Link კი გვერდებს შორის გადაადგილებას აკეთებს refresh-ის გარეშე.',
          explanation:
            'Router გეხმარება გქონდეს /course/python, /course/javascript და სხვა მისამართები ერთი frontend აპის შიგნით.',
          code: `import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <Link to="/course/python">Python</Link>
      <Routes>
        <Route path="/course/:slug" element={<Course />} />
      </Routes>
    </>
  )
}`,
          note: 'URL პარამეტრის წაკითხვა useParams-ით შეგიძლია.',
          videoUrl: '',
        },
        {
          id: 'tailwind',
          title: 'Tailwind layout',
          question: 'როგორ ავაწყოთ responsive layout სწრაფად?',
          answer:
            'Tailwind utility class-ებით პირდაპირ markup-ში აკონტროლებ spacing-ს, grid-ს, ფერებს და breakpoint-ებს.',
          explanation:
            'მაგალითად grid-cols-1 md:grid-cols-3 მობილურზე ერთ სვეტს აჩვენებს, საშუალო ეკრანზე კი სამს.',
          code: `<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
  <article className="rounded-lg border p-4">Python</article>
  <article className="rounded-lg border p-4">JavaScript</article>
  <article className="rounded-lg border p-4">React</article>
</section>`,
          note: 'კომპაქტურ UI-ში ზედმეტად დიდი სათაურები და spacing სწრაფად არღვევს ბალანსს.',
          videoUrl: '',
        },
      ],
    },
  ],
  en: [
    {
      slug: 'python',
      title: 'Python Fundamentals',
      badge: 'Most requested',
      level: 'Beginner',
      duration: '12 lessons',
      accent: 'from-blue-500 via-emerald-400 to-orange-400',
      summary:
        'Learn variables, conditions, loops, functions, and small problem-solving patterns with practical examples.',
      outcomes: ['for loop', 'if/else', 'functions', 'list processing'],
      lessons: [
        {
          id: 'for-loop',
          title: 'for loop',
          question: 'How do we repeat one action several times in Python?',
          answer:
            'Use a for loop when you already know which items to go through or how many times to repeat something.',
          explanation:
            'A for loop takes a collection, such as a list or range, and runs the same block once for each item. The variable name gets a new value on every turn.',
          code: `names = ["Ana", "Gio", "Nika"]

for name in names:
    print("Hello", name)

for number in range(1, 6):
    print(number)`,
          note: 'range(1, 6) prints numbers from 1 to 5. The ending boundary is not included.',
          videoUrl: '',
        },
        {
          id: 'conditions',
          title: 'if / else',
          question: 'How do we make a program do different things in different situations?',
          answer:
            'if checks a condition. If it is true, the first block runs; otherwise the else block runs.',
          explanation:
            'Conditions are used for decisions: whether a score is high enough, whether a user is logged in, or whether data is empty.',
          code: `score = 87

if score >= 70:
    print("Passed")
else:
    print("Try again")`,
          note: 'For comparison, you often use >, <, >=, <=, and ==.',
          videoUrl: '',
        },
        {
          id: 'functions',
          title: 'Functions',
          question: 'How do we avoid repeating the same code again and again?',
          answer:
            'A function is a named block of code that you can call whenever you need it.',
          explanation:
            'Functions organize code into smaller parts. Parameters send data into a function, and return sends a result back.',
          code: `def discount(price, percent):
    saved = price * percent / 100
    return price - saved

final_price = discount(120, 15)
print(final_price)`,
          note: 'The value returned by a function can be saved in a variable.',
          videoUrl: '',
        },
      ],
    },
    {
      slug: 'javascript',
      title: 'JavaScript Practice',
      badge: 'For the web',
      level: 'Beginner+',
      duration: '10 lessons',
      accent: 'from-orange-400 via-amber-300 to-blue-500',
      summary:
        'Practice DOM events, arrays, async code, and small interactive components for websites.',
      outcomes: ['DOM events', 'arrays', 'async/await', 'components'],
      lessons: [
        {
          id: 'arrays-map',
          title: 'Array map',
          question: 'How do we turn every item in a list into a new value?',
          answer:
            'map returns a new array and does not change the old one. It is great for turning data into UI.',
          explanation:
            'In React, map is often used to render cards, list items, or lessons from data.',
          code: `const topics = ["HTML", "CSS", "React"]

const cards = topics.map((topic) => {
  return topic.toUpperCase()
})

console.log(cards)`,
          note: 'Whatever you return inside map becomes an item in the new array.',
          videoUrl: '',
        },
        {
          id: 'events',
          title: 'Events',
          question: 'How do we respond to a button click?',
          answer:
            'Give the button a handler function that runs when the click happens.',
          explanation:
            'Events are user actions: click, input, submit, keydown, and more.',
          code: `const button = document.querySelector("button")

button.addEventListener("click", () => {
  console.log("Lesson started")
})`,
          note: 'In React, this is usually done with the onClick prop.',
          videoUrl: '',
        },
      ],
    },
    {
      slug: 'frontend',
      title: 'Frontend Starter',
      badge: 'React path',
      level: 'Intermediate',
      duration: '14 lessons',
      accent: 'from-sky-500 via-blue-500 to-orange-500',
      summary:
        'Build with React Router, Tailwind, reusable components, responsive layouts, and deploy-ready frontend structure.',
      outcomes: ['Router', 'Tailwind', 'state', 'responsive UI'],
      lessons: [
        {
          id: 'router',
          title: 'React Router',
          question: 'How do we create multiple pages inside one React app?',
          answer:
            'Routes connect URLs to components, and Link moves between pages without a full refresh.',
          explanation:
            'Router lets one frontend app have addresses like /course/python, /course/javascript, and more.',
          code: `import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <Link to="/course/python">Python</Link>
      <Routes>
        <Route path="/course/:slug" element={<Course />} />
      </Routes>
    </>
  )
}`,
          note: 'You can read URL parameters with useParams.',
          videoUrl: '',
        },
        {
          id: 'tailwind',
          title: 'Tailwind layout',
          question: 'How do we build a responsive layout quickly?',
          answer:
            'Tailwind utility classes let you control spacing, grid, colors, and breakpoints directly in markup.',
          explanation:
            'For example, grid-cols-1 md:grid-cols-3 shows one column on mobile and three columns on medium screens.',
          code: `<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
  <article className="rounded-lg border p-4">Python</article>
  <article className="rounded-lg border p-4">JavaScript</article>
  <article className="rounded-lg border p-4">React</article>
</section>`,
          note: 'In compact UI, oversized headings and spacing can quickly break visual balance.',
          videoUrl: '',
        },
      ],
    },
  ],
}

export const featuredQuestionsByLanguage = {
  ka: [
    {
      topic: 'Python',
      question: 'რა განსხვავებაა for და while loop-ს შორის?',
      answer:
        'for უკეთესია კოლექციაზე ან კონკრეტულ რაოდენობაზე გასასვლელად. while მუშაობს მანამ, სანამ პირობა true რჩება.',
    },
    {
      topic: 'JavaScript',
      question: 'რატომ ვიყენებთ const-ს?',
      answer:
        'const იცავს ცვლადის ხელახლა მინიჭებისგან და კოდს უფრო პროგნოზირებადს ხდის.',
    },
    {
      topic: 'React',
      question: 'როდის გვჭირდება state?',
      answer:
        'state გვჭირდება მაშინ, როცა UI უნდა შეიცვალოს მომხმარებლის მოქმედების ან მონაცემის ცვლილების შემდეგ.',
    },
  ],
  en: [
    {
      topic: 'Python',
      question: 'What is the difference between for and while loops?',
      answer:
        'for is better for collections or a fixed number of steps. while keeps running as long as a condition stays true.',
    },
    {
      topic: 'JavaScript',
      question: 'Why do we use const?',
      answer:
        'const prevents reassignment and makes code more predictable.',
    },
    {
      topic: 'React',
      question: 'When do we need state?',
      answer:
        'State is needed when the UI should change after a user action or a data change.',
    },
  ],
}

export function getCourses(language) {
  return coursesByLanguage[language] ?? coursesByLanguage.ka
}

export function getFeaturedQuestions(language) {
  return featuredQuestionsByLanguage[language] ?? featuredQuestionsByLanguage.ka
}
