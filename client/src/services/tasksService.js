import ApiService from './apiService';

class TasksService extends ApiService {
  constructor() {
    super();
  }

  fetchTask(taskId) {
    return this.get(`/tasks/${taskId}`);
  }
}

export default TasksService;