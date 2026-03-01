import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ApplicationForm from './components/ApplicationForm'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import AlumniPage from './pages/AlumniPage'
import AdmissionsPage from './pages/AdmissionsPage'

function App() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)

  return (
    <Router>
      <div className="bg-neutral-50 min-h-screen">
        <Navbar onApplyClick={() => setIsApplicationOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onApplyClick={() => setIsApplicationOpen(true)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
        </Routes>
        <Footer />
        <ApplicationForm isOpen={isApplicationOpen} onClose={() => setIsApplicationOpen(false)} />
      </div>
    </Router>
  )
}

export default App
