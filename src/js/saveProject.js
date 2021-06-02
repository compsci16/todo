import Project from './project';
import addProject from './addProject';


function getProject() {
    const title = document.getElementById('projectTitle').innerText;
    const description = document.getElementById('projectDescription').value;
    let tasks = [];
    const project = new Project(title, description, tasks);
    return project;
}


function saveProjectFunctionality() {
    // Step 1 - add project to DB
    const project = getProject();
    addProject(project);

    // Step 3 - Close the Modal  -  PENDING


}

export default function saveProject() {
    const saveProjectBtn = document.getElementById('saveProjectBtn');
    saveProjectBtn.addEventListener('click', saveProjectFunctionality);
}
