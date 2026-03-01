import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGraduationCap } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 border-t-4 border-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-2 rounded-lg">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Elite University</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Empowering minds, shaping futures since 1975.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -3 }}
                  href="#"
                  className="text-neutral-400 hover:text-primary-500 text-2xl transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Admissions', 'Academics', 'Research', 'Campus Life', 'Alumni'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              {['Undergraduate', 'Graduate', 'Doctoral', 'Online Courses', 'Certifications', 'Executive Education'].map((program) => (
                <li key={program}>
                  <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <HiLocationMarker className="text-primary-500 text-xl mt-1" />
                <span>123 University Ave, Education City, EC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <HiPhone className="text-primary-500 text-xl" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <HiMail className="text-primary-500 text-xl" />
                <span>info@eliteuniversity.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2026 Elite University. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-primary-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
