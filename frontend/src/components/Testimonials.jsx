import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const TestimonialCard = ({ name, role, text, rating }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-primary-500" />
        ))}
      </div>
      <p className="text-neutral-700 mb-6 italic leading-relaxed">"{text}"</p>
      <div>
        <h4 className="text-neutral-800 font-bold">{name}</h4>
        <p className="text-primary-600 text-sm font-medium">{role}</p>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const testimonials = [
    { name: 'Alex Thompson', role: 'Computer Science Graduate', text: 'The education I received here opened doors I never imagined. The faculty truly cares about student success.', rating: 5 },
    { name: 'Maria Garcia', role: 'Business Major', text: 'Amazing campus culture and incredible networking opportunities. Best decision of my life!', rating: 5 },
    { name: 'David Kim', role: 'Engineering Student', text: 'State-of-the-art facilities and hands-on learning experiences prepared me for my dream career.', rating: 5 }
  ]

  return (
    <section id="testimonials" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
            Student <span className="text-gradient-education">Stories</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Hear from our successful alumni and current students
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
