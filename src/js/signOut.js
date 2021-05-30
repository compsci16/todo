import displayLogin from './displayLogin';
import firebase from './firebase';
const signOutBtn = document.getElementById('signOut');


function enableSignOutBtnFunctionality() {
    signOutBtn.addEventListener('click', function () {
        firebase.auth().signOut().then(() => {
            displayLogin();
        }).catch((error) => {
            alert(error);
        });
    });
}

export default enableSignOutBtnFunctionality; 