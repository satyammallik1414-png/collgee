import React from 'react'
import { motion } from 'framer-motion'
import { FaHistory, FaEye, FaBullseye, FaAward, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from 'react-icons/fa'

const AboutPage = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We foster creativity and encourage groundbreaking ideas that shape the future.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We maintain the highest standards in education, research, and student development.'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We uphold ethical principles and promote honesty in all our endeavors.'
    },
    {
      icon: FaGlobe,
      title: 'Diversity',
      description: 'We celebrate diverse perspectives and create an inclusive learning environment.'
    }
  ]

  const milestones = [
    { year: '1975', event: 'University Founded', description: 'Established with a vision to transform education' },
    { year: '1985', event: 'First Research Center', description: 'Opened state-of-the-art research facilities' },
    { year: '2000', event: 'International Recognition', description: 'Ranked among top 100 universities globally' },
    { year: '2010', event: 'Innovation Hub Launch', description: 'Created startup incubator for student entrepreneurs' },
    { year: '2020', event: 'Digital Transformation', description: 'Pioneered hybrid learning models' },
    { year: '2026', event: 'AI Research Institute', description: 'Leading artificial intelligence research and development' }
  ]

  const leadership = [
    {
      name: 'Dr. Robert Anderson',
      position: 'President & Chancellor',
      bio: 'Leading the university with 30+ years of academic excellence',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Maria Santos',
      position: 'Vice President of Academics',
      bio: 'Pioneering innovative curriculum development',
      image: '👩‍💼'
    },
    {
      name: 'Dr. James Wilson',
      position: 'Dean of Research',
      bio: 'Driving groundbreaking research initiatives',
      image: '👨‍🔬'
    },
    {
      name: 'Dr. Lisa Chen',
      position: 'Dean of Student Affairs',
      bio: 'Championing student success and wellbeing',
      image: '👩‍🎓'
    }
  ]

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
              About <span className="text-gradient-education">Elite University</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto">
              Empowering minds and shaping leaders for over 50 years. We are committed to excellence, 
              innovation, and creating a better future through education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FaHistory className="text-5xl text-primary-500" />
                <h2 className="text-4xl font-bold text-neutral-800">Our History</h2>
              </div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Founded in 1975, Elite University began with a simple yet powerful vision: to create 
                an institution that would transform lives through education. What started as a small 
                college with 200 students has grown into a world-renowned university serving over 
                15,000 students from 50+ countries.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Throughout our journey, we've remained committed to our founding principles of 
                academic excellence, innovative research, and community engagement. Today, we stand 
                as a beacon of educational excellence, preparing the next generation of leaders, 
                innovators, and changemakers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl border-2 border-primary-200 shadow-education"
            >
              <div className="space-y-6">
                <div>
                  <FaEye className="text-4xl text-primary-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">Our Vision</h3>
                  <p className="text-neutral-600">
                    To be a globally recognized institution that transforms lives through innovative 
                    education, groundbreaking research, and meaningful community engagement.
                  </p>
                </div>
                <div>
                  <FaBullseye className="text-4xl text-secondary-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">Our Mission</h3>
                  <p className="text-neutral-600">
                    To provide world-class education that empowers students to become ethical leaders, 
                    critical thinkers, and global citizens who make positive contributions to society.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-neutral-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education"
              >
                <value.icon className="text-5xl text-primary-500 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-800 mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-neutral-800 mb-6">Our Journey</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Key milestones that shaped our institution
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education">
                      <span className="text-3xl font-bold text-gradient-education">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-800 mt-2 mb-2">{milestone.event}</h3>
                      <p className="text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-4 border-white shadow-lg z-10" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-neutral-800 mb-6">Leadership Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Meet the visionaries guiding our institution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-7xl">{leader.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">{leader.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-neutral-600 text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15,000+', label: 'Students' },
              { number: '500+', label: 'Faculty Members' },
              { number: '50+', label: 'Countries' },
              { number: '200+', label: 'Programs' }
            ].map((stat, index) => (
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
    </div>
  )
}

export default AboutPage
