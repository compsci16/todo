import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB'; 
// To add tasks to database AFTER the project is ready
function addTask(projectTitle, task){
    const currentUserID = getCurrentUserID(); 
    var tasksDoc = db.collection('users/${currentUserUID}/projects/${projectTitle}').doc("tasks"); 
    tasksDoc.update({
        tasks: firebase.firestore.FieldValue.arrayUnion(task)
    });
}

export default function addTaskBtn(){
    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', addTask);
}