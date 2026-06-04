import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { BookOpen, Code2, Compass, Search, Sparkles, Star, Zap } from 'lucide-react'
import CourseMiniCard from '../components/course/CourseMiniCard'
import CourseSlider from '../components/course/CourseSlider'
import SectionHeading from '../components/common/SectionHeading'
import { getHomeHighlights } from '../data/learningContent'
import heroImg from '../assets/hero-learning.png'

function Home({ copy, courseCopy, courseStats, courses, featuredQuestions, learningState, language }) {
  const heroRef = useRef(null)
  const [query, setQuery] = useState('')
  const homeHighlights = getHomeHighlights(language)

  const topicChips = useMemo(
    () =>
      courses
        .flatMap((course) => course.lessons.map((lesson) => lesson.title))
        .slice(0, 6),
    [courses],
  )

  const filteredCourses = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return courses

    return courses.filter((course) => {
      const lessonText = course.lessons.map((lesson) => lesson.title).join(' ')
      return `${course.title} ${course.summary} ${lessonText}`.toLowerCase().includes(value)
    })
  }, [courses, query])

  const lessonResults = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return []

    return courses
      .flatMap((course) =>
        course.lessons.map((lesson) => ({
          course,
          lesson,
          text: `${course.title} ${course.summary} ${lesson.title} ${lesson.question} ${lesson.answer}`,
        })),
      )
      .filter((item) => item.text.toLowerCase().includes(value))
      .slice(0, 6)
  }, [courses, query])

  const favoriteLessons = useMemo(
    () =>
      courses
        .flatMap((course) =>
          course.lessons.map((lesson) => ({
            course,
            lesson,
            key: `${course.slug}:${lesson.id}`,
          })),
        )
        .filter((item) => learningState.favorites[item.key])
        .slice(0, 4),
    [courses, learningState.favorites],
  )

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-gsap="hero-copy"] > *', {
        y: 22,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
      })
      gsap.from('[data-gsap="hero-visual"]', {
        y: 18,
        rotate: -1.5,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
      })
      gsap.from('[data-gsap="metric"]', {
        y: 16,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        delay: 0.2,
        ease: 'power2.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        ref={heroRef}
        className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8"
      >
        <div data-gsap="hero-copy" className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-bold text-blue-800">
            <Sparkles size={16} />
            {copy.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {copy.body}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/course/python"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <Code2 size={19} />
              {copy.primaryCta}
            </Link>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-200 bg-white px-5 py-3 font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50"
            >
              <BookOpen size={19} />
              {copy.secondaryCta}
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {copy.metrics.map(([value, label]) => (
              <div
                key={label}
                data-gsap="metric"
                className="rounded-lg border border-slate-200 bg-white/80 p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-black text-slate-950">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-gsap="hero-visual" className="glass-panel relative min-w-0 overflow-hidden rounded-2xl p-4 sm:p-5">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-500 via-orange-400 to-emerald-400" />
          <figure className="overflow-hidden rounded-xl bg-slate-950">
            <picture className="block aspect-[16/10]">
              <img
                src={heroImg}
                alt="Student learning programming on a laptop"
                className="h-full w-full object-cover object-[center_54%]"
              />
            </picture>
          </figure>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="code-window overflow-hidden rounded-xl border border-white/10 shadow-sm">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-rose-400" />
                <span className="size-2.5 rounded-full bg-amber-300" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-semibold text-slate-400">{copy.codeTitle}</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-7">
                <code>{copy.codeSample}</code>
              </pre>
            </div>

            <div className="grid gap-3">
              {featuredQuestions.slice(0, 2).map((item) => (
                <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="text-xs font-black uppercase tracking-wide text-blue-700">{item.topic}</div>
                  <h2 className="mt-2 text-base font-black text-slate-950">{item.question}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={copy.coursesEyebrow}
          title={copy.coursesTitle}
          text={copy.coursesText}
        />
        <CourseSlider actionLabel={courseCopy.open} courseStats={courseStats} courses={courses} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-950 p-4 text-white shadow-sm sm:p-5 md:grid-cols-[0.85fr_1.15fr] md:p-6">
          <div className="flex flex-col justify-between gap-5">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-black text-orange-200">
                <Compass size={16} />
                {language === 'en' ? 'Learning flow' : 'სწავლის გზა'}
              </span>
              <h2 className="mt-4 max-w-xl text-2xl font-black leading-tight sm:text-3xl">
                {language === 'en'
                  ? 'Pick a topic, get the answer, then attach the video.'
                  : 'აირჩიე თემა, ნახე პასუხი და მერე ვიდეოც ჩასვი.'}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {topicChips.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setQuery(topic)}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white transition hover:border-orange-300 hover:bg-orange-400/20"
                >
                  <Zap size={15} className="text-orange-300" />
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {homeHighlights.map((item) => (
              <article key={item.step} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <div className="text-sm font-black text-orange-300">{item.step}</div>
                <h3 className="mt-3 text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="glass-panel rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-orange-100 text-orange-700">
                <Search size={21} />
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-slate-500">{copy.searchEyebrow}</p>
                <h2 className="text-xl font-black text-slate-950">{copy.searchTitle}</h2>
              </div>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="mt-5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {copy.searchHint}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredCourses.map((course) => (
              <CourseMiniCard key={course.slug} course={course} stats={courseStats?.[course.slug]} />
            ))}
          </div>
        </div>

        {lessonResults.length ? (
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:ml-[calc(28%+1.25rem)]">
            {lessonResults.map(({ course, lesson }) => (
              <Link
                key={`${course.slug}:${lesson.id}`}
                to={`/course/${course.slug}`}
                className="rounded-xl border border-blue-100 bg-blue-50 p-4 transition hover:border-blue-300 hover:bg-white"
              >
                <div className="text-xs font-black uppercase tracking-wide text-blue-700">
                  {course.title}
                </div>
                <h3 className="mt-2 text-base font-black text-slate-950">{lesson.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm font-semibold leading-6 text-slate-600">
                  {lesson.question}
                </p>
              </Link>
            ))}
          </div>
        ) : null}
      </section>

      {favoriteLessons.length ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-orange-100 text-orange-700">
                <Star size={19} fill="currentColor" />
              </span>
              <h2 className="text-xl font-black text-slate-950">
                {language === 'en' ? 'Saved lessons' : 'შენახული თემები'}
              </h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {favoriteLessons.map(({ course, lesson, key }) => (
                <Link
                  key={key}
                  to={`/course/${course.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-orange-300 hover:shadow-sm"
                >
                  <div className="text-xs font-black uppercase tracking-wide text-orange-700">
                    {course.title}
                  </div>
                  <h3 className="mt-2 text-base font-black text-slate-950">{lesson.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="answers" className="mx-auto max-w-7xl px-4 py-8 pb-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={copy.answersEyebrow}
          title={copy.answersTitle}
          text={copy.answersText}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {featuredQuestions.map((item) => (
            <article key={item.question} className="glass-panel rounded-2xl p-5">
              <div className="text-sm font-black text-blue-700">{item.topic}</div>
              <h3 className="mt-3 text-lg font-black leading-7 text-slate-950">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
