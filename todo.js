// script.js
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Function to fetch tasks from the server
function fetchTasks() {
  // AJAX request to fetch tasks
  // Update task list with fetched tasks
}

// Function to add a new task
function addTask(taskName) {
  
}

// Function to delete a task
function deleteTask(taskId) {
  // AJAX request to delete the task with the given ID
  // Update task list after deletion
}

// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskInput = document.getElementById('task');
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    addTask(taskName);
    taskInput.value = '';
  }
});

// Initial fetch of tasks when the page loads
document.addEventListener('DOMContentLoaded', function() {
  fetchTasks();
});
