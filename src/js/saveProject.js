/** 
 * Module to add a new Project to the database
*/

import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB';
import Project from './project';

function getProject(){
    const title = document.getElementById('projectTitle').innerText; 
    alert(title)
    const description = document.getElementById('projectDescription').value; 
    let tasks = []; 
    const project = new Project(title, description, tasks);
    return project; 
}


/**
 * 
 * @param {String} title Title fo the project
 * @param {String} description Descritpion of the project
 * @param {Array} tasks List of tasks within the project
 * @summary Receives Project details and adds them to the user specific database
 */
function saveProjectFunctionality() { 
    const project = getProject();
    const db = getFirestoreDB();
    const currentUserUID = getCurrentUserID();
   // alert(currentUserUID); 
    const projDocRef = db.doc(`users/${currentUserUID}/projects/${project.title}`);
    projDocRef.set({ ...project }).then(() => {
        alert("Success");
    }).catch((error) => {
        alert("Error " + error);
    });
}

export default function saveProject() {
    const saveProjectBtn = document.getElementById('saveProjectBtn'); 
    saveProjectBtn.addEventListener('click', saveProjectFunctionality);
}
