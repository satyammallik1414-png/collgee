import express from 'express'
import { body, validationResult } from 'express-validator'
import Application from '../models/Application.js'

const router = express.Router()

// Submit application
router.post('/', [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('program').notEmpty().withMessage('Program selection is required')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() })
    }

    const application = new Application(req.body)
    await application.save()

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get all applications (admin)
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 })
    res.json({ success: true, data: applications })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get application by ID
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' })
    }
    res.json({ success: true, data: application })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Update application status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    res.json({ success: true, data: application })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
