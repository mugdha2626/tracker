const mongoose = require('mongoose');
const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['assignment', 'quiz', 'exam', 'project', 'homework'],
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  openDate: {
    type: Date,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  points: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  submissionLink: {
    type: String,
    default: ''
  }
}, {
  timestamps: true 
});

const officeHourSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  startTime: {
    type: String,
    required: true 
  },
  endTime: {
    type: String,
    required: true 
  },
  room: {
    type: String,
    required: true 
  },
  instructor: {
    type: String,
    required: true 
  },
  type: {
    type: String,
    enum: ['office-hours', 'recitation', 'lab'],
    default: 'office-hours'
  }
});

const classSchema = new mongoose.Schema({
  classCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  className: {
    type: String,
    required: true,
    trim: true
  },
  instructor: {
    type: String,
    required: true,
    trim: true
  },
  semester: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  },
  assignments: [assignmentSchema], 
  officeHours: [officeHourSchema] 
}, {
  timestamps: true
});

classSchema.index({ classCode: 1, semester: 1 });
classSchema.index({ department: 1 });
classSchema.index({ className: 'text', description: 'text' });
classSchema.virtual('assignmentCount').get(function() {
  return this.assignments ? this.assignments.length : 0;
});

classSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Class', classSchema);