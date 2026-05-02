import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <AuthProvider>
      <AnalyticsProvider>
        <ToastProvider>
          <SkipLink />
          <ScrollToTop />
          <Navbar />
          <main id="main-content" className="min-h-screen bg-forge-950 text-forge-100 font-sans">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
            </Routes>
          </main>
          <Footer />
        </ToastProvider>
      </AnalyticsProvider>
    </AuthProvider>
  )
}

export default App
