import firebase from './firebase';
import displayHome from './displayHome';

export default function alreadyLoggedin() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            displayHome();
        }

    })
}