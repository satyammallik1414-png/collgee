import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PlacementStat = ({ value, label, suffix = '%' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-6xl font-bold text-gradient-education mb-2">
        {count}{suffix}
      </h3>
      <p className="text-neutral-600 text-lg font-medium">{label}</p>
    </motion.div>
  )
}

const Placements = () => {
  const companies = ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Tesla']

  return (
    <section id="placements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
            Placement <span className="text-gradient-education">Success</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our graduates are hired by the world's leading companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <PlacementStat value={95} label="Placement Rate" />
          <PlacementStat value={120} label="Average Package (K)" suffix="K" />
          <PlacementStat value={500} label="Companies Hiring" suffix="+" />
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl border-2 border-primary-200 shadow-education">
          <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-4 rounded-xl flex items-center justify-center text-neutral-700 font-semibold shadow-md hover:shadow-lg transition-all"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Placements
