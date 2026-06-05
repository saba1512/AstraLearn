import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowLeft, BookOpen, CheckCircle2, Layers3, MapPinned } from 'lucide-react'
import CodeWindow from '../components/common/CodeWindow'
import InfoPill from '../components/common/InfoPill'
import FrontendHub from '../components/course/FrontendHub'
import JavaScriptHub from '../components/course/JavaScriptHub'
import LessonActions from '../components/course/LessonActions'
import LessonInsight from '../components/course/LessonInsight'
import LessonPicker from '../components/course/LessonPicker'
import LessonQuiz from '../components/course/LessonQuiz'
import PythonHub from '../components/course/PythonHub'
import VideoLesson from '../components/course/VideoLesson'
import { getBeginnerLessonOverride, getFrontendRoadmap } from '../data/learningContent'
import { readStorage, writeStorage } from '../utils/storage'

const LESSON_VIDEOS_KEY = 'astralearn-lesson-videos'

function CoursePage({ copy, courses, language, learning }) {
  const pageRef = useRef(null)
  const { slug } = useParams()
  const course = courses.find((item) => item.slug === slug) ?? courses[0]
  const [activeIdsByCourse, setActiveIdsByCourse] = useState(() => ({
    ...learning.learningState.lastLessonByCourse,
  }))
  const [lessonVideos, setLessonVideos] = useState(() => readStorage(LESSON_VIDEOS_KEY, {}))
  const activeId = activeIdsByCourse[course.slug] ?? learning.learningState.lastLessonByCourse[course.slug]
  const activeLesson = course.lessons.find((lesson) => lesson.id === activeId) ?? course.lessons[0]
  const displayLessons = course.lessons.map((lesson) => ({
    ...lesson,
    ...getBeginnerLessonOverride(language, course.slug, lesson.id),
  }))
  const displayLesson =
    displayLessons.find((lesson) => lesson.id === activeLesson.id) ?? displayLessons[0]
  const videoKey = `${course.slug}:${activeLesson.id}`
  const learningKey = learning.getLessonKey(course.slug, activeLesson.id)
  const savedVideo = lessonVideos[videoKey]
  const legacyVideoUrl = typeof savedVideo === 'string' ? savedVideo : ''
  const lessonWithVideo = {
    ...displayLesson,
    videoTitle: savedVideo?.title ?? '',
    videoUrl: savedVideo?.url ?? legacyVideoUrl ?? displayLesson.videoUrl,
  }
  const frontendRoadmap = getFrontendRoadmap(language)
  const quizOptions = useMemo(() => {
    const options = [lessonWithVideo.answer]
    displayLessons.forEach((lesson) => {
      if (lesson.answer !== lessonWithVideo.answer && options.length < 3) {
        options.push(lesson.answer)
      }
    })
    return options.sort((a, b) => a.length - b.length)
  }, [displayLessons, lessonWithVideo.answer])

  const updateLessonVideo = (nextVideo) => {
    setLessonVideos((currentVideos) => {
      const currentVideo = currentVideos[videoKey]
      const normalizedCurrentVideo =
        typeof currentVideo === 'string' ? { title: '', url: currentVideo } : currentVideo
      const mergedVideo = {
        title: '',
        url: '',
        ...normalizedCurrentVideo,
        ...nextVideo,
        updatedAt: new Date().toISOString(),
      }
      const nextVideos = { ...currentVideos, [videoKey]: mergedVideo }

      if (!mergedVideo.title && !mergedVideo.url) {
        delete nextVideos[videoKey]
      }

      writeStorage(LESSON_VIDEOS_KEY, nextVideos)
      return nextVideos
    })
  }

  const handleVideoTitleChange = (nextTitle) => {
    updateLessonVideo({ title: nextTitle })
  }

  const handleVideoUrlChange = (nextUrl) => {
    updateLessonVideo({ url: nextUrl })
  }

  const handleVideoDelete = () => {
    updateLessonVideo({ title: '', url: '' })
  }

  const handleLessonChange = (lessonId) => {
    setActiveIdsByCourse((current) => {
      if (current[course.slug] === lessonId) {
        return current
      }

      return { ...current, [course.slug]: lessonId }
    })
    learning.setLastLesson(course.slug, lessonId)
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-gsap="course-block"]', {
        y: 18,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
      })
    }, pageRef)

    return () => ctx.revert()
  }, [course.slug])

  return (
    <section ref={pageRef} className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-400 sm:mb-5 sm:px-4"
      >
        <ArrowLeft size={17} />
        {copy.back}
      </Link>

      <div data-gsap="course-block" className="glass-panel overflow-hidden rounded-2xl">
        <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${course.accent}`} />
        <div className="p-4 sm:p-5 md:p-7">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-wide text-blue-700 sm:text-sm">{course.badge}</p>
            <h1 className="mt-2 text-[1.7rem] font-black leading-tight text-slate-950 sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-3 max-w-4xl text-sm font-semibold leading-7 text-slate-600 sm:mt-4 sm:text-base sm:font-normal sm:leading-8">{course.summary}</p>
            <div className="mt-4 grid max-w-3xl gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-3">
              <InfoPill icon={<Layers3 size={18} />} label={course.level} />
              <InfoPill icon={<BookOpen size={18} />} label={course.duration} />
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <LessonPicker
              activeLesson={lessonWithVideo}
              lessons={displayLessons}
              onChange={handleLessonChange}
              topicLabel={copy.topicLabel}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid min-w-0 gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article data-gsap="course-block" className="glass-panel rounded-2xl p-4 sm:p-5 md:p-7">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue-700 sm:size-11">
              <CheckCircle2 size={22} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-wide text-slate-500">{copy.questionLabel}</p>
              <h2 className="text-lg font-black text-slate-950 sm:text-2xl">{lessonWithVideo.title}</h2>
            </div>
          </div>
          <h3 className="mt-5 text-lg font-black leading-8 text-slate-950 sm:mt-6 sm:text-xl">{lessonWithVideo.question}</h3>
          <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm font-bold leading-7 text-blue-950 sm:p-4 sm:text-base sm:leading-8">
            {lessonWithVideo.answer}
          </p>
          <p className="mt-4 text-sm font-semibold leading-7 text-slate-600 sm:mt-5 sm:text-base sm:font-normal sm:leading-8">{lessonWithVideo.explanation}</p>
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm font-bold leading-7 text-amber-900 sm:mt-5 sm:p-4">
            {lessonWithVideo.note}
          </p>
          <LessonInsight courseSlug={course.slug} language={language} lesson={lessonWithVideo} />
          <LessonActions
            isCompleted={Boolean(learning.learningState.completed[learningKey])}
            isFavorite={Boolean(learning.learningState.favorites[learningKey])}
            language={language}
            note={learning.learningState.notes[learningKey] ?? ''}
            onCompletedChange={(value) => learning.setCompleted(learningKey, value)}
            onFavoriteChange={(value) => learning.setFavorite(learningKey, value)}
            onNoteChange={(value) => learning.setNote(learningKey, value)}
          />
          <LessonQuiz
            answer={learning.learningState.quiz[learningKey]}
            language={language}
            lesson={lessonWithVideo}
            onAnswerChange={(value) => learning.setQuizAnswer(learningKey, value)}
            options={quizOptions}
          />
        </article>

        <div data-gsap="course-block" className="grid min-w-0 gap-6">
          <CodeWindow code={lessonWithVideo.code} />
          <VideoLesson
            key={videoKey}
            copy={copy}
            language={language}
            lesson={lessonWithVideo}
            onVideoDelete={handleVideoDelete}
            onVideoTitleChange={handleVideoTitleChange}
            onVideoUrlChange={handleVideoUrlChange}
          />
        </div>
      </div>

      {course.slug === 'frontend' ? <FrontendHub language={language} /> : null}

      {course.slug === 'frontend' ? (
        <div data-gsap="course-block" className="mt-6 glass-panel rounded-2xl p-5 md:p-7">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg bg-orange-100 text-orange-700">
              <MapPinned size={22} />
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                {language === 'en' ? 'Roadmap' : 'გზამკვლევი'}
              </p>
              <h2 className="text-2xl font-black text-slate-950">
                {language === 'en' ? 'What to learn and where' : 'რა უნდა ისწავლო და სად'}
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {frontendRoadmap.map((item, index) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-600 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.text}</p>
                    {item.practice ? (
                      <p className="mt-3 rounded-lg bg-blue-50 p-3 text-xs font-black leading-5 text-blue-900">
                        {language === 'en' ? 'Practice: ' : 'პრაქტიკა: '}
                        <span className="font-bold">{item.practice}</span>
                      </p>
                    ) : null}
                    {item.result ? (
                      <p className="mt-2 rounded-lg bg-emerald-50 p-3 text-xs font-black leading-5 text-emerald-900">
                        {language === 'en' ? 'Result: ' : 'შედეგი: '}
                        <span className="font-bold">{item.result}</span>
                      </p>
                    ) : null}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.resources.map((resource) => (
                        <span
                          key={resource}
                          className="rounded-md border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-black text-orange-800"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {course.slug === 'python' ? <PythonHub language={language} /> : null}

      {course.slug === 'javascript' ? <JavaScriptHub language={language} /> : null}
    </section>
  )
}

export default CoursePage
