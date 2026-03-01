import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import applicationRoutes from './routes/applications.js'
import courseRoutes from './routes/courses.js'
import eventRoutes from './routes/events.js'
import contactRoutes from './routes/contact.js'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/applications', applicationRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/auth', authRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
