import express from 'express'
import Event from '../models/Event.js'

const router = express.Router()

// Get all events
router.get('/', async (req, res) => {
  try {
    const { category, upcoming } = req.query
    const filter = { isPublic: true }
    
    if (category) filter.category = category
    if (upcoming === 'true') filter.date = { $gte: new Date() }

    const events = await Event.find(filter).sort({ date: 1 })
    res.json({ success: true, data: events })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' })
    }
    res.json({ success: true, data: event })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Create event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body)
    await event.save()
    res.status(201).json({ success: true, data: event })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Register for event
router.post('/:id/register', async (req, res) => {
  try {
    const { userId } = req.body
    const event = await Event.findById(req.params.id)
    
    if (event.registeredAttendees.length >= event.capacity) {
      return res.status(400).json({ success: false, message: 'Event is full' })
    }

    event.registeredAttendees.push(userId)
    await event.save()
    
    res.json({ success: true, message: 'Registered successfully' })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
