const Class = require('./Class');

// CS211 class data
const cs211Class = {
  classCode: 'CS211',
  className: 'Computer Science 211 (CP 1)',
  instructor: 'Ethan',
  semester: 'Fall 2025',
  department: 'Computer Science',
  description: 'Competitive Programming 1 - Data structures, algorithms, and problem-solving techniques.',
  assignments: [
    {
      title: 'Topic 3: Divide and Conquer, Meet in the Middle',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-09-18T13:00:00Z'), // Thursday 8am EST = 1pm UTC
      dueDate: new Date('2025-09-25T03:59:59Z'),   // Thursday 11:59pm EST = 3:59am UTC next day
      points: 4,
      tags: ['divide-conquer', 'algorithms'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 4: Bisection/BSTA, Meet in the Middle',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-09-25T13:00:00Z'),
      dueDate: new Date('2025-10-02T03:59:59Z'),
      points: 4,
      tags: ['binary-search', 'algorithms'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 5: Intro to Dynamic Programming',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-10-01T13:00:00Z'),
      dueDate: new Date('2025-10-08T03:59:59Z'),
      points: 4,
      tags: ['dynamic-programming', 'algorithms'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 6: DP Applications and 2 Pointer Technique',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-10-08T13:00:00Z'),
      dueDate: new Date('2025-10-15T03:59:59Z'),
      points: 4,
      tags: ['dynamic-programming', 'two-pointers'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 7: DP2',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-10-15T13:00:00Z'),
      dueDate: new Date('2025-10-22T03:59:59Z'),
      points: 4,
      tags: ['dynamic-programming', 'advanced'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 8: Graphs 1: Review, DFS/BFS, CC/SCC',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-10-22T13:00:00Z'),
      dueDate: new Date('2025-10-29T03:59:59Z'),
      points: 4,
      tags: ['graphs', 'dfs', 'bfs'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 9: Graphs 2: Floodfill and Topological Sort Intro',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-10-29T13:00:00Z'),
      dueDate: new Date('2025-11-05T03:59:59Z'), // 11:59pm EST
      points: 4,
      tags: ['graphs', 'floodfill', 'topological-sort'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 10: Graphs 3: Shortest Paths and CP2 Introduction',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-11-05T14:00:00Z'), // CET time
      dueDate: new Date('2025-11-12T03:59:59Z'),
      points: 4,
      tags: ['graphs', 'shortest-paths', 'dijkstra'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
    },
    {
      title: 'Topic 11: Random Problem Solving',
      type: 'assignment',
      description: '',
      openDate: new Date('2025-11-12T14:00:00Z'), // CET time
      dueDate: new Date('2025-11-19T03:59:59Z'),
      points: 4,
      tags: ['problem-solving', 'mixed'],
      submissionLink: 'https://purdue.kattis.com/courses/CS211-CP1/2025-Fall'
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
};

// Function to add CS211 to the database
async function addCS211() {
  try {
    console.log('Adding CS211 class to database...');

    // Check if CS211 already exists
    const existingClass = await Class.findOne({ classCode: 'CS211' });
    if (existingClass) {
      console.log('✅ CS211 already exists in database. Skipping creation.');
      return existingClass;
    }

    // Insert CS211 class (only if it doesn't exist)
    const insertedClass = await Class.create(cs211Class);
    console.log(`✅ Added CS211: ${insertedClass.className} with ${insertedClass.assignments.length} assignments`);

    // Log the assignments
    insertedClass.assignments.forEach(assignment => {
      const dueDate = new Date(assignment.dueDate).toLocaleDateString();
      console.log(` ${assignment.title} (Due: ${dueDate}, ${assignment.points} pts)`);
    });

    console.log('CS211 successfully added to database!');
    return insertedClass;

  } catch (error) {
    console.error('Error adding CS211:', error);
    throw error;
  }
}

module.exports = {
  addCS211,
  cs211Class
};