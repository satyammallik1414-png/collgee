import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiCheckCircle } from 'react-icons/hi'
import { applicationsAPI } from '../services/api'

const ApplicationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    program: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await applicationsAPI.submit(formData)
      setSuccess(true)
      setTimeout(() => {
        onClose()
        setSuccess(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          program: '',
          address: { street: '', city: '', state: '', zipCode: '', country: '' }
        })
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit application')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
          >
            {success ? (
              <div className="text-center py-12">
                <HiCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-slate-300">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-white">Apply Now</h2>
                  <button onClick={onClose} className="text-slate-400 hover:text-white">
                    <HiX className="text-3xl" />
                  </button>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
                  />

                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
                  />

                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:border-primary-500 outline-none"
                  >
                    <option value="">Select Program</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Business Administration">Business Administration</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design & Arts">Design & Arts</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Healthcare Sciences">Healthcare Sciences</option>
                  </select>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ApplicationForm
