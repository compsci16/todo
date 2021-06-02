import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB';
import firebase from './firebase';
import Task from './task';

function getTaskHtml(task, checked) {

}


// To add tasks to database AFTER the project is ready
export default function addTaskToDB(e, docID) {
    const currentUserID = getCurrentUserID();
    const db = getFirestoreDB();
    const title = document.getElementById('taskInput').value;
    const des = document.getElementById('taskDescription').value;
    const checkbox = document.getElementById('taskCheckbox').value;
    const prioirty = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    const task = new Task(title, des, dueDate, prioirty, checkbox);
    var projDoc = db.collection(`users/${currentUserID}/projects`).doc(docID);
    projDoc.update({
        tasks: firebase.firestore.FieldValue.arrayUnion(Object.assign({},task))
    });

}
