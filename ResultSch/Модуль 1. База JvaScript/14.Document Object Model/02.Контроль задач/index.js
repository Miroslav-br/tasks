const classList = document.querySelector(".tasks-list");
const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

function CreateElementsInTasksList(tasksList) {
  /**
   * Создает список задач из taskList
   * в контейнере .tasks-list
   */
  const taskElement = AddElementInDom("div", "task-item", `${tasksList.id}`);
  const main_container = AddElementInDom("div", "task-item_main-container");
  const main_content = AddElementInDom("div", "task-item__main-content");

  const taskForm = AddElementInDom("form", "checkbox-form");

  const taskInput = AddElementInDom("input", "checkbox-form__checkbox");
  taskInput.id = `task-${tasksList.id}`;
  taskInput.type = "checkbox";
  taskInput.checked = tasksList.completed;
  const taskLabel = AddElementInDom("label");
  taskLabel.htmlFor = `task-${tasksList.id}`;
  taskForm.append(taskInput, taskLabel);

  const taskSpan = AddElementInDom("span", "task-item__text");
  taskSpan.textContent = tasksList.text;

  main_content.append(taskForm, taskSpan);
  main_container.append(main_content);

  const deleteButton = AddElementInDom(
    "button",
    "task-item__delete-button default-button delete-button"
  );
  deleteButton.dataset.deleteTaskId = `${tasksList.id}`;
  deleteButton.textContent = "Удалить";
  taskElement.append(main_container, deleteButton);

  classList.append(taskElement);
}

function AddElementInDom(tag, className = "", id = "") {
  const newTag = document.createElement(`${tag}`);
  newTag.classList = `${className}`;
  if (id) {
    newTag.dataset.taskId = `${id}`;
  }

  return newTag;
}

tasks.forEach((task) => {
  const newTask = CreateElementsInTasksList(task);
  classList.append(newTask);
});
