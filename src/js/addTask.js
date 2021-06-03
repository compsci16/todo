import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB';
import firebase from './firebase';
import Task from './task';
import displayTask from './displayTask'

function addTaskToDisplay(task) {
    displayTask(task);
}

function addTaskToDB(task, docID) {
    const currentUserID = getCurrentUserID();
    const db = getFirestoreDB();
    var projDoc = db.collection(`users/${currentUserID}/projects`).doc(docID);
    projDoc.update({
        tasks: firebase.firestore.FieldValue.arrayUnion(Object.assign({}, task))
    });
}


// To add tasks to database AFTER the project is ready
export default function addTask(e, docID) {
    const title = document.getElementById('taskInput').value;
    const des = document.getElementById('taskDescription').value;
    const checkbox = document.getElementById('taskCheckbox').value;
    const prioirty = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    const task = new Task(title, des, dueDate, prioirty, checkbox);
    addTaskToDB(task, docID);
    addTaskToDisplay(task);

}
