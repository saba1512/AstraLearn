import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'astralearn-learning-state'

const initialState = {
  completed: {},
  favorites: {},
  notes: {},
  quiz: {},
}

function readLearningState() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? { ...initialState, ...JSON.parse(saved) } : initialState
  } catch {
    return initialState
  }
}

function lessonKey(courseSlug, lessonId) {
  return `${courseSlug}:${lessonId}`
}

export function useLearningState(courses) {
  const [learningState, setLearningState] = useState(readLearningState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(learningState))
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
        delete nextBucket[key]
      } else {
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
    setNote: (key, value) => updateBucket('notes', key, value),
    setQuizAnswer: (key, value) => updateBucket('quiz', key, value),
  }
}
