import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaGraduationCap, FaTrophy, FaGlobe } from 'react-icons/fa'

const StatCard = ({ icon: Icon, end, label, suffix = '+' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white p-8 rounded-2xl border-2 border-primary-200 hover:border-primary-400 transition-all shadow-lg hover:shadow-education"
    >
      <Icon className="text-5xl text-primary-500 mb-4" />
      <h3 className="text-5xl font-bold text-neutral-800 mb-2">
        {count}{suffix}
      </h3>
      <p className="text-neutral-600 text-lg font-medium">{label}</p>
    </motion.div>
  )
}

const About = () => {
  const stats = [
    { icon: FaUsers, end: 15000, label: 'Students Enrolled' },
    { icon: FaGraduationCap, end: 500, label: 'Expert Faculty' },
    { icon: FaTrophy, end: 200, label: 'Awards Won' },
    { icon: FaGlobe, end: 50, label: 'Countries Represented' }
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-education-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
            About <span className="text-gradient-education">Elite University</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            For over 50 years, we've been at the forefront of education, 
            nurturing minds and shaping leaders who make a difference in the world.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 p-12 rounded-3xl border-2 border-primary-200 shadow-education"
        >
          <h3 className="text-3xl font-bold text-neutral-800 mb-6 text-center">Our Mission</h3>
          <p className="text-lg text-neutral-700 text-center max-w-4xl mx-auto leading-relaxed">
            We are committed to providing world-class education that empowers students 
            to become innovative thinkers, ethical leaders, and global citizens. Through 
            cutting-edge research, industry partnerships, and a vibrant campus community, 
            we prepare our students for success in an ever-changing world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
