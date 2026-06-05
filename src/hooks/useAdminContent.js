import { useEffect, useMemo, useState } from 'react'
import { readStorage, writeStorage } from '../utils/storage'

const STORAGE_KEY = 'astralearn-admin-lessons'

function readAdminLessons() {
  return readStorage(STORAGE_KEY, {})
}

function normalizeLesson(lesson) {
  return {
    answer: '',
    code: '',
    explanation: '',
    id: `custom-${Date.now()}`,
    note: '',
    question: '',
    title: '',
    videoUrl: '',
    ...lesson,
    isCustom: true,
  }
}

export function mergeAdminLessons(courses, adminLessons, language) {
  return courses.map((course) => {
    const customLessons = adminLessons[language]?.[course.slug] ?? []
    const lessons = [...course.lessons, ...customLessons.map(normalizeLesson)]
    const duration =
      language === 'en' ? `${lessons.length} lessons` : `${lessons.length} გაკვეთილი`

    return {
      ...course,
      duration,
      lessons,
    }
  })
}

export function useAdminContent() {
  const [adminLessons, setAdminLessons] = useState(readAdminLessons)

  useEffect(() => {
    writeStorage(STORAGE_KEY, adminLessons)
  }, [adminLessons])

  const actions = useMemo(
    () => ({
      addLesson(language, courseSlug, lesson) {
        setAdminLessons((current) => {
          const nextLesson = normalizeLesson({
            ...lesson,
            id: `custom-${courseSlug}-${Date.now()}`,
          })
          const currentCourseLessons = current[language]?.[courseSlug] ?? []

          return {
            ...current,
            [language]: {
              ...current[language],
              [courseSlug]: [...currentCourseLessons, nextLesson],
            },
          }
        })
      },
      deleteLesson(language, courseSlug, lessonId) {
        setAdminLessons((current) => ({
          ...current,
          [language]: {
            ...current[language],
            [courseSlug]: (current[language]?.[courseSlug] ?? []).filter(
              (lesson) => lesson.id !== lessonId,
            ),
          },
        }))
      },
      updateLesson(language, courseSlug, lessonId, lesson) {
        setAdminLessons((current) => ({
          ...current,
          [language]: {
            ...current[language],
            [courseSlug]: (current[language]?.[courseSlug] ?? []).map((item) =>
              item.id === lessonId ? normalizeLesson({ ...item, ...lesson, id: lessonId }) : item,
            ),
          },
        }))
      },
    }),
    [],
  )

  return { actions, adminLessons }
}
