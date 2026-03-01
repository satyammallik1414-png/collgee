import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi'

const Hero = ({ onApplyClick }) => {
  const [text, setText] = useState('')
  const fullText = 'Shape Your Future with Excellence'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-education-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-800 mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {text}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary-500"
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-medium"
          >
            Join the leading institution where innovation meets education. 
            Transform your dreams into reality with world-class programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={onApplyClick}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(214, 137, 16, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-10 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
            >
              Apply Now
              <HiArrowRight className="text-xl" />
            </motion.button>

            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-500 text-primary-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all inline-block"
            >
              Explore Courses
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <HiChevronDown className="text-3xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
