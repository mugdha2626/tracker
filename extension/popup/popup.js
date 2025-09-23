class PopupApp {
  constructor() {
    this.currentSearchResults = [];
    this.joinedClasses = [];
    this.completedAssignments = [];

    this.initializeElements();
    this.bindEvents();
    this.initialize();
  }

  // Get DOM elements
  initializeElements() {
    this.searchInput = document.getElementById('searchInput');
    this.searchBtn = document.getElementById('searchBtn');
    this.refreshBtn = document.getElementById('refreshBtn');
    this.myClassesDiv = document.getElementById('myClasses');
    this.searchSection = document.getElementById('searchSection');
    this.searchResultsDiv = document.getElementById('searchResults');
    this.assignmentsDiv = document.getElementById('assignments');
    this.loadingIndicator = document.getElementById('loadingIndicator');
    this.errorMessage = document.getElementById('errorMessage');
  }

  // Bind event listeners
  bindEvents() {
    this.searchBtn.addEventListener('click', () => this.handleSearch());
    this.refreshBtn.addEventListener('click', () => this.handleRefresh());

    // Search on Enter key
    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSearch();
      }
    });

    // Clear search results when input is cleared
    this.searchInput.addEventListener('input', (e) => {
      if (e.target.value.trim() === '') {
        this.hideSearchResults();
      }
    });

    // Event delegation for dynamically created buttons
    document.addEventListener('click', (e) => {
      // Handle "Add" buttons
      if (e.target.classList.contains('add-btn') && !e.target.disabled) {
        const classId = e.target.getAttribute('data-class-id');

        // Find the full class data from search results
        const classData = this.currentSearchResults.find(cls => cls._id === classId);

        console.log('Full class data from search results:', classData);

        if (!classData) {
          console.error('Class not found in search results');
          this.showError('Failed to add class: Class data not found');
          return;
        }

        this.handleJoinClass(classData);
      }

      // Handle "Remove" buttons
      if (e.target.classList.contains('remove-btn')) {
        const classId = e.target.getAttribute('data-class-id');
        this.handleLeaveClass(classId);
      }

      // Handle assignment checkboxes
      if (e.target.classList.contains('complete-checkbox')) {
        const assignmentId = e.target.getAttribute('data-assignment-id');
        const classId = e.target.getAttribute('data-class-id');
        const isCompleted = e.target.checked;
        this.handleAssignmentToggle(assignmentId, classId, isCompleted);
      }

      // Handle office hours button
      if (e.target.classList.contains('office-hours-btn')) {
        const classId = e.target.getAttribute('data-class-id');
        this.toggleOfficeHours(classId);
      }
    });
  }

  // Initialize the popup
  async initialize() {
    try {
      this.showLoading('Loading your classes...');

      // Load data from storage
      this.joinedClasses = await Storage.getJoinedClasses();
      this.completedAssignments = await Storage.getCompletedAssignments();

      // Test API connection
      const isConnected = await API.testConnection();
      if (!isConnected) {
        this.showError('Cannot connect to Class Reminder server. Make sure it\'s running on localhost:3000');
        return;
      }

      // Render UI
      await this.renderMyClasses();
      await this.renderAssignments();

      this.hideLoading();

    } catch (error) {
      console.error('Error initializing popup:', error);
      this.showError('Failed to load data: ' + error.message);
      this.hideLoading();
    }
  }

  // Handle search button click
  async handleSearch() {
    const query = this.searchInput.value.trim();

    if (query.length < 2) {
      this.showError('Please enter at least 2 characters to search');
      return;
    }

    try {
      this.showLoading('Searching classes...');
      this.hideError();

      const result = await API.searchClasses(query);
      this.currentSearchResults = result.classes || [];

      this.renderSearchResults();
      this.showSearchResults();

      this.hideLoading();

    } catch (error) {
      console.error('Search error:', error);
      this.showError('Search failed: ' + error.message);
      this.hideLoading();
    }
  }

  // Handle refresh button click
  async handleRefresh() {
    await this.initialize();
  }

  // Handle joining a class
  async handleJoinClass(classData) {
    try {
      this.showLoading('Adding class...');

      await Storage.joinClass(classData);
      this.joinedClasses = await Storage.getJoinedClasses();

      await this.renderMyClasses();
      await this.renderAssignments();
      this.renderSearchResults(); // Update search results to show "Added" status

      this.hideLoading();

    } catch (error) {
      console.error('Error joining class:', error);
      this.showError('Failed to add class: ' + error.message);
      this.hideLoading();
    }
  }

  // Handle leaving a class
  async handleLeaveClass(classId) {
    try {
      this.showLoading('Removing class...');

      await Storage.leaveClass(classId);
      this.joinedClasses = await Storage.getJoinedClasses();

      await this.renderMyClasses();
      await this.renderAssignments();

      this.hideLoading();

    } catch (error) {
      console.error('Error leaving class:', error);
      this.showError('Failed to remove class: ' + error.message);
      this.hideLoading();
    }
  }

  // Handle assignment completion toggle
  async handleAssignmentToggle(assignmentId, classId, isCompleted) {
    try {
      if (isCompleted) {
        await Storage.markAssignmentCompleted(assignmentId, classId);
      } else {
        await Storage.markAssignmentIncomplete(assignmentId, classId);
      }

      this.completedAssignments = await Storage.getCompletedAssignments();
      await this.renderAssignments();

    } catch (error) {
      console.error('Error toggling assignment:', error);
      this.showError('Failed to update assignment: ' + error.message);
    }
  }

  // Handle office hours dropdown toggle
  toggleOfficeHours(classId) {
    const dropdown = document.getElementById(`office-hours-${classId}`);
    const button = document.querySelector(`[data-class-id="${classId}"].office-hours-btn`);

    if (dropdown && button) {
      const isVisible = dropdown.style.display !== 'none';

      // Close all other dropdowns first
      document.querySelectorAll('.office-hours-dropdown').forEach(dd => {
        dd.style.display = 'none';
      });
      document.querySelectorAll('.office-hours-btn').forEach(btn => {
        btn.classList.remove('active');
      });

      // Toggle current dropdown
      if (isVisible) {
        dropdown.style.display = 'none';
        button.classList.remove('active');
      } else {
        dropdown.style.display = 'block';
        button.classList.add('active');
      }
    }
  }

  // Render user's joined classes
  async renderMyClasses() {
    if (this.joinedClasses.length === 0) {
      this.myClassesDiv.innerHTML = '<p class="empty-state">No classes added yet. Search and add classes above!</p>';
      return;
    }

    const classesHtml = this.joinedClasses.map(classData => {
      console.log('Class data:', classData); // Debug line
      const hasOfficeHours = classData.officeHours && classData.officeHours.length > 0;
      console.log('Has office hours:', hasOfficeHours, classData.officeHours); // Debug line

      return `
        <div class="class-item added">
          <div class="class-header">
            <span class="class-code">${classData.classCode}</span>
            <div class="class-actions">
              ${hasOfficeHours ? `<button class="office-hours-btn" data-class-id="${classData._id}">Office Hours</button>` : ''}
              <button class="remove-btn" data-class-id="${classData._id}">Remove</button>
            </div>
          </div>
          <div class="class-name">${classData.className}</div>
          <div class="class-meta">
            <span>${classData.instructor}</span>
            <span>${classData.semester}</span>
          </div>
          ${hasOfficeHours ? `
            <div class="office-hours-dropdown" id="office-hours-${classData._id}" style="display: none;">
              <div class="office-hours-header">Office Hours</div>
              <div class="office-hours-list">
                ${classData.officeHours.map(oh => `
                  <div class="office-hour-item">
                    <div class="office-hour-day">${oh.day}</div>
                    <div class="office-hour-details">
                      <div class="office-hour-time">${oh.startTime} - ${oh.endTime}</div>
                      <div class="office-hour-location">${oh.room} • ${oh.instructor}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    this.myClassesDiv.innerHTML = classesHtml;
  }

  // Render search results
  renderSearchResults() {
    if (this.currentSearchResults.length === 0) {
      this.searchResultsDiv.innerHTML = '<p class="empty-state">No classes found. Try a different search term.</p>';
      return;
    }

    const resultsHtml = this.currentSearchResults.map(classData => {
      const isJoined = this.joinedClasses.some(joined => joined._id === classData._id);

      return `
        <div class="class-item ${isJoined ? 'added' : ''}">
          <div class="class-header">
            <span class="class-code">${classData.classCode}</span>
            ${isJoined
              ? '<span class="add-btn" style="background: #666; cursor: default;">Added</span>'
              : `<button class="add-btn"
                   data-class-id="${classData._id}"
                   data-class-code="${classData.classCode}"
                   data-class-name="${classData.className}"
                   data-instructor="${classData.instructor}"
                   data-semester="${classData.semester}"
                   data-department="${classData.department}">Add</button>`
            }
          </div>
          <div class="class-name">${classData.className}</div>
          <div class="class-meta">
            <span>${classData.instructor}</span>
            <span>${classData.semester} • ${classData.department}</span>
          </div>
        </div>
      `;
    }).join('');

    this.searchResultsDiv.innerHTML = resultsHtml;
  }

  // Render assignments
  async renderAssignments() {
    if (this.joinedClasses.length === 0) {
      this.assignmentsDiv.innerHTML = '<p class="empty-state">Add classes to see assignments</p>';
      return;
    }

    try {
      this.showLoading('Loading assignments...');

      const classIds = this.joinedClasses.map(cls => cls._id);
      const result = await API.getAssignmentsForClasses(classIds);
      const assignments = result.assignments || [];

      if (assignments.length === 0) {
        this.assignmentsDiv.innerHTML = '<p class="empty-state">No assignments found for your classes</p>';
        this.hideLoading();
        return;
      }

      // Sort assignments: incomplete first (by due date), then completed (by due date)
      const sortedAssignments = assignments.sort((a, b) => {
        const aCompleted = this.completedAssignments.some(completed =>
          completed.assignmentId === a._id && completed.classId === a.classId
        );
        const bCompleted = this.completedAssignments.some(completed =>
          completed.assignmentId === b._id && completed.classId === b.classId
        );

        // First sort by completion status
        if (aCompleted && !bCompleted) return 1; // a goes after b
        if (!aCompleted && bCompleted) return -1; // a goes before b

        // Within same completion status, sort by due date (soonest first)
        const aDueDate = new Date(a.dueDate);
        const bDueDate = new Date(b.dueDate);
        return aDueDate - bDueDate;
      });

      const assignmentsHtml = sortedAssignments.map(assignment => {
        const isCompleted = this.completedAssignments.some(completed =>
          completed.assignmentId === assignment._id && completed.classId === assignment.classId
        );

        const dueDate = new Date(assignment.dueDate);
        const now = new Date();
        const hoursUntilDue = (dueDate - now) / (1000 * 60 * 60);

        let dueDateClass = '';
        if (hoursUntilDue < 0) {
          dueDateClass = 'overdue';
        } else if (hoursUntilDue < 48) {
          dueDateClass = 'due-soon';
        }

        return `
          <div class="assignment-item ${isCompleted ? 'completed' : ''} ${dueDateClass}">
            <div class="assignment-header">
              <div class="assignment-title">${assignment.title}</div>
              <span class="assignment-type">${assignment.type}</span>
            </div>
            <div class="assignment-meta">${assignment.classCode} - ${assignment.className}</div>
            <div class="assignment-dates">
              <span>Due: ${dueDate.toLocaleDateString()} ${dueDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
              <span>${assignment.points} pts</span>
            </div>
            ${assignment.description ? `<div class="assignment-meta" style="margin-top: 4px;">${assignment.description}</div>` : ''}
            <div class="assignment-actions">
              <label>
                <input type="checkbox" class="complete-checkbox"
                  ${isCompleted ? 'checked' : ''}
                  data-assignment-id="${assignment._id}"
                  data-class-id="${assignment.classId}">
                Mark as completed
              </label>
              ${assignment.submissionLink ? `<a href="${assignment.submissionLink}" target="_blank" class="view-link">View Assignment</a>` : ''}
            </div>
          </div>
        `;
      }).join('');

      this.assignmentsDiv.innerHTML = assignmentsHtml;
      this.hideLoading();

    } catch (error) {
      console.error('Error loading assignments:', error);
      this.assignmentsDiv.innerHTML = '<p class="empty-state">Failed to load assignments</p>';
      this.hideLoading();
    }
  }

  // Show search results section
  showSearchResults() {
    this.searchSection.style.display = 'block';
  }

  // Hide search results section
  hideSearchResults() {
    this.searchSection.style.display = 'none';
    this.searchResultsDiv.innerHTML = '';
    this.currentSearchResults = [];
  }

  // Show loading indicator
  showLoading(message = 'Loading...') {
    this.loadingIndicator.querySelector('p').textContent = message;
    this.loadingIndicator.style.display = 'block';
  }

  // Hide loading indicator
  hideLoading() {
    this.loadingIndicator.style.display = 'none';
  }

  // Show error message
  showError(message) {
    this.errorMessage.textContent = message;
    this.errorMessage.style.display = 'block';

    // Auto-hide error after 5 seconds
    setTimeout(() => {
      this.hideError();
    }, 5000);
  }

  // Hide error message
  hideError() {
    this.errorMessage.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new PopupApp();
});

window.PopupApp = PopupApp;