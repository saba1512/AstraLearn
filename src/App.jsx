import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import MobileDock from './components/layout/MobileDock'
import Home from './pages/Home'
import Contact from './pages/Contact'
import CoursePage from './pages/CoursePage'
import NotFound from './pages/NotFound'
import { getCourses, getFeaturedQuestions, uiCopy } from './data/courses'
import Admin from './pages/Admin'
import { mergeAdminLessons, useAdminContent } from './hooks/useAdminContent'
import { useLearningState } from './hooks/useLearningState'
import { readStorageText, writeStorageText } from './utils/storage'

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = readStorageText('astralearn-language')
    return savedLanguage === 'en' ? 'en' : 'ka'
  })
  const copy = uiCopy[language]
  const baseCourses = useMemo(() => getCourses(language), [language])
  const adminContent = useAdminContent()
  const courses = useMemo(
    () => mergeAdminLessons(baseCourses, adminContent.adminLessons, language),
    [adminContent.adminLessons, baseCourses, language],
  )
  const featuredQuestions = useMemo(() => getFeaturedQuestions(language), [language])
  const learning = useLearningState(courses)
  const [theme, setTheme] = useState(() => {
    const savedTheme = readStorageText('astralearn-theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    writeStorageText('astralearn-language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    writeStorageText('astralearn-theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="app-shell pb-20 lg:pb-0">
      <Header
        copy={copy.header}
        courses={courses}
        language={language}
        theme={theme}
        onLanguageChange={setLanguage}
        onThemeChange={setTheme}
      />
      <ScrollToTop />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                copy={copy.home}
                courseCopy={copy.course}
                courses={courses}
                courseStats={learning.courseStats}
                featuredQuestions={featuredQuestions}
                learningState={learning.learningState}
                language={language}
              />
            }
          />
          <Route
            path="/course/:slug"
            element={
              <CoursePage
                copy={copy.course}
                courses={courses}
                language={language}
                learning={learning}
              />
            }
          />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route
            path="/admin"
            element={
              <Admin
                actions={adminContent.actions}
                adminLessons={adminContent.adminLessons}
                courses={courses}
                language={language}
              />
            }
          />
          <Route path="*" element={<NotFound copy={copy.notFound} />} />
        </Routes>
      </main>
      <Footer courses={courses} language={language} />
      <MobileDock courses={courses} language={language} />
    </div>
  )
}

export default App
