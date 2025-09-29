const express = require('express');
const {
  getAllClasses,
  getClassByCode,
  getClassById,
  searchClasses,
  getAssignmentsByClassId,
  getAssignmentsByClassCode
} = require('../data/hardcodedClasses');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const classes = getAllClasses().map(cls => ({
      _id: cls._id,
      classCode: cls.classCode,
      className: cls.className,
      instructor: cls.instructor,
      semester: cls.semester,
      department: cls.department,
      description: cls.description,
      assignmentCount: cls.assignmentCount,
      officeHours: cls.officeHours
    })).sort((a, b) => {
      if (a.department !== b.department) {
        return a.department.localeCompare(b.department);
      }
      return a.classCode.localeCompare(b.classCode);
    });

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

    const classes = searchClasses(searchTerm).map(cls => ({
      _id: cls._id,
      classCode: cls.classCode,
      className: cls.className,
      instructor: cls.instructor,
      semester: cls.semester,
      department: cls.department,
      description: cls.description,
      assignmentCount: cls.assignmentCount,
      officeHours: cls.officeHours
    })).sort((a, b) => {
      if (a.department !== b.department) {
        return a.department.localeCompare(b.department);
      }
      return a.classCode.localeCompare(b.classCode);
    }).slice(0, 20);

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
    const classData = getClassById(classId);

    if (!classData) {
      return res.status(404).json({
        success: false,
        error: 'Class not found'
      });
    }

    const activeAssignments = getAssignmentsByClassId(classId)
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
    const classData = getClassByCode(classCode);

    if (!classData) {
      return res.status(404).json({
        success: false,
        error: `Class with code ${classCode} not found`
      });
    }

    const activeAssignments = getAssignmentsByClassCode(classCode)
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