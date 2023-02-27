const classList = document.querySelector(".tasks-list");
const createTaskBlock = document.querySelector(".create-task-block");
const taskNameInput = createTaskBlock.querySelector(
  ".create-task-block__input"
);
const queryTasks = document.querySelector('#tasks')

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
  if (id) {newTag.dataset.taskId = `${id}`;}

  return newTag;
}

const CheckingValueForValidation = (value) =>{
  taskList = classList.querySelectorAll('.task-item__text')
  isValid = tasks.some(list => list.text === value)
  
  return !isValid
}

createTaskBlock.addEventListener("submit", (eventSubmit) => { 
  eventSubmit.preventDefault();
  const { target } = eventSubmit;
  const taskName = target.taskName;
  const inputValue = taskName.value;
  const haveError = createTaskBlock.querySelector('.error-message-block')
  if (!haveError) {
    const idDate = Date.now().toString();
    tasks.push({
      id: idDate,
      completed: false,
      text: inputValue,
    });
    CreateElementsInTasksList({
      id: idDate,
      completed: false,
      text: inputValue,
    });
  }else alert('У вас присутствует ошибка')
});

taskNameInput.addEventListener("input", (event) => {
  const { target } = event;
  const { value } = target;
  const isValid = CheckingValueForValidation(value)
  const haveError = createTaskBlock.querySelector('.error-message-block')
  if(isValid && value != ''){
    haveError?.remove()
  }else{
    const errorBlock = document.createElement('span')
    errorBlock.classList = 'error-message-block'
    errorBlock.innerHTML = 'У вас присутствуют ошибки в тексте задачи, напишите корректно'

    createTaskBlock.insertAdjacentElement("afterbegin",errorBlock)
  }
});

const {modalOverlay,confirmlDelete,cancelDelete, deleteModal}= CreateModalHidden()
document.body.insertAdjacentElement("afterbegin",modalOverlay)
let deletedTaskId = null

cancelDelete.addEventListener('click', () =>{
  modalOverlay.classList.add('modal-overlay_hidden') 
})

confirmlDelete.addEventListener('click', () => {
  const deleteIndex = tasks.findIndex((task) => task.id === deletedTaskId);
  if (deleteIndex >= 0) {
      tasks.splice(deleteIndex, 1);
      const taskItemHTML = document.querySelector(`[data-task-id="${deletedTaskId}"]`);
      taskItemHTML.remove();
      modalOverlay.classList.add('modal-overlay_hidden');
  }
});

classList.addEventListener('click', (deleteEvent) => {
  const { target } = deleteEvent;
    const closestTarget = target.closest('.task-item__delete-button');
    if (closestTarget) {
        const closestTask = closestTarget.closest('.task-item');
        if (closestTask) {
            const taskId = closestTask.dataset.taskId;
            deletedTaskId = taskId;
            modalOverlay.classList.remove('modal-overlay_hidden');
        }
    }
});

function CreateModalHidden() {

  const modalOverlay = AddElementInDom('div','modal-overlay modal-overlay_hidden')
  const deleteModal = AddElementInDom('div','delete-modal')
  const deleteTitle = AddElementInDom('h3','delete-modal__question')
  deleteTitle.textContent = 'Вы действительно хотите удалить эту задачу?'
  deleteModal.append(deleteTitle)
  const modalButtons = AddElementInDom('div','delete-modal__buttons')
  
  const cancelDelete = AddElementInDom('button', 'delete-modal__button delete-modal__cancel-button')
  cancelDelete.textContent = 'Отмена'

  const confirmlDelete = AddElementInDom('button', 'delete-modal__button delete-modal__confirm-button"')
  confirmlDelete.textContent = 'Удалить'

  modalButtons.append(cancelDelete,confirmlDelete)

  deleteModal.append(modalButtons)

  modalOverlay.append(deleteModal)

  return {modalOverlay,confirmlDelete,cancelDelete, deleteModal}
}

tasks.forEach((task) => CreateElementsInTasksList(task));
