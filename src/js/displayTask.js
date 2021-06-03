function getTaskHTML(task) {
    const html = `Title: ${task.title}<br>Description: ${task.description}<br> Due Date: ${task.dueDate}<br>
    Prioirty: ${task.priority}<br>`;
    return html;
}



export default function displayTask(task) {
    const container = document.querySelector('#taskList');
    let div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML = getTaskHTML(task);
    console.log(div);
    container.appendChild(div);
}
