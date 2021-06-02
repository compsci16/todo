import firebase from './firebase';
import getFirestoreDB from './firestoreDB';
import displayProject from './displayProject';
import activateEditBtn from './editProject';
// Loads previously added projects and listens for upcoming ones.
export default function loadProjects() {
  const db = getFirestoreDB();
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var uid = user.uid;
      var query = db.collection("users").doc(`${uid}`).collection("projects").orderBy('timestamp').limit(12);

      // Start listening to the query.
      query.onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'removed') {
            // deleteProject(change.doc.id); //PENDING
          } else if(change.type === 'added' ){
            var project = change.doc.data();
            displayProject(change.doc.id, project.title, project.timestamp);
            activateEditBtn();
          }
        });
      });
    }
  });
}