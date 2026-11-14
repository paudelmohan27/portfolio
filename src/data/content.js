// All the text on the site lives here. Edit this file to update your portfolio.
// Anything in [BRACKETS] is a placeholder you still need to fill in.

export const profile = {
  name: 'Mohan Paudel',
  firstName: 'Mohan',
  role: { lead: 'Computer engineer &', highlight: 'web developer' },
  intro:
    'Second-year student at ACEM, Tribhuvan University. I build full-stack web apps with React and Node, and solve problems in C++ for fun.',
  status: 'Open to internships · 2026',
  location: 'Nepal',
  // Put a cut-out photo (transparent background PNG) in /public and set e.g. '/mohan.png'.
  photo: '/mohan.webp',
  email: 'contact.paudelmohan@gmail.com',
  // Generated from cv/cv.html (see README). Set to null to hide the Download CV button.
  resume: '/resume.pdf',
  links: {
    github: 'https://github.com/paudelmohan27',
    linkedin: 'https://linkedin.com/in/paudelmohan27',
  },
}

export const heroTags = ['React & Node', 'C++', 'Problem solver']

export const highlight = {
  label: 'Prerana Tech Fest 2024',
  title: 'Winner · Competitive Programming',
}

export const about = {
  statement: 'I build web apps that students actually use.',
  statementMuted: 'Now learning to make them faster, safer and simpler — one project at a time.',
  stats: [
    { value: '15', label: 'Public repositories on GitHub' },
    { value: '4', label: 'Apps live on the web' },
    { value: '2nd', label: 'Year, Computer Engineering', accent: true },
  ],
}

export const skillGroups = [
  { title: 'Languages', sub: 'Where I think in code', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Web', sub: 'What I ship with', items: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'HTML & CSS'] },
  { title: 'Tools', sub: 'What keeps it running', items: ['Git & GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Qt'] },
]

export const featuredProject = {
  title: 'StudyTracker',
  meta: 'Full-stack · 2026',
  description:
    'A study planner that tracks syllabus progress against exam dates, logs sessions with a Pomodoro timer, and flags the subjects falling behind.',
  points: [
    'JWT auth, rate limiting and input validation',
    'Progress charts and exam countdowns',
    'Avatar uploads with cropping (Cloudinary)',
  ],
  stack: ['React', 'Express', 'MongoDB', 'Tailwind'],
  image: '/projects/studytracker.jpg',
  live: 'https://tracker.paudelmohan.com.np',
  code: 'https://github.com/paudelmohan27/StudyTracker',
}

export const projects = [
  {
    title: 'Boolean Algebra Solver',
    year: '2026',
    description: 'Truth tables, Karnaugh maps and logic circuit diagrams from a single expression.',
    stack: 'TypeScript · Vercel',
    image: '/projects/boolean-solver.jpg',
    tint: 'blue',
    live: 'https://boolean-algebra-solver.vercel.app',
    code: 'https://github.com/paudelmohan27/BooleanAlgebraSolver',
  },
  {
    title: 'Digital Diary',
    year: '2026',
    description: 'A desktop diary with login, entry search and local storage.',
    stack: 'C++ · Qt Widgets',
    image: '/projects/digital-diary.jpg',
    tint: 'green',
    live: null,
    code: 'https://github.com/paudelmohan27/Digital-Diary',
  },
  {
    title: 'CricVerse',
    year: '2026',
    description: 'Live cricket scores and ICC rankings, built on the Cricbuzz API.',
    stack: 'HTML · CSS · JavaScript',
    image: '/projects/cricverse.jpg',
    tint: 'orange',
    live: 'https://mohanpaudel761.com.np',
    code: 'https://github.com/paudelmohan27/ipl-project-',
  },
]

export const journey = [
  { when: 'Sep 2026', title: 'Shipped StudyTracker', body: 'First full-stack app with auth, a database and real users.' },
  { when: 'Jul 2026', title: 'Built a desktop app in C++ and Qt', body: 'Digital Diary — login, search, local storage.' },
  { when: 'Jun 2026', title: 'Boolean Algebra Solver', body: 'Turned digital logic coursework into a tool.' },
  { when: '2024', title: 'Won Prerana Tech Fest', body: 'First place in competitive programming. Also first runner-up at the SOS inter-school hackathon.' },
  { when: '2024', title: 'First commit', body: 'Joined GitHub. First calculator, first website, first everything.' },
]

export const contact = {
  heading: 'Have an internship or project in mind?',
  body: 'I reply within a day. Usually faster if it involves React or C++.',
}
