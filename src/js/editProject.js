import getFirestoreDB from './firestoreDB';
import getCurrentUserID from './currentUserID';

function editDisplay(docData) {
    let div = document.createElement('div');
    div.innerHTML = `<h1>${docData.title}</h1>`;
    const container = document.getElementById('currentProject'); 
    container.style.display = 'block'
    container.appendChild(div);


}


function editProject(e) {
    const db = getFirestoreDB();
    const div = e.currentTarget.parentElement.parentElement;
    const currentUserUID = getCurrentUserID();
    const id = div.getAttribute('id');
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
        document.getElementById('projectsDescription').style.display = 'none';
        editDisplay(docData);
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}


export default function activateEditBtn() {
    const btn = document.querySelector('#projectsDescription > *:last-child .projEdit');
    btn.addEventListener('click', editProject);
}