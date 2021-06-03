import getFirestoreDB from './firestoreDB';
import getCurrentUserID from './currentUserID';
import addTask from './addTask';
import displayTask from './displayTask';

let id;

function editDisplay(docData) {
    let container = document.getElementById('currentProject');
    container.style.display = 'flex';
    container.innerHTML = `<h1>${docData.title}</h1>
    <!-- Add Task Button  -->
    <div id="addTaskDiv" class="clearfix mb-1 ml-5">
        <button class="btn  btn-primary float-end" type="button" id="addTaskBtn" data-bs-toggle="modal"
            data-bs-target="#addTaskModal">Add Task!</button> 
    </div>
    <div id="taskList">
        </div>`;

}

function saveTask() {
    const saveTaskBtn = document.getElementById('saveTaskBtn');
    document.getElementById('taskForm').reset();
    saveTaskBtn.addEventListener('click', (event) => addTask(event, id));
}

function editProject(e) {
    const db = getFirestoreDB();
    const div = e.currentTarget.parentElement.parentElement;
    const currentUserUID = getCurrentUserID();
    id = div.getAttribute('id');
    // alert(currentUserUID); 
    const docRef = db.doc(`users/${currentUserUID}/projects/${id}`);
    let docData;
    docRef.get().then((doc) => {
        if (doc.exists) {
            docData = doc.data();
            console.log(docData.title);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        // Step 1 - Display the Project
        document.getElementById('projectsDescription').style.display = 'none';
        editDisplay(docData);

        // Step 1.5 - Display the Project's tasks
        setTimeout(() => console.log(Object.values(docData.tasks).map(task => displayTask(task))), 500);
        // Step 2 - Add listener to save task btn
        saveTask();

    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}


export default function activateEditBtn() {
    const btn = document.querySelector('#projectsDescription > *:last-child .projEdit');
    btn.addEventListener('click', editProject);
}

export { id };