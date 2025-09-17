const express = require('express');
const Class = require('../models/Class');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const classes = await Class.find(
      { isActive: true }, 
      {
        classCode: 1,
        className: 1,
        instructor: 1,
        semester: 1,
        department: 1,
        description: 1,
        assignmentCount: 1, 
        officeHours: 1 
      }
    ).sort({ department: 1, classCode: 1 });

    res.json({
      success: true,
      count: classes.length,
      classes: classes
    });

  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch classes',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

router.get('/search', async (req, res) => {
  try {
    const searchTerm = req.query.q;

    if (!searchTerm || searchTerm.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Search query must be at least 2 characters long'
      });
    }
    const classes = await Class.find(
      {
        $and: [
          { isActive: true },
          {
            $or: [
              { className: { $regex: searchTerm, $options: 'i' } },
              { classCode: { $regex: searchTerm, $options: 'i' } },
              { department: { $regex: searchTerm, $options: 'i' } },
              { instructor: { $regex: searchTerm, $options: 'i' } }
            ]
          }
        ]
      },
      {
        classCode: 1,
        className: 1,
        instructor: 1,
        semester: 1,
        department: 1,
        description: 1,
        assignmentCount: 1,
        officeHours: 1
      }
    ).sort({ department: 1, classCode: 1 })
      .limit(20);

    res.json({
      success: true,
      count: classes.length,
      query: searchTerm,
      classes: classes
    });

  } catch (error) {
    console.error('Error searching classes:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search classes',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});
router.get('/:classId/assignments', async (req, res) => {
  try {
    const classId = req.params.classId;
    const classData = await Class.findById(classId, {
      classCode: 1,
      className: 1,
      assignments: 1
    });

    if (!classData) {
      return res.status(404).json({
        success: false,
        error: 'Class not found'
      });
    }
    const activeAssignments = classData.assignments
      .filter(assignment => assignment.isActive)
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    res.json({
      success: true,
      classCode: classData.classCode,
      className: classData.className,
      count: activeAssignments.length,
      assignments: activeAssignments
    });

  } catch (error) {
    console.error('Error fetching assignments:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid class ID format'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to fetch assignments',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});
router.get('/:classCode/by-code/assignments', async (req, res) => {
  try {
    const classCode = req.params.classCode.toUpperCase();

    const classData = await Class.findOne(
      { classCode: classCode, isActive: true },
      {
        classCode: 1,
        className: 1,
        assignments: 1
      }
    );

    if (!classData) {
      return res.status(404).json({
        success: false,
        error: `Class with code ${classCode} not found`
      });
    }
    const activeAssignments = classData.assignments
      .filter(assignment => assignment.isActive)
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    res.json({
      success: true,
      classId: classData._id,
      classCode: classData.classCode,
      className: classData.className,
      count: activeAssignments.length,
      assignments: activeAssignments
    });

  } catch (error) {
    console.error('Error fetching assignments by class code:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch assignments',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;