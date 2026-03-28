import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Courses from './pages/Courses'
import JobBoard from './pages/JobBoard'
import JobDetails from './pages/JobDetails'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AuthLayout from './components/AuthLayout'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'
import MyApplications from './pages/dashboard/MyApplications'
import MyProfile from './pages/dashboard/MyProfile'
import LearningHub from './pages/dashboard/LearningHub'
import CoursesDashboard from './pages/dashboard/CoursesDashboard'
import CertificatesDashboard from './pages/dashboard/CertificatesDashboard'
import Messages from './pages/dashboard/Messages'
import Interviews from './pages/dashboard/Interviews'
import Skills from './pages/dashboard/Skills'
import Mentors from './pages/dashboard/Mentors'
import Settings from './pages/dashboard/Settings'
import Career from './pages/dashboard/Career'
import CareerGoals from './pages/dashboard/CareerGoals'
import ErrorBoundary from './components/ErrorBoundary'

const DashboardGuard = ({ children }) => {
  const hasProfile = Boolean(localStorage.getItem('userProfile'));
  return hasProfile ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
        {/* Auth routes – no Navbar/Footer */}
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/signup" element={<AuthLayout />} />

        {/* Dashboard routes */}
        <Route
          path="/dashboard"
          element={(
            <DashboardGuard>
              <DashboardLayout />
            </DashboardGuard>
          )}
        >
          <Route index element={<DashboardHome />} />
          <Route path="learning" element={<LearningHub />} />
          <Route path="courses" element={<CoursesDashboard />} />
          <Route path="certificates" element={<CertificatesDashboard />} />
          <Route path="applications" element={<MyApplications />} />
          <Route path="career" element={<Career />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="skills" element={<Skills />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="goals" element={<CareerGoals />} />
        </Route>

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
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/job-board" element={<JobBoard />} />
                  <Route path="/job/:id" element={<JobDetails />} />
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
    </ErrorBoundary>
  )
}

export default App
