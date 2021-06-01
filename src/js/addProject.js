/** 
 * Module to add a new Project to the database
*/

import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB';
import Project from './project';



/**
 * 
 * @param {String} title Title fo the project
 * @param {String} description Descritpion of the project
 * @param {Array} tasks List of tasks within the project
 * @summary Receives Project details and adds them to the user specific database
 */
function addProjectFunctionality(title, description, tasks) { 
    const project = new Project(title, description, tasks);
    const db = getFirestoreDB();
    const currentUserUID = getCurrentUserID();
    alert(currentUserUID); 
    const projDocRef = db.doc(`users/${currentUserUID}/projects/${title}`);
    projDocRef.set({ ...project }).then(() => {
        alert("Success");
    }).catch((error) => {
        alert("Error " + error);
    });
}

export default function addProject() {
    addProjectBtn.addEventListener('click', addProjectFunctionality);
}
