import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB'; 
// To add tasks to database AFTER the project is ready
export default function addTask(projectTitle, task){
    const currentUserID = getCurrentUserID(); 
    var tasksDoc = db.collection('users/${currentUserUID}/projects/${projectTitle}').doc("tasks"); 
    tasksDoc.update({
        tasks: firebase.firestore.FieldValue.arrayUnion(task)
    });
}