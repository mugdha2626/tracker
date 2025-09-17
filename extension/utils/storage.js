class Storage {
  static async get(keys) {
    return new Promise((resolve) => {
      chrome.storage.local.get(keys, (result) => {
        resolve(result);
      });
    });
  }

  static async set(data) {
    return new Promise((resolve) => {
      chrome.storage.local.set(data, () => {
        resolve();
      });
    });
  }

  static async remove(keys) {
    return new Promise((resolve) => {
      chrome.storage.local.remove(keys, () => {
        resolve();
      });
    });
  }

  static async clear() {
    return new Promise((resolve) => {
      chrome.storage.local.clear(() => {
        resolve();
      });
    });
  }

  static async getJoinedClasses() {
    const result = await this.get(['joinedClasses']);
    return result.joinedClasses || [];
  }

  static async joinClass(classData) {
    const joinedClasses = await this.getJoinedClasses();
    const isAlreadyJoined = joinedClasses.some(cls => cls._id === classData._id);

    if (!isAlreadyJoined) {
      joinedClasses.push({
        _id: classData._id,
        classCode: classData.classCode,
        className: classData.className,
        instructor: classData.instructor,
        semester: classData.semester,
        department: classData.department,
        officeHours: classData.officeHours || [], 
        joinedAt: new Date().toISOString()
      });

      await this.set({ joinedClasses });
      console.log(`Joined class: ${classData.classCode}`);
    }

    return joinedClasses;
  }
  static async leaveClass(classId) {
    const joinedClasses = await this.getJoinedClasses();
    const updatedClasses = joinedClasses.filter(cls => cls._id !== classId);

    await this.set({ joinedClasses: updatedClasses });
    console.log(`Left class: ${classId}`);

    return updatedClasses;
  }
  static async isClassJoined(classId) {
    const joinedClasses = await this.getJoinedClasses();
    return joinedClasses.some(cls => cls._id === classId);
  }

  static async getCompletedAssignments() {
    const result = await this.get(['completedAssignments']);
    return result.completedAssignments || [];
  }

  static async markAssignmentCompleted(assignmentId, classId) {
    const completed = await this.getCompletedAssignments();

    const completionData = {
      assignmentId,
      classId,
      completedAt: new Date().toISOString()
    };
    const filtered = completed.filter(item =>
      !(item.assignmentId === assignmentId && item.classId === classId)
    );

    filtered.push(completionData);

    await this.set({ completedAssignments: filtered });
    console.log(`Marked assignment completed: ${assignmentId}`);

    return filtered;
  }

  static async markAssignmentIncomplete(assignmentId, classId) {
    const completed = await this.getCompletedAssignments();
    const filtered = completed.filter(item =>
      !(item.assignmentId === assignmentId && item.classId === classId)
    );

    await this.set({ completedAssignments: filtered });
    console.log(`Marked assignment incomplete: ${assignmentId}`);

    return filtered;
  }

  static async isAssignmentCompleted(assignmentId, classId) {
    const completed = await this.getCompletedAssignments();
    return completed.some(item =>
      item.assignmentId === assignmentId && item.classId === classId
    );
  }

  static async getSettings() {
    const result = await this.get(['settings']);
    const defaultSettings = {
      notificationsEnabled: true,
      reminderTime: 24, 
      openNotificationsEnabled: true,
      dueSoonThreshold: 48, 
    };

    return { ...defaultSettings, ...result.settings };
  }

  static async updateSettings(newSettings) {
    const currentSettings = await this.getSettings();
    const updatedSettings = { ...currentSettings, ...newSettings };

    await this.set({ settings: updatedSettings });
    console.log('⚙️ Updated settings:', updatedSettings);

    return updatedSettings;
  }

  static async getAllData() {
    const result = await this.get(null); 
    return result;
  }

  static async exportData() {
    const data = await this.getAllData();
    return JSON.stringify(data, null, 2);
  }
  static async importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      await this.clear();
      await this.set(data);
      console.log('Data imported successfully');
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
}
window.Storage = Storage;