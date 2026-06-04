import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { GraduationCap, Menu, Moon, Play, Sun, X } from 'lucide-react'
import { languages } from '../../data/courses'

function Header({ copy, courses, language, theme, onLanguageChange, onThemeChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const menu = mobileMenuRef.current

    if (!menu) {
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      gsap.set(menu, { clearProps: 'all' })
      return undefined
    }

    gsap.killTweensOf(menu)

    if (isMenuOpen) {
      const menuItems = menu.querySelectorAll('[data-mobile-menu-item]')
      const timeline = gsap.timeline()

      timeline
        .fromTo(
          menu,
          { autoAlpha: 0, height: 0, y: -12 },
          { autoAlpha: 1, duration: 0.38, ease: 'power3.out', height: 'auto', y: 0 },
        )
        .fromTo(
          menuItems,
          { autoAlpha: 0, y: -8 },
          { autoAlpha: 1, duration: 0.28, ease: 'power2.out', stagger: 0.045, y: 0 },
          '-=0.2',
        )

      return () => timeline.kill()
    }

    const tween = gsap.to(menu, {
      autoAlpha: 0,
      duration: 0.24,
      ease: 'power2.in',
      height: 0,
      onComplete: () => setShouldRenderMenu(false),
      y: -10,
    })

    return () => tween.kill()
  }, [isMenuOpen, shouldRenderMenu])

  const navClass = ({ isActive }) =>
    [
      'rounded-full px-3 py-2 text-sm font-semibold transition',
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-600 hover:bg-white hover:text-slate-950',
    ].join(' ')

  const mobileNavClass = ({ isActive }) =>
    [
      'flex items-center justify-between rounded-lg px-4 py-3 text-base font-black transition',
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700',
    ].join(' ')

  const handleLanguageChange = (nextLanguage) => {
    onLanguageChange(nextLanguage)
    closeMenu()
  }

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const openMenu = () => {
    setShouldRenderMenu(true)
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    if (prefersReducedMotion()) {
      setShouldRenderMenu(false)
    }

    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu()
      return
    }

    openMenu()
  }

  const contactLabel = language === 'en' ? 'Contact' : 'კონტაქტი'

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
          <span className="brand-mark grid size-10 shrink-0 place-items-center rounded-lg bg-[#172033] text-white shadow-sm">
            <GraduationCap size={21} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-black text-slate-950">AstraLearn</span>
            <span className="block truncate text-xs font-semibold text-slate-500">{copy.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1 lg:flex">
          <NavLink to="/" className={navClass}>
            {copy.home}
          </NavLink>
          {courses.map((course) => (
            <NavLink key={course.slug} to={`/course/${course.slug}`} className={navClass}>
              {course.title.split(' ')[0]}
            </NavLink>
          ))}
          <NavLink to="/contact" className={navClass}>
            {contactLabel}
          </NavLink>
        </nav>

        <div className="hidden items-center rounded-lg border border-slate-200 bg-white p-1 shadow-sm lg:flex">
          {languages.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={`${copy.languageLabel}: ${item.name}`}
              onClick={() => onLanguageChange(item.id)}
              className={[
                'rounded-md px-2.5 py-1.5 text-xs font-black transition',
                language === item.id
                  ? 'bg-[#172033] text-white'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950',
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
          className={[
            'hidden size-10 place-items-center rounded-lg border border-slate-200 shadow-sm transition hover:bg-blue-50 hover:text-blue-700 lg:grid',
            theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-white text-slate-900',
          ].join(' ')}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link
          to="/course/python"
          className="hidden items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600 xl:inline-flex"
        >
          <Play size={16} fill="currentColor" />
          <span className="hidden sm:inline">{copy.start}</span>
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? copy.menuClose : copy.menuOpen}
          onClick={toggleMenu}
          className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-blue-50 hover:text-blue-700 lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {shouldRenderMenu ? (
        <div
          ref={mobileMenuRef}
          className="overflow-hidden border-t border-slate-200 bg-white/95 px-4 pb-4 pt-3 shadow-xl lg:hidden"
        >
          <nav className="grid gap-2">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={mobileNavClass}
              data-mobile-menu-item
            >
              {copy.home}
            </NavLink>
            {courses.map((course) => (
              <NavLink
                key={course.slug}
                to={`/course/${course.slug}`}
                onClick={closeMenu}
                className={mobileNavClass}
                data-mobile-menu-item
              >
                {course.title}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={mobileNavClass}
              data-mobile-menu-item
            >
              {contactLabel}
            </NavLink>
          </nav>

          <Link
            to="/course/python"
            onClick={closeMenu}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
            data-mobile-menu-item
          >
            <Play size={16} fill="currentColor" />
            {copy.start}
          </Link>

          <div
            className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-2"
            data-mobile-menu-item
          >
            <span className="px-2 text-sm font-black text-slate-600">{copy.languageLabel}</span>
            <div className="flex items-center rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
              {languages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`${copy.languageLabel}: ${item.name}`}
                  onClick={() => handleLanguageChange(item.id)}
                  className={[
                    'rounded-md px-2.5 py-1.5 text-xs font-black transition',
                    language === item.id
                      ? 'bg-[#172033] text-white'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950',
                  ].join(' ')}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
            className={[
              'mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold shadow-sm transition hover:bg-blue-50',
              theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-white text-slate-800',
            ].join(' ')}
            data-mobile-menu-item
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      ) : null}
    </header>
  )
}

export default Header
