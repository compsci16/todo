const addTaskBtn = document.getElementById('addTaskBtn');
const list = document.getElementById('modalTasksList');

function getTaskHtml(task, checked) {
  let str = `<div class="form-check">
        <input class="form-check-input" type="checkbox" value=""  ${checked}>
        <label class="form-check-label" for="flexCheckChecked">
          ${task}
        </label>
      </div>`
  return str;
}



function addTaskToDisplay() {
  const task = document.createElement('li');
  task.classList.add('list-group-item', 'mb-3');
  const taskInputBox = document.getElementById('taskInput');
  let taskInput = taskInputBox.value;
  const checkbox = document.getElementById('taskCheckbox');

  if (taskInput !== '') {
    if (checkbox.checked) {
      task.innerHTML = getTaskHtml(taskInput, 'checked');
    }
    else {
      task.innerHTML = getTaskHtml(taskInput, '')
    }
    list.appendChild(task); 
    document.getElementById("taskForm").reset(); 
  }
}

export default function modalAddTaskBtn() {
  addTaskBtn.addEventListener('click', addTaskToDisplay);
}