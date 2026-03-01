import express from 'express'
import { body, validationResult } from 'express-validator'
import Contact from '../models/Contact.js'

const router = express.Router()

// Submit contact form
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() })
    }

    const contact = new Contact(req.body)
    await contact.save()

    res.status(201).json({
      success: true,
      message: 'Message sent successfully. We will get back to you soon!'
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, data: contacts })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
