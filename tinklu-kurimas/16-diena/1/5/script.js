const form = document.forms["todolist"];
const taskInput = document.getElementById("task");
const list = document.getElementById("list");

form.onsubmit = function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Prašome įvesti užduotį!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  list.appendChild(listItem);

  taskInput.value = "";
};
