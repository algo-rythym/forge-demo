import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AnalyticsProvider } from './context/AnalyticsContext'
import { AuthProvider } from './context/AuthProvider'
import { ToastProvider } from './context/ToastProvider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { SkipLink } from './components/layout/SkipLink'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Gallery } from './pages/Gallery'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { AnalyticsPage } from './pages/Analytics'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const pageTransition = {
  duration: 0.35,
  ease: [0.25, 0.1, 0.25, 1],
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <AuthProvider>
      <AnalyticsProvider>
        <ToastProvider>
          <SkipLink />
          <ScrollToTop />
          <Navbar />
          <main id="main-content" className="min-h-screen bg-forge-950 text-forge-100 font-sans relative">
            <div className="grain-overlay" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
                <Route path="/profile" element={<AnimatedPage><Profile /></AnimatedPage>} />
                <Route path="/analytics" element={<AnimatedPage><AnalyticsPage /></AnimatedPage>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </ToastProvider>
      </AnalyticsProvider>
    </AuthProvider>
  )
}

export default App
