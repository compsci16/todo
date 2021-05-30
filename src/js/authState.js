import displayHome from './displayHome';
import displayLogin from './displayLogin';
import firebase from './firebase';

const auth = firebase.auth();

function display(user) {
    if (user) {
         window.location = 'home.html';
    }
}
export default function onAuthChange() {
    auth.onAuthStateChanged(display);
}
