import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaFlask, FaBriefcase, FaPalette, FaRobot, FaHeartbeat, FaSearch, FaFilter, FaClock, FaUsers, FaDollarSign, FaBook } from 'react-icons/fa'
import { coursesAPI } from '../services/api'

const CoursesPage = () => {
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState(null)

  const categories = ['All', 'Computer Science', 'Business', 'Engineering', 'Design', 'AI', 'Healthcare']
  const levels = ['All', 'Undergraduate', 'Graduate', 'Doctoral']

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

  const allCourses = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      category: 'Computer Science',
      level: 'Undergraduate',
      duration: '4 Years',
      credits: 120,
      tuitionFee: 45000,
      enrolledStudents: 2500,
      description: 'Comprehensive program covering software development, algorithms, data structures, AI, and machine learning.',
      highlights: ['Industry Projects', 'Internship Opportunities', 'Research Labs', 'Career Support'],
      prerequisites: ['High School Diploma', 'Mathematics Proficiency', 'Basic Programming Knowledge'],
      syllabus: [
        { semester: 1, courses: ['Programming Fundamentals', 'Discrete Mathematics', 'Computer Architecture', 'English Composition'] },
        { semester: 2, courses: ['Data Structures', 'Object-Oriented Programming', 'Database Systems', 'Statistics'] },
        { semester: 3, courses: ['Algorithms', 'Operating Systems', 'Web Development', 'Software Engineering'] },
        { semester: 4, courses: ['AI & Machine Learning', 'Computer Networks', 'Mobile Development', 'Capstone Project'] }
      ]
    },
    {
      id: 2,
      title: 'Master of Business Administration',
      category: 'Business',
      level: 'Graduate',
      duration: '2 Years',
      credits: 60,
      tuitionFee: 55000,
      enrolledStudents: 3200,
      description: 'Advanced business program focusing on leadership, strategy, finance, and entrepreneurship.',
      highlights: ['Global Networking', 'Executive Mentorship', 'Case Studies', 'Startup Incubator'],
      prerequisites: ['Bachelor Degree', 'Work Experience (2+ years)', 'GMAT/GRE Score'],
      syllabus: [
        { semester: 1, courses: ['Strategic Management', 'Financial Accounting', 'Marketing Management', 'Organizational Behavior'] },
        { semester: 2, courses: ['Operations Management', 'Business Analytics', 'Corporate Finance', 'Leadership Development'] },
        { semester: 3, courses: ['Entrepreneurship', 'International Business', 'Digital Marketing', 'Business Ethics'] },
        { semester: 4, courses: ['Capstone Project', 'Consulting Practicum', 'Electives', 'Thesis'] }
      ]
    },
    {
      id: 3,
      title: 'Bachelor of Engineering',
      category: 'Engineering',
      level: 'Undergraduate',
      duration: '4 Years',
      credits: 128,
      tuitionFee: 48000,
      enrolledStudents: 4100,
      description: 'Rigorous engineering program with specializations in mechanical, electrical, and civil engineering.',
      highlights: ['State-of-art Labs', 'Industry Partnerships', 'Co-op Programs', 'Professional Certification'],
      prerequisites: ['High School Diploma', 'Physics & Chemistry', 'Advanced Mathematics'],
      syllabus: [
        { semester: 1, courses: ['Engineering Mathematics', 'Physics', 'Engineering Drawing', 'Chemistry'] },
        { semester: 2, courses: ['Mechanics', 'Thermodynamics', 'Electrical Circuits', 'Materials Science'] },
        { semester: 3, courses: ['Fluid Mechanics', 'Control Systems', 'Manufacturing Processes', 'Engineering Design'] },
        { semester: 4, courses: ['Specialization Courses', 'Project Management', 'Senior Design Project', 'Internship'] }
      ]
    },
    {
      id: 4,
      title: 'Bachelor of Design & Arts',
      category: 'Design',
      level: 'Undergraduate',
      duration: '3 Years',
      credits: 90,
      tuitionFee: 42000,
      enrolledStudents: 1800,
      description: 'Creative program exploring graphic design, animation, UX/UI design, and digital media production.',
      highlights: ['Portfolio Development', 'Industry Tools', 'Creative Studios', 'Exhibition Opportunities'],
      prerequisites: ['High School Diploma', 'Portfolio Submission', 'Creative Aptitude Test'],
      syllabus: [
        { semester: 1, courses: ['Design Fundamentals', 'Color Theory', 'Typography', 'Digital Tools'] },
        { semester: 2, courses: ['Graphic Design', 'Web Design', 'Photography', 'Art History'] },
        { semester: 3, courses: ['UX/UI Design', 'Motion Graphics', 'Branding', '3D Modeling'] },
        { semester: 4, courses: ['Portfolio Project', 'Internship', 'Design Thinking', 'Graduation Exhibition'] }
      ]
    },
    {
      id: 5,
      title: 'Master of Artificial Intelligence',
      category: 'AI',
      level: 'Graduate',
      duration: '2 Years',
      credits: 48,
      tuitionFee: 58000,
      enrolledStudents: 1500,
      description: 'Advanced AI program covering machine learning, deep learning, neural networks, and AI ethics.',
      highlights: ['Research Opportunities', 'GPU Computing Labs', 'Industry Collaborations', 'Publication Support'],
      prerequisites: ['Bachelor in CS/Engineering', 'Programming Skills', 'Linear Algebra & Statistics'],
      syllabus: [
        { semester: 1, courses: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'] },
        { semester: 2, courses: ['Reinforcement Learning', 'Neural Networks', 'AI Ethics', 'Big Data Analytics'] },
        { semester: 3, courses: ['Advanced Topics in AI', 'Research Methodology', 'Thesis Proposal', 'Electives'] },
        { semester: 4, courses: ['Thesis Research', 'AI Applications', 'Industry Project', 'Defense'] }
      ]
    },
    {
      id: 6,
      title: 'Bachelor of Healthcare Sciences',
      category: 'Healthcare',
      level: 'Undergraduate',
      duration: '4 Years',
      credits: 130,
      tuitionFee: 50000,
      enrolledStudents: 2900,
      description: 'Comprehensive healthcare program with specializations in nursing, pharmacy, and medical technology.',
      highlights: ['Clinical Training', 'Hospital Partnerships', 'Simulation Labs', 'Professional Licensing Prep'],
      prerequisites: ['High School Diploma', 'Biology & Chemistry', 'Healthcare Aptitude'],
      syllabus: [
        { semester: 1, courses: ['Anatomy & Physiology', 'Medical Terminology', 'Healthcare Ethics', 'Chemistry'] },
        { semester: 2, courses: ['Microbiology', 'Pharmacology', 'Patient Care', 'Health Assessment'] },
        { semester: 3, courses: ['Clinical Practice', 'Medical Technology', 'Healthcare Management', 'Research Methods'] },
        { semester: 4, courses: ['Specialization', 'Clinical Internship', 'Capstone Project', 'Licensing Exam Prep'] }
      ]
    }
  ]

  useEffect(() => {
    fetchCourses()
  }, [])

  useEffect(() => {
    filterCourses()
  }, [searchTerm, selectedCategory, selectedLevel, courses])

  const fetchCourses = async () => {
    try {
      const response = await coursesAPI.getAll()
      if (response.data.success && response.data.data.length > 0) {
        setCourses(response.data.data)
      } else {
        setCourses(allCourses)
      }
    } catch (error) {
      console.error('Failed to fetch courses:', error)
      setCourses(allCourses)
    } finally {
      setLoading(false)
    }
  }

  const filterCourses = () => {
    let filtered = courses

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    if (selectedLevel !== 'All') {
      filtered = filtered.filter(course => course.level === selectedLevel)
    }

    setFilteredCourses(filtered)
  }

  const CourseCard = ({ course }) => {
    const Icon = getIconForCategory(course.category)
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        onClick={() => setSelectedCourse(course)}
        className="bg-white p-6 rounded-2xl border-2 border-neutral-200 hover:border-primary-400 transition-all cursor-pointer shadow-md hover:shadow-education"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
            <Icon className="text-2xl text-white" />
          </div>
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-bold text-neutral-800 mb-3">{course.title}</h3>
        <p className="text-neutral-600 mb-4 line-clamp-2">{course.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-neutral-600 text-sm">
            <FaClock className="text-primary-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-600 text-sm">
            <FaUsers className="text-primary-500" />
            <span>{course.enrolledStudents}+ students</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-600 text-sm">
            <FaBook className="text-primary-500" />
            <span>{course.credits} Credits</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-600 text-sm">
            <FaDollarSign className="text-primary-500" />
            <span>${course.tuitionFee.toLocaleString()}/yr</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 rounded-lg font-semibold shadow-md"
        >
          View Details
        </motion.button>
      </motion.div>
    )
  }

  const CourseModal = ({ course, onClose }) => {
    if (!course) return null
    const Icon = getIconForCategory(course.category)

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 w-16 h-16 rounded-xl flex items-center justify-center">
                <Icon className="text-3xl text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{course.title}</h2>
                <p className="text-primary-400 font-semibold">{course.category} • {course.level}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">×</button>
          </div>

          <p className="text-slate-300 text-lg mb-6">{course.description}</p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <FaClock className="text-3xl text-primary-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Duration</p>
              <p className="text-white font-bold">{course.duration}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <FaBook className="text-3xl text-primary-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Credits</p>
              <p className="text-white font-bold">{course.credits}</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <FaUsers className="text-3xl text-primary-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Students</p>
              <p className="text-white font-bold">{course.enrolledStudents}+</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <FaDollarSign className="text-3xl text-primary-500 mx-auto mb-2" />
              <p className="text-slate-400 text-sm">Tuition/Year</p>
              <p className="text-white font-bold">${course.tuitionFee.toLocaleString()}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Program Highlights</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <span className="text-primary-500">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Prerequisites</h3>
            <ul className="space-y-2">
              {course.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <span className="text-secondary-500">•</span>
                  <span>{prereq}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Curriculum Overview</h3>
            <div className="space-y-4">
              {course.syllabus.map((sem, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-xl">
                  <h4 className="text-primary-400 font-bold mb-2">Semester {sem.semester}</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {sem.courses.map((c, i) => (
                      <div key={i} className="text-slate-300 text-sm">• {c}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="bg-neutral-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-education-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6">
              Our <span className="text-gradient-education">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Discover world-class programs designed to prepare you for tomorrow's challenges
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-neutral-800 pl-12 pr-4 py-4 rounded-xl border-2 border-neutral-200 focus:border-primary-500 outline-none shadow-md"
              />
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-400 text-sm mb-2 block flex items-center gap-2">
                  <FaFilter /> Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-800 text-white p-3 rounded-xl border border-slate-700 focus:border-primary-500 outline-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-slate-400 text-sm mb-2 block flex items-center gap-2">
                  <FaFilter /> Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full bg-slate-800 text-white p-3 rounded-xl border border-slate-700 focus:border-primary-500 outline-none"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-neutral-600 font-medium">
            Showing {filteredCourses.length} of {courses.length} programs
          </div>

          {loading ? (
            <div className="text-center text-neutral-800 text-xl py-12">Loading courses...</div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center text-neutral-600 text-xl py-12">No courses found matching your criteria</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  )
}

export default CoursesPage
