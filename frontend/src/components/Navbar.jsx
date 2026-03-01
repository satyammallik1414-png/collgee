import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaGraduationCap } from 'react-icons/fa'

const Navbar = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Courses', href: '/courses', type: 'route' },
    { name: 'Events', href: '/events', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-2 rounded-lg">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-neutral-800 block leading-tight">
                  Elite University
                </span>
                <span className="text-xs text-primary-600 font-medium">Excellence in Education</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link key={link.name} to={link.href}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-700 hover:text-primary-600 transition-colors font-medium cursor-pointer relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.span>
                </Link>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neutral-700 hover:text-primary-600 transition-colors font-medium relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            ))}
            <motion.button
              onClick={onApplyClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all"
            >
              Apply Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-800 text-3xl"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-t border-neutral-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                link.type === 'route' ? (
                  <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-neutral-700 hover:text-primary-600 transition-colors font-medium text-lg"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-neutral-700 hover:text-primary-600 transition-colors font-medium text-lg"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              <motion.button
                onClick={() => {
                  onApplyClick()
                  setIsMobileMenuOpen(false)
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
