export const homeHighlightsByLanguage = {
  ka: [
    {
      step: '01',
      title: 'იპოვე თემა',
      text: 'ჩაწერე for loop, map, Router ან სხვა კითხვა და პირდაპირ შესაბამის კურსამდე მიხვალ.',
    },
    {
      step: '02',
      title: 'წაიკითხე მოკლე პასუხი',
      text: 'თითოეულ თემას აქვს კითხვა, პასუხი, ახსნა და კოდის მაგალითი, რომ სწრაფად დაიჭირო აზრი.',
    },
    {
      step: '03',
      title: 'დაამატე YouTube ვიდეო',
      text: 'ვიდეოს ბმულს რომ ჩასვამ data-ში, გაკვეთილის გვერდზე embed ავტომატურად გამოჩნდება.',
    },
  ],
  en: [
    {
      step: '01',
      title: 'Find a topic',
      text: 'Search for for loop, map, Router, or a question and jump straight into the matching path.',
    },
    {
      step: '02',
      title: 'Read the short answer',
      text: 'Every lesson has a question, answer, explanation, and code sample so the idea lands quickly.',
    },
    {
      step: '03',
      title: 'Attach YouTube videos',
      text: 'Add an embed link in the course data and the lesson page will show the video automatically.',
    },
  ],
}

