import getCurrentUserID from './currentUserID';
import getFirestoreDB from './firestoreDB';
import Project from './project';
const addProjectBtn = document.getElementById('addProjectBtn');
function addProject() {
    const title = prompt('Insert title');
    const description = prompt('Insert Description');
    const project = new Project(title, description);
    const db = getFirestoreDB();
    const currentUserUID = getCurrentUserID();
    //alert(currentUserUID); 
    db.doc(`users/${currentUserUID}/projects/${title}`).set({ ...project }).then(() => {
      //  alert("Success");
    }).catch((error) => {
        alert("Error " + error);
    });
}

export default function enableAddProjectBtnFunctionality() {
    addProjectBtn.addEventListener('click', addProject);
}
