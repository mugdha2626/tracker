const Class = require('./Class');

async function addCS250() {
  try {
    // Check if CS250 already exists
    const existingClass = await Class.findOne({ classCode: 'CS250' });
    if (existingClass) {
      console.log('CS250 already exists in database. Skipping creation.');
      return existingClass;
    }

    const cs250Data = {
      classCode: 'CS250',
      className: 'Computer Architecture',
      department: 'CS',
      instructor: 'George Adams',
      semester: 'Fall 2024',
      assignments: [
        {
          title: 'HW05',
          type: 'assignment',
          description: 'ZyBooks assignment',
          openDate: new Date('2025-09-28T00:00:00Z'),
          dueDate: new Date('2025-10-03T03:59:59Z'),
          points: null,
          tags: ['zybooks'],
          submissionLink: 'https://learn.zybooks.com/zybook/PURDUECS25000AdamsFall2025'
        }
      ],
      officeHours: [
        // Professor Office Hours
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
        // TA Office Hours
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
    };

    const cs250Class = new Class(cs250Data);
    await cs250Class.save();

    console.log('CS250 class added successfully to database');
    return cs250Class;

  } catch (error) {
    console.error('Error adding CS250 class:', error);
    throw error;
  }
}

module.exports = addCS250;