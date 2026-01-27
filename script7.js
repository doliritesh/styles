// State (task storage)
let tasks = [];

// DOM Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = ""; // Clear old UI

  tasks.forEach((task, index) => {
    // Create elements safely
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.innerText = task.text;
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete-btn");

    // Completed state
    if (task.completed) {
      li.classList.add("completed");
    }

    // Append elements
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // Toggle completed
    span.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      console.log("Task toggled:", tasks);
      renderTasks();
    });
  });
}

// Add task function
function addTask() {
  const taskText = taskInput.value.trim(); // validation

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Store in array (state management)
  tasks.push({
    text: taskText,
    completed: false
  });

  console.log("Task added:", tasks);

  taskInput.value = "";
  renderTasks();
}

// Button click
addBtn.addEventListener("click", addTask);

// Enter key press
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Delete using event delegation
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.parentElement;
    const index = Array.from(taskList.children).indexOf(li);

    tasks.splice(index, 1); // remove from array
    console.log("Task deleted:", tasks);
    renderTasks();
  }
});