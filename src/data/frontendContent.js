export const frontendHubByLanguage = {
  ka: {
    eyebrow: 'Frontend learning hub',
    title: 'Frontend-ის სრული გზა',
    text: 'აქედან მიდიხარ HTML/CSS/JS-დან React-მდე, შემდეგ Router, Tailwind, animations, deploy და portfolio polish.',
    toolsTitle: 'Tools',
    sitesTitle: 'სასწავლო რესურსები',
    videosTitle: 'ვიდეოები',
    projectsTitle: 'პროექტები',
    open: 'გახსნა',
    tools: [
      ['Figma', 'UI დიზაინის ნახვა და layout-ის გაგება.', 'https://www.figma.com/'],
      ['Vite', 'სწრაფი React project setup.', 'https://vite.dev/'],
      ['Tailwind CSS', 'სწრაფი styling და responsive UI.', 'https://tailwindcss.com/'],
      ['Netlify', 'frontend პროექტის deploy.', 'https://www.netlify.com/'],
    ],
    sites: [
      ['MDN Web Docs', 'HTML/CSS/JS-ის სანდო docs.', 'https://developer.mozilla.org/'],
      ['React Docs', 'React-ის official docs.', 'https://react.dev/'],
      ['Frontend Mentor', 'რეალური UI challenges.', 'https://www.frontendmentor.io/'],
      ['web.dev', 'performance, accessibility და best practices.', 'https://web.dev/learn/'],
    ],
    videos: [
      ['freeCodeCamp Frontend', 'გრძელი courses HTML/CSS/JS/React თემებზე.', 'https://www.youtube.com/@freecodecamp'],
      ['Kevin Powell CSS', 'CSS/layout ძალიან კარგად ახსნილი.', 'https://www.youtube.com/@KevinPowell'],
      ['Net Ninja React', 'React playlist-ები პატარა გაკვეთილებით.', 'https://www.youtube.com/@NetNinja'],
    ],
    projects: ['Landing page', 'Dashboard', 'Course website', 'Portfolio', 'Quiz app', 'Admin table'],
  },
  en: {
    eyebrow: 'Frontend learning hub',
    title: 'A complete frontend path',
    text: 'Move from HTML/CSS/JS into React, then Router, Tailwind, animations, deployment, and portfolio polish.',
    toolsTitle: 'Tools',
    sitesTitle: 'Learning resources',
    videosTitle: 'Videos',
    projectsTitle: 'Projects',
    open: 'Open',
    tools: [
      ['Figma', 'Read UI designs and understand layout.', 'https://www.figma.com/'],
      ['Vite', 'Fast React project setup.', 'https://vite.dev/'],
      ['Tailwind CSS', 'Fast styling and responsive UI.', 'https://tailwindcss.com/'],
      ['Netlify', 'Deploy frontend projects.', 'https://www.netlify.com/'],
    ],
    sites: [
      ['MDN Web Docs', 'Trusted docs for HTML/CSS/JS.', 'https://developer.mozilla.org/'],
      ['React Docs', 'Official React documentation.', 'https://react.dev/'],
      ['Frontend Mentor', 'Real UI challenges.', 'https://www.frontendmentor.io/'],
      ['web.dev', 'Performance, accessibility, and best practices.', 'https://web.dev/learn/'],
    ],
    videos: [
      ['freeCodeCamp Frontend', 'Long courses for HTML/CSS/JS/React.', 'https://www.youtube.com/@freecodecamp'],
      ['Kevin Powell CSS', 'Excellent CSS and layout explanations.', 'https://www.youtube.com/@KevinPowell'],
      ['Net Ninja React', 'React playlists with small lessons.', 'https://www.youtube.com/@NetNinja'],
    ],
    projects: ['Landing page', 'Dashboard', 'Course website', 'Portfolio', 'Quiz app', 'Admin table'],
  },
}

export function getFrontendHub(language) {
  return frontendHubByLanguage[language] ?? frontendHubByLanguage.ka
}
