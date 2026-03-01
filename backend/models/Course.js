import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Computer Science', 'Business', 'Engineering', 'Design', 'AI', 'Healthcare']
  },
  level: {
    type: String,
    enum: ['Undergraduate', 'Graduate', 'Doctoral'],
    required: true
  },
  credits: {
    type: Number,
    required: true
  },
  tuitionFee: {
    type: Number,
    required: true
  },
  enrolledStudents: {
    type: Number,
    default: 0
  },
  faculty: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  }],
  syllabus: [{
    week: Number,
    topic: String,
    description: String
  }],
  prerequisites: [String],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Course', courseSchema)
