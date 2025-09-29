// Hardcoded class data to replace database fetching

const classes = {
  CS211: {
    _id: 'cs211_hardcoded',
    classCode: 'CS211',
    className: 'Computer Science 211 (CP 1)',
    instructor: 'Ethan',
    semester: 'Fall 2025',
    department: 'Computer Science',
    description: 'Competitive Programming 1 - Data structures, algorithms, and problem-solving techniques.',
    isActive: true,
    assignmentCount: 10,
    assignments: [
      {
        _id: 'cs211_assignment_1',
        title: 'Topic 3: Divide and Conquer, Meet in the Middle',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-09-18T13:00:00Z'),
        dueDate: new Date('2025-09-25T03:59:59Z'),
        points: 4,
        tags: ['divide-conquer', 'algorithms'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_2',
        title: 'Topic 4: Bisection/BSTA, Meet in the Middle',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-09-25T13:00:00Z'),
        dueDate: new Date('2025-10-02T03:59:59Z'),
        points: 4,
        tags: ['binary-search', 'algorithms'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_3',
        title: 'Topic 5: Intro to Dynamic Programming',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-10-01T13:00:00Z'),
        dueDate: new Date('2025-10-08T03:59:59Z'),
        points: 4,
        tags: ['dynamic-programming', 'algorithms'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_4',
        title: 'Topic 6: DP Applications and 2 Pointer Technique',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-10-08T13:00:00Z'),
        dueDate: new Date('2025-10-15T03:59:59Z'),
        points: 4,
        tags: ['dynamic-programming', 'two-pointers'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_5',
        title: 'Topic 7: DP2',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-10-15T13:00:00Z'),
        dueDate: new Date('2025-10-22T03:59:59Z'),
        points: 4,
        tags: ['dynamic-programming', 'advanced'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_6',
        title: 'Topic 8: Graphs 1: Review, DFS/BFS, CC/SCC',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-10-22T13:00:00Z'),
        dueDate: new Date('2025-10-29T03:59:59Z'),
        points: 4,
        tags: ['graphs', 'dfs', 'bfs'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_7',
        title: 'Topic 9: Graphs 2: Floodfill and Topological Sort Intro',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-10-29T13:00:00Z'),
        dueDate: new Date('2025-11-05T03:59:59Z'),
        points: 4,
        tags: ['graphs', 'floodfill', 'topological-sort'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_8',
        title: 'Topic 10: Graphs 3: Shortest Paths and CP2 Introduction',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-11-05T14:00:00Z'),
        dueDate: new Date('2025-11-12T03:59:59Z'),
        points: 4,
        tags: ['graphs', 'shortest-paths', 'dijkstra'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      },
      {
        _id: 'cs211_assignment_9',
        title: 'Topic 11: Random Problem Solving',
        type: 'assignment',
        description: '',
        openDate: new Date('2025-11-12T14:00:00Z'),
        dueDate: new Date('2025-11-19T03:59:59Z'),
        points: 4,
        tags: ['problem-solving', 'mixed'],
        submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall',
        isActive: true
      }
    ],
    officeHours: [
      {
        day: 'Monday',
        startTime: '9:30 AM',
        endTime: '10:45 AM',
        room: 'DSAI B024',
        instructor: 'Deming Chu',
        type: 'office-hours'
      },
      {
        day: 'Monday',
        startTime: '10:30 AM',
        endTime: '12:00 PM',
        room: 'DSAI B047',
        instructor: 'Varun Asuri',
        type: 'office-hours'
      },
      {
        day: 'Monday',
        startTime: '10:30 AM',
        endTime: '11:30 AM',
        room: 'LWSN 2142V',
        instructor: 'Ethan (Instructor)',
        type: 'office-hours'
      },
      {
        day: 'Wednesday',
        startTime: '10:30 AM',
        endTime: '12:00 PM',
        room: 'DSAI B047',
        instructor: 'Varun Asuri',
        type: 'office-hours'
      },
      {
        day: 'Wednesday',
        startTime: '3:30 PM',
        endTime: '4:30 PM',
        room: 'DSAI B061',
        instructor: 'Angela Qian',
        type: 'office-hours'
      },
      {
        day: 'Wednesday',
        startTime: '4:30 PM',
        endTime: '5:30 PM',
        room: 'DSAI B047',
        instructor: 'Matthew Li',
        type: 'office-hours'
      },
      {
        day: 'Thursday',
        startTime: '9:30 AM',
        endTime: '11:00 AM',
        room: 'DSAI B063',
        instructor: 'Segyul Park',
        type: 'office-hours'
      },
      {
        day: 'Thursday',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        room: 'DSAI B055',
        instructor: 'Pratyanch Jain',
        type: 'office-hours'
      },
      {
        day: 'Thursday',
        startTime: '5:00 PM',
        endTime: '6:00 PM',
        room: 'LWSN 1142',
        instructor: 'Multiple TAs',
        type: 'office-hours'
      }
    ]
  },

  CS250: {
    _id: 'cs250_hardcoded',
    classCode: 'CS250',
    className: 'Computer Architecture',
    department: 'CS',
    instructor: 'George Adams',
    semester: 'Fall 2024',
    isActive: true,
    assignmentCount: 1,
    assignments: [
      {
        _id: 'cs250_assignment_1',
        title: 'HW05',
        type: 'assignment',
        description: 'ZyBooks assignment',
        openDate: new Date('2025-09-28T00:00:00Z'),
        dueDate: new Date('2025-10-03T03:59:59Z'),
        points: null,
        tags: ['zybooks'],
        submissionLink: 'https://learn.zybooks.com/zybook/PURDUECS25000AdamsFall2025',
        isActive: true
      }
    ],
    officeHours: [
      {
        day: 'Monday',
        startTime: '12:30 PM',
        endTime: '1:15 PM',
        room: 'WALC outdoor seating, clock tower side',
        instructor: 'George Adams'
      },
      {
        day: 'Monday',
        startTime: '2:45 PM',
        endTime: '4:00 PM',
        room: 'DSAI 1139B',
        instructor: 'George Adams'
      },
      {
        day: 'Wednesday',
        startTime: '12:30 PM',
        endTime: '1:15 PM',
        room: 'WALC outdoor seating, clock tower side',
        instructor: 'George Adams'
      },
      {
        day: 'Wednesday',
        startTime: '2:45 PM',
        endTime: '4:00 PM',
        room: 'DSAI 1139B',
        instructor: 'George Adams'
      },
      {
        day: 'Friday',
        startTime: '12:30 PM',
        endTime: '1:15 PM',
        room: 'WALC outdoor seating, clock tower side',
        instructor: 'George Adams'
      },
      {
        day: 'Monday',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        room: 'LWSN B160',
        instructor: 'Apoorva Vashisth'
      },
      {
        day: 'Monday',
        startTime: '9:30 AM',
        endTime: '10:30 AM',
        room: 'LWSN B160',
        instructor: 'Ali Aqdas'
      },
      {
        day: 'Monday',
        startTime: '10:30 AM',
        endTime: '12:00 PM',
        room: 'LWSN B160',
        instructor: 'Alaric Chen'
      },
      {
        day: 'Monday',
        startTime: '1:00 PM',
        endTime: '3:00 PM',
        room: 'LWSN B160',
        instructor: 'Nathan Reed'
      },
      {
        day: 'Tuesday',
        startTime: '9:30 AM',
        endTime: '10:30 AM',
        room: 'LWSN B146',
        instructor: 'Zheng Zhang'
      },
      {
        day: 'Tuesday',
        startTime: '1:30 PM',
        endTime: '3:30 PM',
        room: 'LWSN B146',
        instructor: 'Austin Garrett'
      },
      {
        day: 'Tuesday',
        startTime: '3:30 PM',
        endTime: '4:30 PM',
        room: 'LWSN B146',
        instructor: 'Mohammad Sadegh Majidi Yazdi'
      },
      {
        day: 'Thursday',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        room: 'LWSN B146',
        instructor: 'Enda Zhao'
      },
      {
        day: 'Thursday',
        startTime: '1:30 PM',
        endTime: '2:30 PM',
        room: 'LWSN B146',
        instructor: 'Hanxiao Lu'
      },
      {
        day: 'Thursday',
        startTime: '2:30 PM',
        endTime: '3:30 PM',
        room: 'LWSN B146',
        instructor: 'Hannah Shaw'
      },
      {
        day: 'Thursday',
        startTime: '3:30 PM',
        endTime: '4:30 PM',
        room: 'LWSN B146',
        instructor: 'Eunice Lee'
      },
      {
        day: 'Friday',
        startTime: '12:30 PM',
        endTime: '1:30 PM',
        room: 'LWSN B146',
        instructor: 'Hanxiao Lu'
      },
      {
        day: 'Friday',
        startTime: '1:30 PM',
        endTime: '2:30 PM',
        room: 'LWSN B146',
        instructor: 'Hannah Shaw'
      }
    ]
  },

  CS251: {
    _id: 'cs251_hardcoded',
    classCode: 'CS251',
    className: 'Data Structures and Algorithms',
    department: 'CS',
    instructor: 'Jeremiah Blocki and Michael Borkowski',
    semester: 'Fall 2025',
    isActive: true,
    assignmentCount: 18,
    assignments: [
      {
        _id: 'cs251_assignment_1',
        title: 'HW 1',
        type: 'homework',
        openDate: new Date('2025-08-26T00:00:00'),
        dueDate: new Date('2025-09-04T23:59:00'),
        submissionLink: 'https://www.gradescope.com/courses/1096890',
        isActive: true
      },
      {
        _id: 'cs251_assignment_2',
        title: 'Quiz 02',
        type: 'quiz',
        openDate: new Date('2025-08-26T00:00:00'),
        dueDate: new Date('2025-09-06T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_3',
        title: 'HW 2',
        type: 'homework',
        openDate: new Date('2025-09-04T00:00:00'),
        dueDate: new Date('2025-09-11T23:59:00'),
        submissionLink: 'https://www.gradescope.com/courses/1096890',
        isActive: true
      },
      {
        _id: 'cs251_assignment_4',
        title: 'Quiz 03',
        type: 'quiz',
        openDate: new Date('2025-09-06T00:00:00'),
        dueDate: new Date('2025-09-13T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_5',
        title: 'Quiz 04',
        type: 'quiz',
        openDate: new Date('2025-09-13T00:00:00'),
        dueDate: new Date('2025-09-20T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_6',
        title: 'Project 1',
        type: 'project',
        openDate: new Date('2025-09-06T00:00:00'),
        dueDate: new Date('2025-09-24T23:59:00'),
        submissionLink: null,
        isActive: true
      },
      {
        _id: 'cs251_assignment_7',
        title: 'Quiz 05',
        type: 'quiz',
        openDate: new Date('2025-09-20T00:00:00'),
        dueDate: new Date('2025-09-27T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_8',
        title: 'HW 3',
        type: 'homework',
        openDate: new Date('2025-09-18T00:00:00'),
        dueDate: new Date('2025-10-02T23:59:00'),
        submissionLink: 'https://www.gradescope.com/courses/1096890',
        isActive: true
      },
      {
        _id: 'cs251_assignment_9',
        title: 'Quiz 06',
        type: 'quiz',
        openDate: new Date('2025-09-27T00:00:00'),
        dueDate: new Date('2025-10-04T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_10',
        title: 'Exam 1',
        type: 'exam',
        openDate: new Date('2025-10-07T20:00:00'),
        dueDate: new Date('2025-10-07T20:00:00'),
        submissionLink: null,
        isActive: true
      },
      {
        _id: 'cs251_assignment_11',
        title: 'HW 4',
        type: 'homework',
        openDate: new Date('2025-10-02T00:00:00'),
        dueDate: new Date('2025-10-14T23:59:00'),
        submissionLink: 'https://www.gradescope.com/courses/1096890',
        isActive: true
      },
      {
        _id: 'cs251_assignment_12',
        title: 'Quiz 07',
        type: 'quiz',
        openDate: new Date('2025-10-11T00:00:00'),
        dueDate: new Date('2025-10-18T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_13',
        title: 'Project 2',
        type: 'project',
        openDate: new Date('2025-10-09T00:00:00'),
        dueDate: new Date('2025-10-23T23:59:00'),
        submissionLink: null,
        isActive: true
      },
      {
        _id: 'cs251_assignment_14',
        title: 'Quiz 08',
        type: 'quiz',
        openDate: new Date('2025-10-18T00:00:00'),
        dueDate: new Date('2025-10-25T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_15',
        title: 'HW 5',
        type: 'homework',
        openDate: new Date('2025-10-16T00:00:00'),
        dueDate: new Date('2025-10-29T23:59:00'),
        submissionLink: 'https://www.gradescope.com/courses/1096890',
        isActive: true
      },
      {
        _id: 'cs251_assignment_16',
        title: 'Quiz 09',
        type: 'quiz',
        openDate: new Date('2025-10-25T00:00:00'),
        dueDate: new Date('2025-11-01T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_17',
        title: 'Quiz 10',
        type: 'quiz',
        openDate: new Date('2025-11-01T00:00:00'),
        dueDate: new Date('2025-11-08T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_18',
        title: 'Project 3',
        type: 'project',
        openDate: new Date('2025-10-30T00:00:00'),
        dueDate: new Date('2025-11-13T23:59:00'),
        submissionLink: null,
        isActive: true
      },
      {
        _id: 'cs251_assignment_19',
        title: 'Quiz 11',
        type: 'quiz',
        openDate: new Date('2025-11-08T00:00:00'),
        dueDate: new Date('2025-11-15T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      },
      {
        _id: 'cs251_assignment_20',
        title: 'Exam 2',
        type: 'exam',
        openDate: new Date('2025-11-19T20:00:00'),
        dueDate: new Date('2025-11-19T20:00:00'),
        submissionLink: null,
        isActive: true
      },
      {
        _id: 'cs251_assignment_21',
        title: 'HW 6',
        type: 'homework',
        openDate: new Date('2025-11-13T00:00:00'),
        dueDate: new Date('2025-11-26T23:59:00'),
        submissionLink: 'https://www.gradescope.com/courses/1096890',
        isActive: true
      },
      {
        _id: 'cs251_assignment_22',
        title: 'Project 4',
        type: 'project',
        openDate: new Date('2025-11-20T00:00:00'),
        dueDate: new Date('2025-12-05T23:59:00'),
        submissionLink: null,
        isActive: true
      },
      {
        _id: 'cs251_assignment_23',
        title: 'Quiz 12',
        type: 'quiz',
        openDate: new Date('2025-11-29T00:00:00'),
        dueDate: new Date('2025-12-06T23:59:00'),
        submissionLink: 'brightspace',
        isActive: true
      }
    ],
    officeHours: [
      {
        day: 'Friday',
        startTime: '9:30 AM',
        endTime: '11:30 AM',
        room: 'LWSN 1165',
        instructor: 'Jeremiah Blocki'
      },
      {
        day: 'Tuesday',
        startTime: '2:30 PM',
        endTime: '4:00 PM',
        room: 'DSAI 1119-B',
        instructor: 'Michael Borkowski'
      },
      {
        day: 'Thursday',
        startTime: '2:30 PM',
        endTime: '4:00 PM',
        room: 'DSAI 1119-B',
        instructor: 'Michael Borkowski'
      },
      {
        day: 'Monday',
        startTime: '8:30 AM',
        endTime: '3:30 PM',
        room: 'Lawson Commons',
        instructor: 'TA'
      },
      {
        day: 'Monday',
        startTime: '5:30 PM',
        endTime: '6:30 PM',
        room: 'Lawson Commons',
        instructor: 'TA'
      },
      {
        day: 'Tuesday',
        startTime: '8:30 AM',
        endTime: '6:30 PM',
        room: 'Lawson Commons',
        instructor: 'TA'
      },
      {
        day: 'Wednesday',
        startTime: '8:30 AM',
        endTime: '3:30 PM',
        room: 'Lawson Commons',
        instructor: 'TA'
      },
      {
        day: 'Wednesday',
        startTime: '5:30 PM',
        endTime: '6:30 PM',
        room: 'Lawson Commons',
        instructor: 'TA'
      },
      {
        day: 'Thursday',
        startTime: '8:30 AM',
        endTime: '6:30 PM',
        room: 'Lawson Commons',
        instructor: 'TA'
      },
      {
        day: 'Friday',
        startTime: '8:30 AM',
        endTime: '9:30 AM',
        room: 'Lawson Commons',
        instructor: 'TA'
      },
      {
        day: 'Friday',
        startTime: '10:30 AM',
        endTime: '2:30 PM',
        room: 'Lawson Commons',
        instructor: 'TA'
      }
    ]
  }
};

// Helper functions to mimic database-like behavior
function getAllClasses() {
  return Object.values(classes).filter(cls => cls.isActive);
}

function getClassByCode(classCode) {
  const cls = classes[classCode.toUpperCase()];
  return cls && cls.isActive ? cls : null;
}

function getClassById(classId) {
  return Object.values(classes).find(cls => cls._id === classId && cls.isActive) || null;
}

function searchClasses(searchTerm) {
  const term = searchTerm.toLowerCase();
  return Object.values(classes).filter(cls => {
    if (!cls.isActive) return false;

    return cls.className.toLowerCase().includes(term) ||
           cls.classCode.toLowerCase().includes(term) ||
           cls.department.toLowerCase().includes(term) ||
           cls.instructor.toLowerCase().includes(term);
  });
}

function getAssignmentsByClassId(classId) {
  const cls = getClassById(classId);
  return cls ? cls.assignments.filter(assignment => assignment.isActive) : [];
}

function getAssignmentsByClassCode(classCode) {
  const cls = getClassByCode(classCode);
  return cls ? cls.assignments.filter(assignment => assignment.isActive) : [];
}

module.exports = {
  classes,
  getAllClasses,
  getClassByCode,
  getClassById,
  searchClasses,
  getAssignmentsByClassId,
  getAssignmentsByClassCode
};