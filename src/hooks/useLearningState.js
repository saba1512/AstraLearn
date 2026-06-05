import { useEffect, useMemo, useState } from 'react'
import { readStorage, writeStorage } from '../utils/storage'

const STORAGE_KEY = 'astralearn-learning-state'

const initialState = {
  completed: {},
  favorites: {},
  lastLessonByCourse: {},
  notes: {},
  quiz: {},
}

function readLearningState() {
  return { ...initialState, ...readStorage(STORAGE_KEY, initialState) }
}

function lessonKey(courseSlug, lessonId) {
  return `${courseSlug}:${lessonId}`
}

export function useLearningState(courses) {
  const [learningState, setLearningState] = useState(readLearningState)

  useEffect(() => {
    writeStorage(STORAGE_KEY, learningState)
  }, [learningState])

  const courseStats = useMemo(() => {
    const stats = {}

    courses.forEach((course) => {
      const completedCount = course.lessons.filter(
        (lesson) => learningState.completed[lessonKey(course.slug, lesson.id)],
      ).length

      stats[course.slug] = {
        completed: completedCount,
        total: course.lessons.length,
        percent: course.lessons.length
          ? Math.round((completedCount / course.lessons.length) * 100)
          : 0,
      }
    })

    return stats
  }, [courses, learningState.completed])

  const updateBucket = (bucket, key, value) => {
    setLearningState((current) => {
      const nextBucket = { ...current[bucket] }

      if (value === '' || value === false || value === null) {
        if (!Object.prototype.hasOwnProperty.call(nextBucket, key)) {
          return current
        }
        delete nextBucket[key]
      } else {
        if (nextBucket[key] === value) {
          return current
        }
        nextBucket[key] = value
      }

      return { ...current, [bucket]: nextBucket }
    })
  }

  return {
    courseStats,
    getLessonKey: lessonKey,
    learningState,
    setCompleted: (key, value) => updateBucket('completed', key, value),
    setFavorite: (key, value) => updateBucket('favorites', key, value),
    setLastLesson: (courseSlug, lessonId) =>
      updateBucket('lastLessonByCourse', courseSlug, lessonId),
    setNote: (key, value) => updateBucket('notes', key, value),
    setQuizAnswer: (key, value) => updateBucket('quiz', key, value),
  }
}
