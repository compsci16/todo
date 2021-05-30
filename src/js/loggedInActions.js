import displayProject from "./displayProject";
import firebase from './firebase';
import getFirestoreDB from "./firestoreDB";

const db = getFirestoreDB(); 
export default function loggedInActions() {
    var projectsRef;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var uid = user.uid;
            projectsRef = db.collection("users").doc(`${uid}`).collection("projects");
            displayProject(projectsRef);
        }
    });
}