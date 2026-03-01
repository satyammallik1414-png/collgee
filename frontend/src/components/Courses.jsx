import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaFlask, FaBriefcase, FaPalette, FaRobot, FaHeartbeat } from 'react-icons/fa'
import { coursesAPI } from '../services/api'

const CourseCard = ({ icon: Icon, title, description, duration, students }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white p-8 rounded-2xl border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-lg hover:shadow-education overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
          <Icon className="text-3xl text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-neutral-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-between items-center text-sm text-neutral-500 mb-6">
          <span className="font-medium">{duration}</span>
          <span className="font-medium">{students} students</span>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const response = await coursesAPI.getAll()
      if (response.data.success && response.data.data.length > 0) {
        setCourses(response.data.data.map(course => ({
          icon: getIconForCategory(course.category),
          title: course.title,
          description: course.description,
          duration: course.duration,
          students: `${course.enrolledStudents}+`
        })))
      } else {
        // Fallback to static data if API fails or returns empty
        setCourses(staticCourses)
      }
    } catch (error) {
      console.error('Failed to fetch courses:', error)
      setCourses(staticCourses)
    } finally {
      setLoading(false)
    }
  }

  const getIconForCategory = (category) => {
    const icons = {
      'Computer Science': FaCode,
      'Business': FaBriefcase,
      'Engineering': FaFlask,
      'Design': FaPalette,
      'AI': FaRobot,
      'Healthcare': FaHeartbeat
    }
    return icons[category] || FaCode
  }

  const staticCourses = [
    {
      icon: FaCode,
      title: 'Computer Science',
      description: 'Master programming, AI, and software development with hands-on projects and industry mentorship.',
      duration: '4 Years',
      students: '2,500+'
    },
    {
      icon: FaBriefcase,
      title: 'Business Administration',
      description: 'Learn strategic management, entrepreneurship, and leadership skills for the modern business world.',
      duration: '4 Years',
      students: '3,200+'
    },
    {
      icon: FaFlask,
      title: 'Engineering',
      description: 'Innovative programs in mechanical, electrical, and civil engineering with state-of-the-art labs.',
      duration: '4 Years',
      students: '4,100+'
    },
    {
      icon: FaPalette,
      title: 'Design & Arts',
      description: 'Explore creativity through graphic design, animation, and digital media production.',
      duration: '3 Years',
      students: '1,800+'
    },
    {
      icon: FaRobot,
      title: 'Artificial Intelligence',
      description: 'Dive into machine learning, neural networks, and the future of intelligent systems.',
      duration: '4 Years',
      students: '1,500+'
    },
    {
      icon: FaHeartbeat,
      title: 'Healthcare Sciences',
      description: 'Comprehensive programs in nursing, pharmacy, and medical technology with clinical experience.',
      duration: '4 Years',
      students: '2,900+'
    }
  ]

  return (
    <section id="courses" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-education-pattern opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
            Our <span className="text-gradient-education">Programs</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover world-class programs designed to prepare you for tomorrow's challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
