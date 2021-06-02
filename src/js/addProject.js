import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB';
import firebase from './firebase';

export default function addProject(project) {
    const db = getFirestoreDB();
    const currentUserUID = getCurrentUserID();
    const projCollRef = db.collection(`users/${currentUserUID}/projects`);
    projCollRef.add({ ...project, timestamp: firebase.firestore.FieldValue.serverTimestamp() }).then(() => {
    }).catch((error) => {
        alert("Error " + error);
    });
}