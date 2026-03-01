import express from 'express'
import Course from '../models/Course.js'

const router = express.Router()

// Get all courses
router.get('/', async (req, res) => {
  try {
    const { category, level } = req.query
    const filter = { isActive: true }
    
    if (category) filter.category = category
    if (level) filter.level = level

    const courses = await Course.find(filter).populate('faculty')
    res.json({ success: true, data: courses })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('faculty')
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' })
    }
    res.json({ success: true, data: course })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Create course (admin)
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body)
    await course.save()
    res.status(201).json({ success: true, data: course })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Update course
router.put('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ success: true, data: course })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Delete course
router.delete('/:id', async (req, res) => {
  try {
    await Course.findByIdAndUpdate(req.params.id, { isActive: false })
    res.json({ success: true, message: 'Course deleted successfully' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
