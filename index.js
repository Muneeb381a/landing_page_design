// script.js

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear list

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${todo}
      <button onclick="deleteTodo(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();
  if (!value) return;

  todos.push(value);
  saveTodos();
  renderTodos();
  input.value = "";
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

renderTodos(); // Show existing todos on page load
