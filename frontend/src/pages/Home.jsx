import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Courses from '../components/Courses'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'
import Placements from '../components/Placements'
import ContactForm from '../components/ContactForm'

const Home = ({ onApplyClick }) => {
  return (
    <>
      <Hero onApplyClick={onApplyClick} />
      <About />
      <Courses />
      <Events />
      <Testimonials />
      <Placements />
      <ContactForm />
    </>
  )
}

export default Home
