console.log('TrackWork service worker started');

chrome.runtime.onInstalled.addListener((details) => {
  console.log('📦 Extension installed:', details.reason);

  if (details.reason === 'install') {
    console.log('Welcome to TrackWork!');
  } else if (details.reason === 'update') {
    console.log('TrackWork updated');
  }
});

chrome.runtime.onStartup.addListener(() => {
  console.log('TrackWork service worker started on browser startup');
});

chrome.runtime.onMessage.addListener((message, sendResponse) => {
  console.log('📨 Received message:', message);

  switch (message.type) {
    case 'TEST':
      sendResponse({ status: 'Service worker is running!' });
      break;

    case 'GET_ASSIGNMENTS':
      console.log('Request for assignments received');
      sendResponse({ status: 'Not implemented yet' });
      break;

    default:
      console.log('Unknown message type:', message.type);
      sendResponse({ error: 'Unknown message type' });
  }
  return true;
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Alarm triggered:', alarm.name);
});

setInterval(() => {
}, 30000);