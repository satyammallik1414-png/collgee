import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiUser, HiPencil, HiCheckCircle } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { contactAPI } from '../services/api'

const ContactPage = () => {
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
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      details: ['123 University Avenue', 'Education City, EC 12345', 'United States'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      details: ['Main: +1 (555) 123-4567', 'Admissions: +1 (555) 123-4568', 'Support: +1 (555) 123-4569'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: HiMail,
      title: 'Email Us',
      details: ['info@eliteuniversity.edu', 'admissions@eliteuniversity.edu', 'support@eliteuniversity.edu'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: HiClock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const departments = [
    { name: 'Admissions Office', email: 'admissions@eliteuniversity.edu', phone: '+1 (555) 123-4568' },
    { name: 'Student Services', email: 'students@eliteuniversity.edu', phone: '+1 (555) 123-4570' },
    { name: 'Financial Aid', email: 'financialaid@eliteuniversity.edu', phone: '+1 (555) 123-4571' },
    { name: 'International Office', email: 'international@eliteuniversity.edu', phone: '+1 (555) 123-4572' },
    { name: 'Career Services', email: 'careers@eliteuniversity.edu', phone: '+1 (555) 123-4573' },
    { name: 'IT Support', email: 'itsupport@eliteuniversity.edu', phone: '+1 (555) 123-4574' }
  ]

  const faqs = [
    {
      question: 'How do I apply for admission?',
      answer: 'You can apply online through our application portal. Click the "Apply Now" button and follow the step-by-step process.'
    },
    {
      question: 'What are the application deadlines?',
      answer: 'Fall semester: June 1st, Spring semester: November 1st. Early decision deadlines are 2 months prior.'
    },
    {
      question: 'Do you offer campus tours?',
      answer: 'Yes! We offer both in-person and virtual campus tours. Schedule yours through our admissions office.'
    },
    {
      question: 'What financial aid options are available?',
      answer: 'We offer scholarships, grants, work-study programs, and student loans. Contact our financial aid office for details.'
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
              Get In <span className="text-gradient-education">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              We're here to help! Reach out to us with any questions, concerns, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education"
              >
                <div className={`bg-gradient-to-r ${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <info.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-neutral-600 text-sm mb-1">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

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
                    className="w-full bg-slate-800 text-white pl-12 pr-4 py-4 rounded-xl border border-slate-700 focus:border-primary-500 outline-none transition-all"
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
                    className="w-full bg-slate-800 text-white pl-12 pr-4 py-4 rounded-xl border border-slate-700 focus:border-primary-500 outline-none transition-all"
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
                    className="w-full bg-slate-800 text-white pl-12 pr-4 py-4 rounded-xl border border-slate-700 focus:border-primary-500 outline-none transition-all"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 focus:border-primary-500 outline-none resize-none transition-all"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University Location"
                />
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex gap-4 mb-6">
                  {[
                    { Icon: FaFacebook, color: 'hover:text-blue-500' },
                    { Icon: FaTwitter, color: 'hover:text-sky-500' },
                    { Icon: FaInstagram, color: 'hover:text-pink-500' },
                    { Icon: FaLinkedin, color: 'hover:text-blue-600' },
                    { Icon: FaYoutube, color: 'hover:text-red-500' }
                  ].map(({ Icon, color }, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`text-slate-400 ${color} text-3xl transition-colors`}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
                <p className="text-slate-400">
                  Follow us on social media for the latest updates, events, and campus news!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Department Contacts</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Reach out to specific departments for specialized assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-primary-500 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">{dept.name}</h3>
                <div className="space-y-2">
                  <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-slate-400 hover:text-primary-500 transition-colors">
                    <HiMail />
                    <span className="text-sm">{dept.email}</span>
                  </a>
                  <a href={`tel:${dept.phone}`} className="flex items-center gap-2 text-slate-400 hover:text-primary-500 transition-colors">
                    <HiPhone />
                    <span className="text-sm">{dept.phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
