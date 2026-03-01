import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import { eventsAPI } from '../services/api'

const EventCard = ({ title, date, location, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="bg-white p-6 rounded-xl border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education"
    >
      <h3 className="text-2xl font-bold text-neutral-800 mb-3">{title}</h3>
      <div className="flex items-center gap-4 text-neutral-600 mb-4">
        <span className="flex items-center gap-2">
          <FaCalendar className="text-primary-500" />
          {date}
        </span>
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary-500" />
          {location}
        </span>
      </div>
      <p className="text-neutral-600">{description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-4 text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1"
      >
        Learn More →
      </motion.button>
    </motion.div>
  )
}

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await eventsAPI.getAll({ upcoming: true })
      if (response.data.success && response.data.data.length > 0) {
        setEvents(response.data.data.map(event => ({
          title: event.title,
          date: new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          location: event.location,
          description: event.description
        })))
      } else {
        setEvents(staticEvents)
      }
    } catch (error) {
      console.error('Failed to fetch events:', error)
      setEvents(staticEvents)
    } finally {
      setLoading(false)
    }
  }

  const staticEvents = [
    { title: 'Tech Innovation Summit', date: 'March 15, 2026', location: 'Main Auditorium', description: 'Join industry leaders discussing the future of technology' },
    { title: 'Career Fair 2026', date: 'March 22, 2026', location: 'Campus Center', description: 'Connect with top employers and explore career opportunities' },
    { title: 'Research Symposium', date: 'April 5, 2026', location: 'Science Building', description: 'Showcase of groundbreaking student and faculty research' }
  ]

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
            Upcoming <span className="text-gradient-education">Events</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay connected with campus activities and opportunities
          </p>
        </motion.div>
        <div className="space-y-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
