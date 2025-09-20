console.log('TrackWork service worker started');

chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details.reason);

  if (details.reason === 'install') {
    console.log('Welcome to TrackWork!');
    setupNotificationAlarms();
  } else if (details.reason === 'update') {
    console.log('TrackWork updated');
    setupNotificationAlarms();
  }
});

chrome.runtime.onStartup.addListener(() => {
  console.log('TrackWork service worker started on browser startup');
  setupNotificationAlarms();
});

chrome.runtime.onMessage.addListener((message, sendResponse) => {
  console.log('Received message:', message);

  switch (message.type) {
    case 'TEST':
      sendResponse({ status: 'Service worker is running!' });
      break;

    case 'GET_ASSIGNMENTS':
      console.log('Request for assignments received');
      sendResponse({ status: 'Not implemented yet' });
      break;

    case 'TEST_NOTIFICATIONS':
      console.log('Testing notification system...');
      checkAssignmentDeadlines();
      sendResponse({ status: 'Notification check triggered' });
      break;

    case 'SETUP_ALARMS':
      console.log('Setting up alarms manually...');
      setupNotificationAlarms();
      sendResponse({ status: 'Alarms setup complete' });
      break;

    default:
      console.log('Unknown message type:', message.type);
      sendResponse({ error: 'Unknown message type' });
  }
  return true;
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Alarm triggered:', alarm.name);

  if (alarm.name === 'checkDeadlines') {
    checkAssignmentDeadlines();
  }
});

function setupNotificationAlarms() {
  console.log('Setting up notification alarms');

  chrome.alarms.clear('checkDeadlines');

  chrome.alarms.create('checkDeadlines', {
    delayInMinutes: 1, 
    periodInMinutes: 120 
  });
}

async function checkAssignmentDeadlines() {
  console.log('Checking assignment deadlines...');

  try {
    const result = await chrome.storage.local.get(['joinedClasses', 'assignmentStatus', 'sentNotifications']);
    const joinedClasses = result.joinedClasses || [];
    const assignmentStatus = result.assignmentStatus || {};
    const sentNotifications = result.sentNotifications || {};

    const now = new Date();
    const newSentNotifications = { ...sentNotifications };

    for (const joinedClass of joinedClasses) {
      for (const assignment of joinedClass.assignments || []) {
        const dueDate = new Date(assignment.dueDate);
        const timeUntilDue = dueDate.getTime() - now.getTime();
        const hoursUntilDue = timeUntilDue / (1000 * 60 * 60);

        if (assignmentStatus[assignment._id]?.completed) {
          continue;
        }

        if (timeUntilDue < 0) {
          continue;
        }

        if (hoursUntilDue <= 24 && hoursUntilDue > 23 && !sentNotifications[`${assignment._id}_24h`]) {
          await sendNotification(
            `Assignment Due Tomorrow`,
            `${assignment.title} for ${joinedClass.code} is due tomorrow at ${formatTime(dueDate)}`,
            assignment._id
          );
          newSentNotifications[`${assignment._id}_24h`] = true;
        }

        if (hoursUntilDue <= 3 && hoursUntilDue > 2 && !sentNotifications[`${assignment._id}_3h`]) {
          await sendNotification(
            `Assignment Due Soon`,
            `${assignment.title} for ${joinedClass.code} is due in 3 hours!`,
            assignment._id
          );
          newSentNotifications[`${assignment._id}_3h`] = true;
        }
      }
    }

    await chrome.storage.local.set({ sentNotifications: newSentNotifications });

  } catch (error) {
    console.error('Error checking deadlines:', error);
  }
}

async function sendNotification(title, message, assignmentId) {
  console.log('Sending notification:', title, message);

  await chrome.notifications.create(`assignment_${assignmentId}`, {
    type: 'basic',
    iconUrl: '../assets/icons/icon48.png',
    title: title,
    message: message,
    priority: 2
  });
}

function formatTime(date) {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

chrome.notifications.onClicked.addListener((notificationId) => {
  console.log('Notification clicked:', notificationId);

  chrome.notifications.clear(notificationId);

  chrome.action.openPopup();
});