import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaBriefcase, FaTrophy, FaQuoteLeft } from 'react-icons/fa'

const AlumniPage = () => {
  const [selectedYear, setSelectedYear] = useState('All')

  const years = ['All', '2025', '2024', '2023', '2022', '2021', '2020']

  const featuredAlumni = [
    {
      name: 'Sarah Johnson',
      year: '2020',
      degree: 'Computer Science',
      position: 'Senior Software Engineer',
      company: 'Google',
      achievement: 'Led development of Google Maps new features',
      quote: 'Elite University gave me the foundation to excel in tech.',
      emoji: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      year: '2019',
      degree: 'Business Administration',
      position: 'CEO & Founder',
      company: 'TechStart Inc.',
      achievement: 'Built a $50M startup from scratch',
      quote: 'The entrepreneurship program changed my life.',
      emoji: '👨‍💼'
    },
    {
      name: 'Dr. Emily Rodriguez',
      year: '2018',
      degree: 'Healthcare Sciences',
      position: 'Chief Medical Officer',
      company: 'City Hospital',
      achievement: 'Pioneer in telemedicine solutions',
      quote: 'The medical training here was world-class.',
      emoji: '👩‍⚕️'
    },
    {
      name: 'David Kim',
      year: '2021',
      degree: 'Engineering',
      position: 'Lead Engineer',
      company: 'Tesla',
      achievement: 'Contributed to autonomous driving technology',
      quote: 'The hands-on labs prepared me for real-world challenges.',
      emoji: '👨‍🔧'
    },
    {
      name: 'Lisa Wang',
      year: '2022',
      degree: 'Design & Arts',
      position: 'Creative Director',
      company: 'Adobe',
      achievement: 'Award-winning UX designer',
      quote: 'The design program unleashed my creativity.',
      emoji: '👩‍🎨'
    },
    {
      name: 'James Wilson',
      year: '2020',
      degree: 'AI & Machine Learning',
      position: 'AI Research Scientist',
      company: 'OpenAI',
      achievement: 'Published 15+ research papers',
      quote: 'The AI program is cutting-edge and industry-relevant.',
      emoji: '👨‍🔬'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Alumni Worldwide' },
    { number: '95%', label: 'Employment Rate' },
    { number: '$85K', label: 'Average Starting Salary' },
    { number: '150+', label: 'Countries' }
  ]

  const filteredAlumni = selectedYear === 'All'
    ? featuredAlumni
    : featuredAlumni.filter(alumni => alumni.year === selectedYear)

  return (
    <div className="bg-neutral-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-education-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6">
              Our <span className="text-gradient-education">Alumni</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Celebrating the success stories of our graduates making a difference worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl font-bold text-gradient-education mb-2">
                  {stat.number}
                </h3>
                <p className="text-neutral-600 text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {years.map((year) => (
              <motion.button
                key={year}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-full font-semibold transition-all shadow-md ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border-2 border-neutral-200'
                }`}
              >
                Class of {year}
              </motion.button>
            ))}
          </div>

          {/* Featured Alumni */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-7xl">{alumni.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">{alumni.name}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{alumni.position}</p>
                  <p className="text-neutral-600 mb-2">{alumni.company}</p>
                  <p className="text-sm text-neutral-500 mb-4">
                    {alumni.degree} • Class of {alumni.year}
                  </p>
                  
                  <div className="bg-primary-50 p-4 rounded-xl mb-4">
                    <div className="flex items-start gap-2">
                      <FaTrophy className="text-primary-500 mt-1" />
                      <p className="text-sm text-neutral-700">{alumni.achievement}</p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-xl mb-4">
                    <FaQuoteLeft className="text-primary-500 mb-2" />
                    <p className="text-sm text-neutral-600 italic">"{alumni.quote}"</p>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-primary-500 text-xl"
                    >
                      <FaLinkedin />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="text-primary-500 text-xl"
                    >
                      <FaTwitter />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
              Join Our Alumni Network
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Stay connected with fellow graduates and access exclusive opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md"
              >
                Register as Alumni
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all"
              >
                Alumni Portal
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AlumniPage