export const frontendRoadmapByLanguage = {
  ka: [
    {
      title: 'ინტერნეტი და საიტის სტრუქტურა',
      text: 'ჯერ გაიგე როგორ მუშაობს ბრაუზერი, რა არის ფაილი, ბმული, სურათი, გვერდი და როგორ უკავშირდება HTML/CSS/JS ერთმანეთს.',
      practice: 'შექმენი folder, ჩადე index.html, style.css და script.js და გახსენი ბრაუზერში.',
      result: 'ხვდები საიტის ფაილები როგორ უკავშირდება ერთმანეთს.',
      resources: ['Browser basics', 'HTML file', 'საიტის ნაწილები'],
    },
    {
      title: 'HTML საფუძვლები',
      text: 'ისწავლე heading, paragraph, image, link, form, button და semantic tags: header, main, section, footer.',
      practice: 'ააწყვე ერთი გვერდი: header, hero, courses section და footer.',
      result: 'შეგიძლია გვერდის ჩონჩხი სუფთად ააწყო.',
      resources: ['MDN HTML', 'HTML forms', 'Semantic tags'],
    },
    {
      title: 'CSS და layout',
      text: 'გაიგე color, spacing, font, border, flex, grid და responsive. მიზანი: გვერდი მობილურზეც კარგად დალაგდეს.',
      practice: 'გააკეთე 3 course card და მობილურზე ერთ სვეტად, desktop-ზე სამ სვეტად დაალაგე.',
      result: 'ხვდები flex/grid-ს და layout აღარ გეშინია.',
      resources: ['MDN CSS', 'Flexbox Froggy', 'Grid Garden'],
    },
    {
      title: 'JavaScript საწყისები',
      text: 'ისწავლე variables, conditions, loops, functions და arrays. აქედან იწყება საიტის “ცოცხალი” ნაწილი.',
      practice: 'გააკეთე პატარა quiz: პასუხის არჩევისას აჩვენე სწორია თუ არა.',
      result: 'შეგიძლია მონაცემი შეინახო, შეამოწმო და შედეგი გამოიტანო.',
      resources: ['JavaScript.info', 'MDN JS', 'პატარა სავარჯიშოები'],
    },
    {
      title: 'DOM და events',
      text: 'ისწავლე ღილაკზე დაჭერა, input-ის წაკითხვა, ელემენტის შეცვლა და პატარა interactive ბლოკების აწყობა.',
      practice: 'ააწყვე search input, რომელიც topic cards-ს ფილტრავს.',
      result: 'შეგიძლია მომხმარებლის მოქმედებაზე UI შეცვალო.',
      resources: ['DOM events', 'querySelector', 'mini projects'],
    },
    {
      title: 'Accessibility და UX',
      text: 'ისწავლე readable text, keyboard navigation, aria labels, focus state და ღილაკების გასაგები naming.',
      practice: 'შეამოწმე მენიუ keyboard-ით და input-ებს label დაუმატე.',
      result: 'შენი საიტი უფრო გასაგები და გამოყენებადია ყველასთვის.',
      resources: ['A11y basics', 'Focus states', 'ARIA labels'],
    },
    {
      title: 'React აზროვნება',
      text: 'მერე გადადი components, props, state და map rendering-ზე. React უბრალოდ UI-ს ნაწილებად ალაგებს.',
      practice: 'გაყავი course card, lesson picker და video block ცალკე components-ად.',
      result: 'ხვდები როგორ არ გაიმეორო ერთი და იგივე კოდი.',
      resources: ['React Docs', 'Vite', 'components'],
    },
    {
      title: 'Frontend tools',
      text: 'ისწავლე Router გვერდებისთვის, Tailwind სტილისთვის, GSAP ანიმაციისთვის და Swiper slider-ებისთვის.',
      practice: 'დაამატე რამდენიმე route, mobile menu animation და course slider.',
      result: 'შეგიძლია თანამედროვე frontend app-ის ძირითადი ნაწილები ააწყო.',
      resources: ['React Router', 'Tailwind Docs', 'GSAP'],
    },
    {
      title: 'API და მონაცემები',
      text: 'გაიგე fetch, loading state, error state და localStorage. backend არ არის აუცილებელი, მაგრამ data flow უნდა გესმოდეს.',
      practice: 'localStorage-ში შეინახე ვიდეოს სათაური/ლინკი და refresh-ის შემდეგ დააბრუნე.',
      result: 'ხვდები მონაცემი საიტში როგორ მოძრაობს და როგორ ინახება.',
      resources: ['Fetch API', 'localStorage', 'Loading states'],
    },
    {
      title: 'Git და ორგანიზება',
      text: 'ისწავლე folders, reusable files, git commit, GitHub upload და პროექტის სუფთა სტრუქტურა.',
      practice: 'გააკეთე components/pages/data folders და ცვლილებები commit-ებად დაყავი.',
      result: 'პროექტი აღარ არის არეული და სხვასაც შეუძლია გაგება.',
      resources: ['Git basics', 'GitHub', 'Project structure'],
    },
    {
      title: 'Portfolio polish',
      text: 'დაამატე responsive footer, scroll-to-top, empty states, hover states და პატარა animations.',
      practice: 'გაასწორე mobile/desktop ხედი და ყველა ღილაკს გასაგები მოქმედება მისცე.',
      result: 'საიტი უკვე demo-სთვის მზად გამოიყურება.',
      resources: ['Responsive QA', 'UI states', 'GSAP polish'],
    },
    {
      title: 'პროექტი და deploy',
      text: 'ბოლოს ააწყვე სრული portfolio ან სასწავლო საიტი, გამოიყენე Git, ატვირთე GitHub-ზე და გაუშვი Netlify/Vercel-ზე.',
      practice: 'deploy-ზე გაუშვი და მეგობარს გაუზიარე შესამოწმებლად.',
      result: 'გაქვს რეალური პროექტი, რომელსაც CV-ში ან portfolio-ში ჩასვამ.',
      resources: ['GitHub', 'Netlify', 'Vercel'],
    },
  ],
  en: [
    {
      title: 'The web and page structure',
      text: 'First understand how the browser works, what files, links, images, pages, and HTML/CSS/JS are doing together.',
      practice: 'Create a folder with index.html, style.css, and script.js, then open it in the browser.',
      result: 'You understand how the core site files connect.',
      resources: ['Browser basics', 'HTML file', 'Page parts'],
    },
    {
      title: 'HTML basics',
      text: 'Learn headings, paragraphs, images, links, forms, buttons, and semantic tags like header, main, section, and footer.',
      practice: 'Build one page with a header, hero, courses section, and footer.',
      result: 'You can create a clean page structure.',
      resources: ['MDN HTML', 'HTML forms', 'Semantic tags'],
    },
    {
      title: 'CSS and layout',
      text: 'Learn color, spacing, fonts, borders, flex, grid, and responsive layout. The goal is clean mobile and desktop structure.',
      practice: 'Create three course cards that stack on mobile and become three columns on desktop.',
      result: 'Flex/grid and layout start feeling natural.',
      resources: ['MDN CSS', 'Flexbox Froggy', 'Grid Garden'],
    },
    {
      title: 'JavaScript basics',
      text: 'Learn variables, conditions, loops, functions, and arrays. This is where pages start becoming interactive.',
      practice: 'Build a small quiz that shows whether the selected answer is correct.',
      result: 'You can store data, check it, and show a result.',
      resources: ['JavaScript.info', 'MDN JS', 'Small exercises'],
    },
    {
      title: 'DOM and events',
      text: 'Practice button clicks, reading inputs, changing elements, and building small interactive blocks.',
      practice: 'Build a search input that filters topic cards.',
      result: 'You can change the UI after a user action.',
      resources: ['DOM events', 'querySelector', 'Mini projects'],
    },
    {
      title: 'Accessibility and UX',
      text: 'Learn readable text, keyboard navigation, aria labels, focus states, and clear button naming.',
      practice: 'Test the menu with the keyboard and add labels to inputs.',
      result: 'Your site becomes clearer and easier to use.',
      resources: ['A11y basics', 'Focus states', 'ARIA labels'],
    },
    {
      title: 'React thinking',
      text: 'Then learn components, props, state, and map rendering. React helps split UI into reusable pieces.',
      practice: 'Split course cards, lesson picker, and video block into separate components.',
      result: 'You understand how to avoid repeating the same UI code.',
      resources: ['React Docs', 'Vite', 'Components'],
    },
    {
      title: 'Frontend tools',
      text: 'Learn Router for pages, Tailwind for styling, GSAP for animation, and Swiper for sliders.',
      practice: 'Add multiple routes, mobile menu animation, and a course slider.',
      result: 'You can build the main parts of a modern frontend app.',
      resources: ['React Router', 'Tailwind Docs', 'GSAP'],
    },
    {
      title: 'API and data',
      text: 'Understand fetch, loading states, error states, and localStorage. You may not need a backend, but data flow matters.',
      practice: 'Save a video title/link in localStorage and restore it after refresh.',
      result: 'You understand how data moves through a site and how it can be saved.',
      resources: ['Fetch API', 'localStorage', 'Loading states'],
    },
    {
      title: 'Git and organization',
      text: 'Learn folders, reusable files, git commits, GitHub upload, and clean project structure.',
      practice: 'Create components/pages/data folders and split changes into small commits.',
      result: 'The project is easier to understand and maintain.',
      resources: ['Git basics', 'GitHub', 'Project structure'],
    },
    {
      title: 'Portfolio polish',
      text: 'Add a responsive footer, scroll-to-top, empty states, hover states, and small animations.',
      practice: 'Check mobile/desktop views and make every button action clear.',
      result: 'The site feels ready for a demo.',
      resources: ['Responsive QA', 'UI states', 'GSAP polish'],
    },
    {
      title: 'Project and deploy',
      text: 'Finally build a full portfolio or learning site, use Git, upload to GitHub, and deploy with Netlify or Vercel.',
      practice: 'Deploy it and share the link with someone for feedback.',
      result: 'You have a real project you can add to a CV or portfolio.',
      resources: ['GitHub', 'Netlify', 'Vercel'],
    },
  ],
}

export const beginnerLessonOverridesByLanguage = {
  ka: {
    frontend: {
      router: {
        title: 'გვერდებს შორის გადასვლა',
        question: 'როგორ გადავიყვანოთ მომხმარებელი ერთი გვერდიდან მეორეზე?',
        answer:
          'ყველაზე მარტივად წარმოიდგინე როგორც მენიუ: ღილაკს ან ბმულს აჭერ და სხვა გვერდის შინაარსს ხედავ.',
        explanation:
          'სანამ React-ის კოდს ნახავ, იდეა ეს არის: საიტს აქვს რამდენიმე მისამართი, მაგალითად მთავარი, Python და JavaScript. მომხმარებელი ბმულით გადადის და გვერდი გასაგებად იცვლება.',
        code: `<nav>
  <a href="/">მთავარი</a>
  <a href="/python">Python</a>
  <a href="/javascript">JavaScript</a>
</nav>`,
        note: 'ჯერ გაიგე, რომ routing ნიშნავს გვერდებს შორის მოძრაობას. React Router-ის სინტაქსი მერე უფრო ადვილი გახდება.',
      },
      tailwind: {
        title: 'Responsive layout',
        question: 'როგორ გავაკეთოთ გვერდი, რომ მობილურზეც კარგად ჩანდეს?',
        answer:
          'გვერდი პატარა ეკრანზე ერთ სვეტად უნდა დალაგდეს, დიდ ეკრანზე კი შეიძლება ორ ან სამ სვეტად გაიშალოს.',
        explanation:
          'საწყის ეტაპზე მთავარი აზრია layout: სად დგას სათაური, სად დგას ბარათები და როგორ იცვლება ეს ეკრანის ზომის მიხედვით.',
        code: `.cards {
  display: grid;
  gap: 16px;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
        note: 'ჯერ ჩვეულებრივი CSS-ით გაიგე responsive-ის იდეა. Tailwind მერე იგივე იდეას მოკლე class-ებით აკეთებს.',
      },
    },
  },
  en: {
    frontend: {
      router: {
        title: 'Moving between pages',
        question: 'How do we move a user from one page to another?',
        answer:
          'Think of it like a menu: the user clicks a link and sees a different page section.',
        explanation:
          'Before learning React syntax, the idea is simple: a site has addresses like Home, Python, and JavaScript. Links help the user move between them.',
        code: `<nav>
  <a href="/">Home</a>
  <a href="/python">Python</a>
  <a href="/javascript">JavaScript</a>
</nav>`,
        note: 'First understand that routing means moving between pages. React Router syntax will feel easier after that.',
      },
      tailwind: {
        title: 'Responsive layout',
        question: 'How do we make a page look good on mobile and desktop?',
        answer:
          'On small screens, content usually stacks in one column. On larger screens, it can spread into two or three columns.',
        explanation:
          'At the beginning, focus on layout: where the heading goes, where cards go, and how the structure changes with screen size.',
        code: `.cards {
  display: grid;
  gap: 16px;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
        note: 'Learn the responsive idea with plain CSS first. Tailwind later does the same thing with shorter classes.',
      },
    },
  },
}

export function getHomeHighlights(language) {
  return homeHighlightsByLanguage[language] ?? homeHighlightsByLanguage.ka
}

export function getFrontendRoadmap(language) {
  return frontendRoadmapByLanguage[language] ?? frontendRoadmapByLanguage.ka
}

export function getBeginnerLessonOverride(language, courseSlug, lessonId) {
  return beginnerLessonOverridesByLanguage[language]?.[courseSlug]?.[lessonId] ?? null
}
