import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Courses from './pages/Courses'
import CourseDetails from './pages/courses/CourseDetails'
import JobBoard from './pages/JobBoard'
import JobDetails from './pages/JobDetails'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AuthLayout from './components/AuthLayout'

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      {/* Auth routes – no Navbar/Footer */}
      <Route path="/login" element={<AuthLayout />} />
      <Route path="/signup" element={<AuthLayout />} />

      {/* Main app routes */}
      <Route
        path="*"
        element={<div className="app">
          <Navbar />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetails />} />
              <Route path="/job-board" element={<JobBoard />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>} />
    </Routes>
  </Router>
)

export default App
