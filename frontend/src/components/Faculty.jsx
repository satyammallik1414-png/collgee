import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const FacultyCard = ({ name, title, image, expertise }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500 transition-all shadow-xl"
    >
      <div className="h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-slate-700 flex items-center justify-center text-6xl text-slate-500">
          👤
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-primary-400 mb-4">{title}</p>
        <p className="text-slate-400 text-sm mb-4">{expertise}</p>
        <div className="flex gap-3">
          <motion.button whileHover={{ scale: 1.1 }} className="text-primary-500 text-xl">
            <FaLinkedin />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="text-primary-500 text-xl">
            <FaTwitter />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

const Faculty = () => {
  const faculty = [
    { name: 'Dr. Sarah Johnson', title: 'Professor of Computer Science', expertise: 'AI & Machine Learning' },
    { name: 'Dr. Michael Chen', title: 'Dean of Engineering', expertise: 'Robotics & Automation' },
    { name: 'Dr. Emily Rodriguez', title: 'Professor of Business', expertise: 'Strategic Management' },
    { name: 'Dr. James Williams', title: 'Head of Research', expertise: 'Data Science' }
  ]

  return (
    <section id="faculty" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Faculty</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Learn from industry experts and renowned researchers
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty
