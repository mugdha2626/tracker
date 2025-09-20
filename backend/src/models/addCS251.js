const Class = require('./Class');

async function addCS251() {
  try {
    // Check if CS251 already exists
    const existingClass = await Class.findOne({ code: 'CS251' });
    if (existingClass) {
      console.log('CS251 already exists in database. Skipping creation.');
      return existingClass;
    }

    const cs251Data = {
      code: 'CS251',
      name: 'Data Structures and Algorithms',
      department: 'CS',
      instructor: 'Jeremiah Blocki and Michael Borkowski',
      assignments: [
        {
          title: 'HW 1',
          type: 'homework',
          dueDate: new Date('2024-09-04T23:59:00'),
          submissionLink: 'https://www.gradescope.com/courses/1096890'
        },
        {
          title: 'Quiz 02',
          type: 'quiz',
          dueDate: new Date('2024-09-06T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'HW 2',
          type: 'homework',
          dueDate: new Date('2024-09-11T23:59:00'),
          submissionLink: 'https://www.gradescope.com/courses/1096890'
        },
        {
          title: 'Quiz 03',
          type: 'quiz',
          dueDate: new Date('2024-09-13T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'Quiz 04',
          type: 'quiz',
          dueDate: new Date('2024-09-20T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'Project 1',
          type: 'project',
          dueDate: new Date('2024-09-24T23:59:00'),
          submissionLink: null
        },
        {
          title: 'Quiz 05',
          type: 'quiz',
          dueDate: new Date('2024-09-27T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'HW 3',
          type: 'homework',
          dueDate: new Date('2024-10-02T23:59:00'),
          submissionLink: 'https://www.gradescope.com/courses/1096890'
        },
        {
          title: 'Quiz 06',
          type: 'quiz',
          dueDate: new Date('2024-10-04T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'Exam 1',
          type: 'exam',
          dueDate: new Date('2024-10-07T20:00:00'),
          submissionLink: null
        },
        {
          title: 'HW 4',
          type: 'homework',
          dueDate: new Date('2024-10-14T23:59:00'),
          submissionLink: 'https://www.gradescope.com/courses/1096890'
        },
        {
          title: 'Quiz 07',
          type: 'quiz',
          dueDate: new Date('2024-10-18T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'Project 2',
          type: 'project',
          dueDate: new Date('2024-10-23T23:59:00'),
          submissionLink: null
        },
        {
          title: 'Quiz 08',
          type: 'quiz',
          dueDate: new Date('2024-10-25T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'HW 5',
          type: 'homework',
          dueDate: new Date('2024-10-29T23:59:00'),
          submissionLink: 'https://www.gradescope.com/courses/1096890'
        },
        {
          title: 'Quiz 09',
          type: 'quiz',
          dueDate: new Date('2024-11-01T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'Quiz 10',
          type: 'quiz',
          dueDate: new Date('2024-11-08T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'Project 3',
          type: 'project',
          dueDate: new Date('2024-11-13T23:59:00'),
          submissionLink: null
        },
        {
          title: 'Quiz 11',
          type: 'quiz',
          dueDate: new Date('2024-11-15T23:59:00'),
          submissionLink: 'brightspace'
        },
        {
          title: 'Exam 2',
          type: 'exam',
          dueDate: new Date('2024-11-19T20:00:00'),
          submissionLink: null
        },
        {
          title: 'HW 6',
          type: 'homework',
          dueDate: new Date('2024-11-26T23:59:00'),
          submissionLink: 'https://www.gradescope.com/courses/1096890'
        },
        {
          title: 'Project 4',
          type: 'project',
          dueDate: new Date('2024-12-05T23:59:00'),
          submissionLink: null
        },
        {
          title: 'Quiz 12',
          type: 'quiz',
          dueDate: new Date('2024-12-06T23:59:00'),
          submissionLink: 'brightspace'
        }
      ],
      officeHours: [
        // Professor Office Hours
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
        // TA Office Hours
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
    };

    const cs251Class = new Class(cs251Data);
    await cs251Class.save();

    console.log('CS251 class added successfully to database');
    return cs251Class;

  } catch (error) {
    console.error('Error adding CS251 class:', error);
    throw error;
  }
}

module.exports = addCS251;