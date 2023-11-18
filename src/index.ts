import { store } from "./redux/store";
import { addTask, deleteTask, toggleTask } from "./redux/tasksSlice";
import { Task } from "./redux/actions";
import "./style/styles.css";
import crossIcon from "./img/cross.svg";
import tickIcon from "./img/tick.svg";


const form = document.getElementById("form") as HTMLFormElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const tasksList = document.getElementById("tasksList") as HTMLElement;

function renderTask(task: Task) {
  const cssClass = task.done ? "task-title task-title--done" : "task-title";
  const taskHTML = `
  <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
    <span class="${cssClass}">${task.text}</span>
    <div class="task-item__buttons">
      <button type="button" data-action="done" class="btn-action">
        <img src="${tickIcon}" alt="Done" width="18" height="18">
      </button>
      <button type="button" data-action="delete" class="btn-action">
        <img src="${crossIcon}" alt="Delete" width="18" height="18">
      </button>
    </div>
  </li>`;
  tasksList.insertAdjacentHTML("beforeend", taskHTML);
}

function updateUI(tasks: Task[]) {
  tasksList.innerHTML = "";
  tasks.forEach(renderTask);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = { id: Date.now(), text: taskText, done: false };
    store.dispatch(addTask(newTask));
    taskInput.value = "";
  }
});

tasksList.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const taskElement = target.closest("li");
  const taskId = taskElement ? parseInt(taskElement.id, 10) : null;

  if (taskId !== null) {
    if (target.closest('[data-action="delete"]')) {
      store.dispatch(deleteTask(taskId));
    } else if (target.closest('[data-action="done"]')) {
      store.dispatch(toggleTask(taskId));
    }
  }
});

store.subscribe(() => {
  const state = store.getState();
  updateUI(state.tasks);
});