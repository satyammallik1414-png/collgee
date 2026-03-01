import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Academic', 'Cultural', 'Sports', 'Career', 'Workshop', 'Seminar'],
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    default: 100
  },
  registeredAttendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  image: String,
  isPublic: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Event', eventSchema)
