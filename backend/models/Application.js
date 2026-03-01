import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  program: {
    type: String,
    required: [true, 'Program selection is required']
  },
  previousEducation: {
    institution: String,
    degree: String,
    graduationYear: Number,
    gpa: Number
  },
  status: {
    type: String,
    enum: ['pending', 'under_review', 'accepted', 'rejected'],
    default: 'pending'
  },
  documents: [{
    name: String,
    url: String,
    uploadedAt: Date
  }]
}, {
  timestamps: true
})

export default mongoose.model('Application', applicationSchema)
