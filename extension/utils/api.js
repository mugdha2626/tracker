const API_BASE_URL = 'http://localhost:3000/api';
class API {
  static async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = { ...defaultOptions, ...options };

    try {
      console.log(`API Request: ${config.method} ${url}`);

      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      console.log(`API Response: ${url}`, data);
      return data;

    } catch (error) {
      console.error(`API Error: ${url}`, error);
      throw new Error(`Failed to ${config.method.toLowerCase()} ${endpoint}: ${error.message}`);
    }
  }

  static async getAllClasses() {
    return await this.request('/classes');
  }

  static async searchClasses(searchTerm) {
    if (!searchTerm || searchTerm.trim().length < 2) {
      throw new Error('Search term must be at least 2 characters');
    }

    const encodedTerm = encodeURIComponent(searchTerm.trim());
    return await this.request(`/classes/search?q=${encodedTerm}`);
  }

  static async getAssignmentsByClassId(classId) {
    if (!classId) {
      throw new Error('Class ID is required');
    }

    return await this.request(`/classes/${classId}/assignments`);
  }

  static async getAssignmentsByClassCode(classCode) {
    if (!classCode) {
      throw new Error('Class code is required');
    }

    const encodedCode = encodeURIComponent(classCode.trim().toUpperCase());
    return await this.request(`/classes/${encodedCode}/by-code/assignments`);
  }

  static async getAssignmentsForClasses(classIds) {
    if (!Array.isArray(classIds) || classIds.length === 0) {
      return { assignments: [] };
    }

    try {
      const promises = classIds.map(classId =>
        this.getAssignmentsByClassId(classId).catch(error => {
          console.warn(`Failed to get assignments for class ${classId}:`, error);
          return { assignments: [] };
        })
      );

      const results = await Promise.all(promises);
      const allAssignments = [];
      results.forEach((result, index) => {
        if (result.assignments && Array.isArray(result.assignments)) {
          result.assignments.forEach(assignment => {
            allAssignments.push({
              ...assignment,
              classId: classIds[index],
              classCode: result.classCode,
              className: result.className
            });
          });
        }
      });

      allAssignments.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

      return {
        success: true,
        assignments: allAssignments,
        count: allAssignments.length
      };

    } catch (error) {
      console.error('Error fetching assignments for multiple classes:', error);
      throw error;
    }
  }
  static async testConnection() {
    try {
      const response = await fetch(API_BASE_URL.replace('/api', ''));
      const data = await response.json();
      return data.status === 'healthy';
    } catch (error) {
      console.error('API connection test failed:', error);
      return false;
    }
  }
}

window.API = API;