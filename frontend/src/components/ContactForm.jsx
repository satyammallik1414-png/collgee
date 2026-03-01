import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiUser, HiPencil, HiCheckCircle } from 'react-icons/hi'
import { contactAPI } from '../services/api'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await contactAPI.submit(formData)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-300">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500 text-green-500 p-4 rounded-lg mb-6 flex items-center gap-3"
            >
              <HiCheckCircle className="text-2xl" />
              <span>Message sent successfully! We'll get back to you soon.</span>
            </motion.div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <HiUser className="absolute left-4 top-4 text-slate-400 text-xl" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
              />
            </div>

            <div className="relative">
              <HiMail className="absolute left-4 top-4 text-slate-400 text-xl" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
              />
            </div>

            <div className="relative">
              <HiPencil className="absolute left-4 top-4 text-slate-400 text-xl" />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 text-white pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-primary-500 outline-none resize-none"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg font-semibold text-lg disabled:opacity-50 hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
