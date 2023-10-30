document.querySelector(".add-task").addEventListener("click", () => {
  const taskInput = document.querySelector("#task-input");
  const taskList = document.querySelector("#task-list");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskInput.value;
  listItem.addEventListener("click", () => {
    listItem.classList.toggle("complete");
  });

  taskList.appendChild(listItem);
  taskInput.value = "";
});
