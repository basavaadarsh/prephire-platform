import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import MockInterviews from './pages/services/MockInterviews'
import ResumeReview from './pages/services/ResumeReview'
import InterviewGuidance from './pages/services/InterviewGuidance'
import PlacementSupport from './pages/services/PlacementSupport'
import CorporateTraining from './pages/services/CorporateTraining'
import Courses from './pages/Courses'
import JobBoard from './pages/JobBoard'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AuthLayout from './components/AuthLayout'

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes – no Navbar/Footer */}
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/signup" element={<AuthLayout />} />

        {/* Main app routes */}
        <Route
          path="*"
          element={
            <div className="app">
              <Navbar />
              <main className="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/mock-interviews" element={<MockInterviews />} />
                  <Route path="/services/resume-review" element={<ResumeReview />} />
                  <Route path="/services/interview-guidance" element={<InterviewGuidance />} />
                  <Route path="/services/placement-support" element={<PlacementSupport />} />
                  <Route path="/services/corporate-training" element={<CorporateTraining />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/job-board" element={<JobBoard />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
