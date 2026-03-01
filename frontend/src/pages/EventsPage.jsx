import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendar, FaMapMarkerAlt, FaClock, FaUsers, FaFilter, FaTicketAlt, FaTrophy, FaMusic, FaFlask, FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { eventsAPI } from '../services/api'

const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // grid or list

  const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Career', 'Workshop', 'Seminar']

  const getCategoryIcon = (category) => {
    const icons = {
      'Academic': FaGraduationCap,
      'Cultural': FaMusic,
      'Sports': FaTrophy,
      'Career': FaBriefcase,
      'Workshop': FaFlask,
      'Seminar': FaUsers
    }
    return icons[category] || FaCalendar
  }

  const allEvents = [
    {
      id: 1,
      title: 'Tech Innovation Summit 2026',
      date: '2026-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      category: 'Academic',
      organizer: 'Computer Science Department',
      capacity: 500,
      registered: 342,
      description: 'Join industry leaders and innovators as they discuss the future of technology, AI, and digital transformation. Network with professionals and explore cutting-edge innovations.',
      highlights: ['Keynote Speakers from Google & Microsoft', 'Networking Sessions', 'Tech Demos', 'Career Opportunities'],
      image: '🚀',
      price: 'Free for Students'
    },
    {
      id: 2,
      title: 'Annual Career Fair 2026',
      date: '2026-03-22',
      time: '10:00 AM - 4:00 PM',
      location: 'Campus Center',
      category: 'Career',
      organizer: 'Career Services',
      capacity: 1000,
      registered: 756,
      description: 'Connect with top employers from various industries. Bring your resume and be ready for on-the-spot interviews and networking opportunities.',
      highlights: ['100+ Companies', 'On-site Interviews', 'Resume Reviews', 'Career Counseling'],
      image: '💼',
      price: 'Free'
    },
    {
      id: 3,
      title: 'Research Symposium',
      date: '2026-04-05',
      time: '1:00 PM - 6:00 PM',
      location: 'Science Building',
      category: 'Academic',
      organizer: 'Research Department',
      capacity: 300,
      registered: 198,
      description: 'Showcase of groundbreaking student and faculty research across all disciplines. Poster presentations, oral presentations, and awards ceremony.',
      highlights: ['Research Presentations', 'Poster Sessions', 'Awards Ceremony', 'Publication Opportunities'],
      image: '🔬',
      price: 'Free'
    },
    {
      id: 4,
      title: 'Spring Music Festival',
      date: '2026-04-12',
      time: '6:00 PM - 10:00 PM',
      location: 'Outdoor Amphitheater',
      category: 'Cultural',
      organizer: 'Student Activities',
      capacity: 2000,
      registered: 1543,
      description: 'Annual spring celebration featuring live music performances, food trucks, and entertainment. Featuring local bands and student performers.',
      highlights: ['Live Performances', 'Food Trucks', 'Student Bands', 'Dance Floor'],
      image: '🎵',
      price: '$10'
    },
    {
      id: 5,
      title: 'AI & Machine Learning Workshop',
      date: '2026-04-18',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab 301',
      category: 'Workshop',
      organizer: 'AI Research Lab',
      capacity: 50,
      registered: 48,
      description: 'Hands-on workshop covering fundamentals of machine learning, neural networks, and practical AI applications. Bring your laptop!',
      highlights: ['Hands-on Coding', 'Real Projects', 'Expert Instructors', 'Certificate of Completion'],
      image: '🤖',
      price: '$25'
    },
    {
      id: 6,
      title: 'International Food Festival',
      date: '2026-04-25',
      time: '11:00 AM - 8:00 PM',
      location: 'Student Plaza',
      category: 'Cultural',
      organizer: 'International Student Office',
      capacity: 3000,
      registered: 2145,
      description: 'Celebrate diversity with cuisines from around the world. Cultural performances, food stalls, and international music.',
      highlights: ['50+ Countries', 'Cultural Performances', 'Traditional Foods', 'Live Entertainment'],
      image: '🌍',
      price: 'Free Entry'
    },
    {
      id: 7,
      title: 'Entrepreneurship Seminar',
      date: '2026-05-02',
      time: '3:00 PM - 6:00 PM',
      location: 'Business School Auditorium',
      category: 'Seminar',
      organizer: 'Business Department',
      capacity: 200,
      registered: 167,
      description: 'Learn from successful entrepreneurs about starting and scaling businesses. Q&A session and networking with startup founders.',
      highlights: ['Successful Founders', 'Startup Tips', 'Funding Advice', 'Networking'],
      image: '💡',
      price: 'Free'
    },
    {
      id: 8,
      title: 'Annual Sports Day',
      date: '2026-05-10',
      time: '8:00 AM - 6:00 PM',
      location: 'Athletic Complex',
      category: 'Sports',
      organizer: 'Athletics Department',
      capacity: 5000,
      registered: 3421,
      description: 'Inter-department sports competition featuring basketball, soccer, track & field, and more. Prizes for winners!',
      highlights: ['Multiple Sports', 'Team Competitions', 'Prizes & Trophies', 'Food & Refreshments'],
      image: '🏆',
      price: 'Free'
    },
    {
      id: 9,
      title: 'Web Development Bootcamp',
      date: '2026-05-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Hub',
      category: 'Workshop',
      organizer: 'CS Club',
      capacity: 40,
      registered: 38,
      description: 'Intensive one-day bootcamp covering HTML, CSS, JavaScript, and React. Build a complete web application from scratch.',
      highlights: ['Full-Stack Development', 'Project-Based Learning', 'Industry Tools', 'Portfolio Project'],
      image: '💻',
      price: '$50'
    }
  ]

  useEffect(() => {
    fetchEvents()
  }, [])

  useEffect(() => {
    filterEvents()
  }, [selectedCategory, events])

  const fetchEvents = async () => {
    try {
      const response = await eventsAPI.getAll({ upcoming: true })
      if (response.data.success && response.data.data.length > 0) {
        setEvents(response.data.data)
      } else {
        setEvents(allEvents)
      }
    } catch (error) {
      console.error('Failed to fetch events:', error)
      setEvents(allEvents)
    } finally {
      setLoading(false)
    }
  }

  const filterEvents = () => {
    if (selectedCategory === 'All') {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter(event => event.category === selectedCategory))
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  const EventCard = ({ event }) => {
    const Icon = getCategoryIcon(event.category)
    const spotsLeft = event.capacity - event.registered
    const percentFull = (event.registered / event.capacity) * 100

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        onClick={() => setSelectedEvent(event)}
        className="bg-white rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-primary-400 transition-all cursor-pointer shadow-md hover:shadow-education"
      >
        {/* Event Image/Icon */}
        <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative">
          <span className="text-7xl">{event.image}</span>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
            <span className="text-primary-600 font-semibold text-sm">{event.category}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-neutral-800 mb-3">{event.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-neutral-600">
              <FaCalendar className="text-primary-500" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <FaClock className="text-primary-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <FaMapMarkerAlt className="text-primary-500" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-neutral-600 mb-4 line-clamp-2">{event.description}</p>

          {/* Registration Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-neutral-600 mb-2 font-medium">
              <span>{event.registered} registered</span>
              <span>{spotsLeft} spots left</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all"
                style={{ width: `${percentFull}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-primary-600 font-bold text-lg">{event.price}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
            >
              View Details
            </motion.button>
          </div>
        </div>
      </motion.div>
    )
  }

  const EventModal = ({ event, onClose }) => {
    if (!event) return null
    const Icon = getCategoryIcon(event.category)
    const spotsLeft = event.capacity - event.registered

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-6xl">{event.image}</div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{event.title}</h2>
                  <p className="text-primary-400 font-semibold">{event.category}</p>
                </div>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white text-3xl">×</button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800 p-4 rounded-xl">
                <FaCalendar className="text-2xl text-primary-500 mb-2" />
                <p className="text-slate-400 text-sm">Date</p>
                <p className="text-white font-bold">{formatDate(event.date)}</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl">
                <FaClock className="text-2xl text-primary-500 mb-2" />
                <p className="text-slate-400 text-sm">Time</p>
                <p className="text-white font-bold">{event.time}</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl">
                <FaMapMarkerAlt className="text-2xl text-primary-500 mb-2" />
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-bold">{event.location}</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg mb-6">{event.description}</p>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Event Highlights</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-300">
                    <span className="text-primary-500">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-slate-400">Organized by</p>
                  <p className="text-white font-bold text-lg">{event.organizer}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400">Price</p>
                  <p className="text-primary-400 font-bold text-2xl">{event.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <FaUsers className="text-primary-500" />
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{event.registered} registered</span>
                    <span>{spotsLeft} spots remaining</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2"
            >
              <FaTicketAlt />
              Register Now
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <div className="bg-neutral-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-education-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6">
              Campus <span className="text-gradient-education">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Discover exciting events, workshops, and activities happening on campus
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all shadow-md ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border-2 border-neutral-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-neutral-600 font-medium">
              Showing {filteredEvents.length} of {events.length} events
            </p>
          </div>

          {loading ? (
            <div className="text-center text-neutral-800 text-xl py-12">Loading events...</div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center text-neutral-600 text-xl py-12">No events found in this category</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  )
}

export default EventsPage
