
export default function getProjectsDatabase(){
    var projectsRef; 
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var uid = user.uid;
            //alert(uid);
            projectsRef = db.collection("users").doc(`${uid}`).collection("projects");
        }
    });
    return projectsRef; 
}