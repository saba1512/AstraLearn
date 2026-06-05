import { NavLink } from 'react-router-dom'
import { Code2, Home, Mail, PanelsTopLeft, ScrollText } from 'lucide-react'

function MobileDock({ courses, language }) {
  const labels =
    language === 'en'
      ? {
          contact: 'Contact',
          home: 'Home',
        }
      : {
          contact: 'კონტაქტი',
          home: 'მთავარი',
        }

  const courseIcons = {
    frontend: PanelsTopLeft,
    javascript: ScrollText,
    python: Code2,
  }

  const dockItems = [
    { icon: Home, label: labels.home, to: '/' },
    ...courses.slice(0, 3).map((course) => ({
      icon: courseIcons[course.slug] ?? Code2,
      label: course.title.split(' ')[0],
      to: `/course/${course.slug}`,
    })),
    { icon: Mail, label: labels.contact, to: '/contact' },
  ]

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/94 px-2 pb-[calc(0.55rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_34px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {dockItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[0.68rem] font-black leading-none transition',
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950',
                ].join(' ')
              }
            >
              <Icon size={18} />
              <span className="max-w-full truncate">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileDock
