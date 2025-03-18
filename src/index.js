document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");

  if (!form || !input || !tasksList) {
    console.error("Missing form elements!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    const taskText = input.value.trim();
    if (taskText === "") return; // Ignore empty input

    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    tasksList.appendChild(newTask);

    input.value = ""; // Clear input field
  });
});