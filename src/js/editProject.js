import getFirestoreDB from './firestoreDB';
import getCurrentUserID from './currentUserID';
import addTaskToDB from './addTask';
import { displayTasks } from './displayTasks';

let id;

function editDisplay(docData) {
    let container = document.getElementById('currentProject');
    container.innerHTML = `<h1>${docData.title}</h1>
    <!-- Add Task Button  -->
    <div id="addTaskDiv" class="clearfix mb-1 ml-5">
        <button class="btn  btn-primary float-end" type="button" id="addTaskBtn" data-bs-toggle="modal"
            data-bs-target="#addTaskModal">Add Task!</button> 
    </div>`;
    container.style.display = 'flex';

}

function saveTask() {
    const saveTaskBtn = document.getElementById('saveTaskBtn');
    saveTaskBtn.addEventListener('click', (event) => addTaskToDB(event, id));
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
        // Step 0 - Display the current tasks
        console.log(Object.values(docData.tasks).forEach(task => console.log(task)));

        // Step 1 - Display the Project
        document.getElementById('projectsDescription').style.display = 'none';
        editDisplay(docData);

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